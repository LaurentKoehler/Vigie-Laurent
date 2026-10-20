import LegalPage, {
	LEGAL_CONTACT_EMAIL,
	LegalSection,
} from "@/components/LegalPage/LegalPage";
import { Link } from "react-router";

// Listes plutôt que tableaux : la cible est un écran de 375 px.

const COLLECTED_DATA = [
	{
		data: "Pseudo, adresse e-mail, mot de passe",
		when: "à l'inscription",
		why: "créer et sécuriser votre compte",
	},
	{
		data: "Adresse postale et ses coordonnées géographiques",
		when: "à l'inscription",
		why: "vous prévenir des incidents signalés près de chez vous",
	},
	{
		data: "Nom et adresse e-mail de votre compte Google",
		when: "si vous choisissez la connexion Google",
		why: "vous connecter sans mot de passe",
	},
	{
		data: "Position en temps réel",
		when: "uniquement si vous l'activez",
		why: "vous alerter là où vous vous trouvez",
	},
	{
		data: "Signalements, photos, commentaires, votes",
		when: "quand vous les publiez",
		why: "le fonctionnement même de Vigie",
	},
	{
		data: "Abonnement aux notifications de votre appareil (et le type de navigateur utilisé)",
		when: "uniquement si vous les activez",
		why: "vous envoyer des alertes même quand le site est fermé",
	},
	{
		data: "Adresse IP",
		when: "à chaque visite",
		why: "limiter les abus (nombre de requêtes)",
	},
];

const PROVIDERS = [
	{
		name: "OVH",
		role: "hébergement du site et de la base de données",
		where: "Allemagne (Union européenne)",
	},
	{
		name: "Brevo",
		role: "envoi des e-mails (vérification de compte, alertes). Brevo conserve un historique des envois pendant une durée limitée",
		where: "Union européenne",
	},
	{
		name: "Google",
		role: "connexion avec un compte Google (si vous la choisissez) et stockage des sauvegardes, chiffrées avant leur envoi",
		where: "États-Unis et Union européenne",
	},
	{
		name: "Services de notification de votre navigateur (Google, Mozilla, Apple, Microsoft)",
		role: "acheminement des notifications sur votre appareil (si vous les activez)",
		where: "selon votre navigateur",
	},
	{
		name: "API Adresse (IGN, service public français)",
		role: "recherche et localisation de votre adresse à l'inscription",
		where: "France",
	},
	{
		name: "OpenStreetMap",
		role: "fond de carte : votre navigateur télécharge les images de la carte depuis leurs serveurs",
		where: "Royaume-Uni et Union européenne",
	},
];

const linkClassName = "font-bold text-primary underline";

function ContactLink() {
	return (
		<a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className={linkClassName}>
			{LEGAL_CONTACT_EMAIL}
		</a>
	);
}

