
"use client";
import { RevealFx } from "@/components/once-ui/RevealFx/RevealFx";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <RevealFx translateY={-20} delay={0.5}>
            <div className="container mx-auto text-white">
                <h1 className="font-geistMono tracking-tight text-3xl md:text-5xl text-white">
                    De l’Idée à la Réalisation
                </h1>
                <p className="max-w-3xl text-2xl/8 font-medium tracking-tight mt-2 bg-gradient-to-br  bg-clip-text text-transparent from-white to-white/40">
                    Mon Processus en 5 Étapes pour la réussite de votre projet
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    <BentoCard
                        eyebrow="1. Analyse et compréhension des besoins"
                        title="Comprendre vos objectifs"
                        description="Nous discutons ensemble pour cerner vos besoins, analyser vos contraintes techniques, budgétaires et temporelles, et établir un cahier des charges clair."
                        graphic={
                            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/ghyfFEStl6BNusZl0ZQd5r7JpM.png)] object-fill" />
                        }
                        className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl z-10"
                    />
                    <BentoCard
                        eyebrow="2. Conception et planification"
                        title="Planifier efficacement"
                        description="Création de wireframes, prototypes et choix des technologies adaptées. J'élabore une architecture technique robuste et valide le tout avec vous."
                        graphic={
                            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/7CJtT0Pu3w1vNADktNltoMFC9J4.png)] object-fill" />
                        }
                        className="lg:col-span-3 lg:rounded-tr-4xl"
                    />
                    <BentoCard
                        eyebrow="3. Développement"
                        title="Construire votre projet"
                        description="Développement du front-end et du back-end en suivant les meilleures pratiques. Des tests réguliers sont réalisés pour garantir un code de qualité."
                        graphic={
                            <div className="absolute  inset-0 -top-20 -left-60 bg-[url(https://framerusercontent.com/images/gR21e8Wh6l3pU6CciDrqt8wjHM.png)] object-scale-down" />
                        }
                        className="lg:col-span-2 lg:rounded-bl-4xl"
                    />
                    <BentoCard
                        eyebrow="4. Tests et mise en production"
                        title="Assurer la stabilité"
                        description="J'éffectue des tests fonctionnels, de performance et de compatibilité. Après validation, votre projet est déployé sur l'environnement choisi."
                        graphic={
                            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/PTO3RQ3S65zfZRFEGZGpiOom6aQ.png)] object-contain" />
                        }
                        className="lg:col-span-2"
                    />
                    <BentoCard
                        eyebrow="5. Suivi et support"
                        title="Garantir la pérennité"
                        description="Nous vous formons si nécessaire, assurons la maintenance, et restons disponibles pour ajouter des fonctionnalités ou améliorer votre projet."
                        graphic={
                            <div className="absolute inset-0 -top-44 -left-60 bg-[url(https://framerusercontent.com/images/h496iPSwtSnGZwpJyErl6cLWdtE.png)] object-contain" />
                        }
                        className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
                    />
                </div>
            </div>
        </RevealFx>
    );
}
export function BentoCard({
    dark = false,
    className = "",
    eyebrow,
    title,
    description,
    graphic,
    fade = [],
}: {
    dark?: boolean;
    className?: string;
    eyebrow: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
    graphic?: React.ReactNode;
    fade?: ("top" | "bottom")[];
}) {
    return (
        <motion.div
            initial="idle"
            whileHover="active"
            variants={{ idle: {}, active: {} }}
            data-dark={dark ? "true" : undefined}
            className={clsx(
                className,
                "group relative flex flex-col overflow-hidden rounded-lg",
                "bg-transparent transform-gpu [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  shadow-sm ring-1 ring-black/5",
                "data-[dark]:bg-gray-800 data-[dark]:ring-white/15"
            )}
        >
            <div className="relative h-[29rem] shrink-0">
                {graphic}
                {fade.includes("top") && (
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-white to-transparent group-data-[dark]:from-gray-800 opacity-25 pointer-events-none" />
                )}
                {fade.includes("bottom") && (
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-white to-transparent group-data-[dark]:from-gray-800 opacity-25 pointer-events-none" />
                )}
            </div>
            <div className="relative p-10  z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl">
                <h1>{eyebrow}</h1>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight   text-white">
                    {title}
                </p>
                <p className="mt-2 max-w-[600px] text-sm/6   text-gray-400">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
