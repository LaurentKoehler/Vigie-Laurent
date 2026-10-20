import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

const PURGE_INTERVAL_MS = 60 * 1000;

export default function createIpRateLimit({
	max,
	windowMs,
	message,
}: {
	max: number;
	windowMs: number;
	message: string;
}): RequestHandler {
	const attemptsByIp = new Map<
		string,
		{ count: number; windowStart: number }
	>();

	// Ménage régulier : une IP dont la fenêtre est terminée est oubliée
	// (engagement de la politique de confidentialité, et pas de fuite mémoire).
	// unref() : ce minuteur n'empêche pas le processus de s'arrêter (tests Jest).
	setInterval(() => {
		const now = Date.now();
		for (const [ip, attempt] of attemptsByIp) {
			if (now - attempt.windowStart > windowMs) {
				attemptsByIp.delete(ip);
			}
		}
	}, PURGE_INTERVAL_MS).unref();

	return (req, res, next) => {
		const ip = req.ip ?? "unknown";
		const now = Date.now();
		const attempt = attemptsByIp.get(ip);

		if (attempt == null || now - attempt.windowStart > windowMs) {
			attemptsByIp.set(ip, { count: 1, windowStart: now });
			next();
			return;
		}

		if (attempt.count >= max) {
			res.status(StatusCodes.TOO_MANY_REQUESTS).json({
				error: "too_many_requests",
				message,
			});
			return;
		}

		attempt.count += 1;
		next();
	};
}
