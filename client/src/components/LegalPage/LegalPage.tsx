import Icon from "@/components/Icon/Icon";
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";

// Gabarit commun des pages légales (/cgu, /privacy) : bandeau + sections en cartes.

export const LEGAL_CONTACT_EMAIL = "contact@vigiep3.fr";
export const LEGAL_UPDATED_AT = "20 octobre 2026";

type LegalPageProps = {
	title: string;
	children: ReactNode;
};

export default function LegalPage({ title, children }: LegalPageProps) {
	const navigate = useNavigate();
	const location = useLocation();

	// Page ouverte directement (lien partagé, nouvel onglet) : pas d'historique
	// dans l'app, « Retour » mène alors à l'accueil plutôt que hors du site.
	const goBack = () => {
		if (location.key === "default") {
			navigate("/");
		} else {
			navigate(-1);
		}
	};

	return (
		<div className="bg-base-100">
			<header className="relative isolate flex min-h-36 flex-col justify-end overflow-hidden bg-primary px-4 pt-4 pb-16">
				<div className="flex items-start gap-3">
					<button
						type="button"
						onClick={goBack}
						aria-label="Retour"
						className="btn btn-square btn-md shrink-0 rounded-2xl border border-white/40 bg-white/20 shadow-none hover:bg-white/50"
					>
						<Icon
							name="angleSmallLeft"
							className="h-4 w-4 fill-white"
							aria-hidden="true"
						/>
					</button>

					<div>
						<h1 className="font-title text-2xl font-bold text-accent">
							{title}
						</h1>
						<p className="mt-1 text-sm text-white/85">
							En vigueur au {LEGAL_UPDATED_AT}
						</p>
					</div>
				</div>
			</header>

			<div className="relative -mt-8 space-y-4 px-4 pb-6">{children}</div>
		</div>
	);
}

type LegalSectionProps = {
	title: string;
	children: ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
	return (
		<section className="space-y-3 rounded-3xl bg-base-300 p-4 text-sm text-black">
			<h2 className="font-title text-lg font-bold text-primary">
				{title}
			</h2>
			{children}
		</section>
	);
}