export default function Privacy() {
	return (
		<LegalPage title="Politique de confidentialité">
			<LegalSection title="Un projet d'école">
				<p>
					Vigie est un <strong>projet pédagogique</strong> réalisé
					dans le cadre d'une formation de développeur web, et non un
					service exploité commercialement (voir les{" "}
					<Link to="/cgu" className={linkClassName}>
						conditions générales d'utilisation
					</Link>
					). Nous traitons toutefois vos données avec le même sérieux
					que pour un vrai service.
				</p>
			</LegalSection>

			<LegalSection title="1. Responsable du traitement">
				<p>Laurent Koehler, particulier, éditeur du site vigiep3.fr.</p>
				<p>
					Contact : <ContactLink />
				</p>
			</LegalSection>

			<LegalSection title="2. Les données que nous traitons">
				<ul className="space-y-3">
					{COLLECTED_DATA.map(({ data, when, why }) => (
						<li key={data}>
							<p className="font-bold text-primary">{data}</p>
							<p>
								Quand : {when}. Pourquoi : {why}.
							</p>
						</li>
					))}
				</ul>
				<p>
					<strong>
						Votre mot de passe n'est jamais stocké en clair
					</strong>{" "}
					: seule une empreinte chiffrée (argon2) est conservée, et
					personne ne peut retrouver le mot de passe d'origine à
					partir d'elle.
				</p>
				<p>
					<strong>Vos photos</strong> sont redimensionnées sur votre
					appareil avant l'envoi, ce qui supprime leurs métadonnées,
					dont la position GPS de la prise de vue.
				</p>
				<p>
					<strong>Ce qui est public</strong> : vos signalements, vos
					photos, vos commentaires et votre pseudo sont visibles par
					tous les visiteurs du site, même sans compte, ainsi que{" "}
					<strong>l'emplacement de vos signalements</strong>. Votre
					adresse e-mail, votre adresse postale et votre position ne
					sont jamais affichées.
				</p>
			</LegalSection>

			<LegalSection title="3. Sur quelle base">
				<ul className="list-disc space-y-1 pl-5">
					<li>
						<strong>
							L'exécution des conditions d'utilisation
						</strong>{" "}
						: votre compte, votre adresse, vos publications et
						l'envoi des alertes. Sans ces données, le service ne
						peut pas fonctionner.
					</li>
					<li>
						<strong>Votre consentement</strong> : la connexion
						Google, la position en temps réel et les notifications
						sur votre appareil. Vous pouvez le retirer à tout moment
						depuis votre profil ou les réglages de votre navigateur.
					</li>
					<li>
						<strong>L'intérêt légitime</strong> : la protection du
						site contre les abus, à partir de votre adresse IP.
					</li>
				</ul>
			</LegalSection>

			<LegalSection title="4. Qui a accès à vos données">
				<p>
					Vos données ne sont{" "}
					<strong>
						ni vendues, ni louées, ni utilisées à des fins
						publicitaires
					</strong>
					. Seuls les prestataires techniques suivants y ont accès, et
					uniquement pour ce qui les concerne :
				</p>
				<ul className="space-y-3">
					{PROVIDERS.map(({ name, role, where }) => (
						<li key={name}>
							<p className="font-bold text-primary">{name}</p>
							<p>
								{role}. Localisation : {where}.
							</p>
						</li>
					))}
				</ul>
				<p>
					Les transferts vers les États-Unis (Google) sont encadrés
					par le Data Privacy Framework, reconnu par la Commission
					européenne.
				</p>
			</LegalSection>

			<LegalSection title="5. Combien de temps">
				<ul className="list-disc space-y-1 pl-5">
					<li>
						<strong>Votre compte et vos données</strong> : tant que
						votre compte existe.
					</li>
					<li>
						<strong>
							Un compte dont l'e-mail n'est jamais vérifié
						</strong>{" "}
						: il peut être remplacé si quelqu'un s'inscrit avec la
						même adresse ou le même pseudo, en prouvant qu'il
						connaît le mot de passe.
					</li>
					<li>
						<strong>Les adresses IP</strong> : elles ne sont jamais
						écrites sur le disque. Elles restent en mémoire environ
						une heure, le temps de compter les requêtes, puis sont
						oubliées.
					</li>
					<li>
						<strong>Les journaux techniques</strong> du serveur :
						leur taille est limitée, et ils sont remplacés au fur et
						à mesure.
					</li>
					<li>
						<strong>Les sauvegardes</strong> : chaque sauvegarde de
						la base est chiffrée, conservée 14 jours, puis
						supprimée.
					</li>
					<li>
						<strong>À l'arrêt du projet</strong>, toutes les données
						seront effacées.
					</li>
				</ul>
			</LegalSection>

			<LegalSection title="6. Suppression de votre compte">
				<p>
					Vous pouvez supprimer votre compte à tout moment, depuis
					votre profil :
				</p>
				<ul className="list-disc space-y-1 pl-5">
					<li>
						<strong>effacés immédiatement</strong> : vos adresses,
						votre position, votre liaison Google, vos badges, vos
						abonnements aux notifications ;
					</li>
					<li>
						<strong>conservés de façon anonyme</strong> : vos
						signalements, commentaires et votes, désormais attribués
						à « Anonyme ». Ils sont conservés pour que les autres
						utilisateurs gardent l'historique des incidents de leur
						quartier. Plus rien ne permet de les relier à vous.
					</li>
				</ul>
				<p>
					Les sauvegardes antérieures à la suppression disparaissent
					d'elles-mêmes au bout de 14 jours.
				</p>
			</LegalSection>

			<LegalSection title="7. Cookies et stockage dans votre navigateur">
				<p>
					Vigie n'utilise{" "}
					<strong>
						aucun cookie publicitaire, aucun outil de mesure
						d'audience et aucun traceur
					</strong>
					. Seules des données techniques indispensables sont stockées
					dans votre navigateur :
				</p>
				<ul className="list-disc space-y-1 pl-5">
					<li>
						votre <strong>session de connexion</strong>, pour rester
						connecté ;
					</li>
					<li>
						un <strong>code de sécurité temporaire</strong> (10
						minutes) pendant la connexion Google, pour bloquer les
						tentatives de détournement ;
					</li>
					<li>
						votre{" "}
						<strong>
							réponse à la proposition d'activer les notifications
						</strong>
						, pour ne pas vous la reposer à chaque visite ;
					</li>
					<li>
						l'<strong>état de lecture de vos notifications</strong>,
						effacé à la fermeture de l'onglet.
					</li>
				</ul>
				<p>
					Ces éléments sont strictement nécessaires au fonctionnement
					du site, et ne nécessitent donc pas votre consentement.
				</p>
			</LegalSection>

			<LegalSection title="8. Sécurité">
				<ul className="list-disc space-y-1 pl-5">
					<li>Toutes les communications sont chiffrées (HTTPS).</li>
					<li>
						La base de données n'est pas accessible depuis Internet.
					</li>
					<li>
						L'accès au serveur est réservé à l'éditeur, par clé de
						chiffrement.
					</li>
				</ul>
			</LegalSection>

			<LegalSection title="9. Âge minimum">
				<p>
					Vigie est réservé aux personnes de{" "}
					<strong>15 ans et plus</strong>, l'âge à partir duquel un
					mineur peut consentir seul au traitement de ses données en
					France.
				</p>
			</LegalSection>

			<LegalSection title="10. Vos droits">
				<p>Conformément au RGPD, vous pouvez à tout moment :</p>
				<ul className="list-disc space-y-1 pl-5">
					<li>
						<strong>modifier votre pseudo</strong> et{" "}
						<strong>supprimer votre compte</strong>, directement
						depuis votre profil ;
					</li>
					<li>
						demander l'<strong>accès</strong> à vos données et une
						copie dans un format lisible (
						<strong>portabilité</strong>
						), leur <strong>rectification</strong> (par exemple
						votre adresse e-mail), la <strong>limitation</strong> de
						leur traitement, ou vous y <strong>opposer</strong>, en
						écrivant à <ContactLink />.
					</li>
				</ul>
				<p>Une réponse vous sera apportée dans un délai d'un mois.</p>
				<p>
					Si vous estimez que vos droits ne sont pas respectés, vous
					pouvez adresser une réclamation à la CNIL (cnil.fr).
				</p>
			</LegalSection>
		</LegalPage>
	);
}
