import LegalPage, {
	LEGAL_CONTACT_EMAIL,
	LegalSection,
} from "@/components/LegalPage/LegalPage";
import { Link } from "react-router";

const EMERGENCY_NUMBERS = [
	{ number: "112", label: "numéro d'urgence européen" },
	{ number: "18", label: "pompiers" },
	{ number: "15", label: "SAMU" },
	{ number: "17", label: "police" },
	{
		number: "114",
		label: "urgences pour les personnes sourdes ou malentendantes (SMS ou application)",
	},
];

export default function Cgu() {
	return (
		<LegalPage title="Conditions générales d'utilisation">
			<LegalSection title="1. Un projet d'école, pas un service réel">
				<p>
					Vigie est un <strong>projet pédagogique</strong>, réalisé en
					équipe dans le cadre d'une formation de développeur web à la
					Wild Code School. Il est mis en ligne par Laurent Koehler, à
					titre personnel, pour démontrer le fonctionnement de
					l'application.
				</p>
				<p>
					Vigie{" "}
					<strong>n'est pas un service d'alerte en activité</strong> :
				</p>
				<ul className="list-disc space-y-1 pl-5">
					<li>
						les signalements visibles sur le site peuvent être des
						tests ou des données fictives ;
					</li>
					<li>
						aucune garantie n'est donnée sur la disponibilité du
						site, l'envoi des alertes ou leur exactitude ;
					</li>
					<li>
						le site peut être interrompu, modifié ou réinitialisé à
						tout moment, sans préavis. Les comptes et les
						signalements peuvent alors être effacés.
					</li>
				</ul>
			</LegalSection>

			<LegalSection title="2. Vigie ne contacte pas les secours">
				<p>
					<strong>
						Vigie ne transmet aucune information aux services
						d'urgence
					</strong>
					, et personne ne surveille les signalements publiés.
				</p>
				<p>En cas de danger, appelez directement :</p>
				<ul className="space-y-1">
					{EMERGENCY_NUMBERS.map(({ number, label }) => (
						<li key={number}>
							<a
								href={`tel:${number}`}
								className="font-bold text-primary underline"
							>
								{number}
							</a>{" "}
							: {label}
						</li>
					))}
				</ul>
				<p>
					Ne comptez jamais sur Vigie pour être secouru ou prévenu
					d'un danger réel.
				</p>
			</LegalSection>

			<LegalSection title="3. Accès au site">
				<p>
					La consultation de la carte, de la liste et des fiches
					d'incidents est libre et ne nécessite pas de compte.
				</p>
				<p>
					Pour signaler, commenter, confirmer ou infirmer un incident,
					vous devez créer un compte. Vigie est réservé aux personnes
					de <strong>15 ans et plus</strong> : en acceptant ces
					conditions, vous déclarez avoir au moins 15 ans. Vous êtes
					responsable de la confidentialité de votre mot de passe.
				</p>
			</LegalSection>

			<LegalSection title="4. Vos publications">
				<p>
					En publiant un signalement, un commentaire ou une photo,
					vous vous engagez à ne rien publier :
				</p>
				<ul className="list-disc space-y-1 pl-5">
					<li>
						d'illégal, d'injurieux, de diffamatoire ou de
						discriminatoire ;
					</li>
					<li>
						qui permette d'identifier une personne sans son accord
						(visage, plaque d'immatriculation, adresse précise d'un
						tiers…) ;
					</li>
					<li>de délibérément faux ou trompeur.</li>
				</ul>
				<p>
					L'éditeur peut supprimer tout contenu ou tout compte qui ne
					respecte pas ces règles, sans préavis.
				</p>
				<p>
					Les signalements et les commentaires ne peuvent être ni
					supprimés ni modifiés une fois publiés. Seuls le titre, la
					description et la photo d'un signalement en cours peuvent
					être corrigés par son auteur.
				</p>
			</LegalSection>

			<LegalSection title="5. Données personnelles">
				<p>
					Les données que nous collectons, leur utilisation et vos
					droits sont décrits dans notre{" "}
					<Link
						to="/privacy"
						className="font-bold text-primary underline"
					>
						politique de confidentialité
					</Link>
					.
				</p>
			</LegalSection>

			<LegalSection title="6. Cartographie">
				<p>
					Les données cartographiques proviennent d'OpenStreetMap, ©
					les contributeurs OpenStreetMap, sous licence ODbL.
				</p>
			</LegalSection>

			<LegalSection title="7. Modification des conditions">
				<p>
					Ces conditions peuvent évoluer. La version en vigueur est
					toujours celle affichée sur cette page.
				</p>
			</LegalSection>

			<LegalSection title="8. Contact">
				<p>
					Pour toute question :{" "}
					<a
						href={`mailto:${LEGAL_CONTACT_EMAIL}`}
						className="font-bold text-primary underline"
					>
						{LEGAL_CONTACT_EMAIL}
					</a>
				</p>
			</LegalSection>
		</LegalPage>
	);
}
