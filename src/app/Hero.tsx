

import React from "react";
import clsx from "clsx";
import { RevealFx } from "@/components/once-ui/RevealFx/RevealFx";

export default function Hero() {

    return (
        <div className="relative min-h-screen ">
            <Container className="relative py-20 sm:pb-24 sm:pt-36">
                <RevealFx>

                    <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">

                        <h1 className="font-geist text-5xl font-normal  tracking-tighter  bg-gradient-to-r from-zinc-100 via-stone-200/50 to-purple-200/70 bg-clip-text  text-transparent sm:text-7xl">
                            Développeur Freelance Passionné
                        </h1>
                        <div className="mt-6 space-y-6 font-geist text-md sm:text-xl tracking-tight text-gray-500">
                            <p>
                                Avec 4ans d'expérience en développement, je code par passion et maîtrise aussi bien le front-end, le back-end que la gestion de bases de données. En parallèle de mes études,
                                j'accompagne mes clients dans leurs projets en mettant en place des architectures solides, performantes et adaptées à leurs besoins.
                            </p>
                        </div>
                        <button className="mt-4 w-full md:w-52 font-geist tracking-tighter text-center rounded-md text-md bg-gradient-to-br from-zinc-400 to-zinc-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-zinc-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-zinc-500/70 flex items-center justify-center gap-2">
                            Github
                        </button>

                        <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                            {[
                                ["Projet réalisés", "7"],
                                ["Technologies maîtrisées", "+10"],
                                ["Localisation", "Genève"],
                                ["Clients satisfaits", "+10"],
                            ].map(([name, value]) => (
                                <div key={name}>
                                    <dt className="font-mono text-sm text-gray-300">{name}</dt>
                                    <dd className="mt-0.5 text-2xl font-normal font-geist tracking-tight text-gray-300">
                                        {value}
                                    </dd>
                                </div>
                            ))}
                        </dl>

                    </div>
                </RevealFx>

            </Container>
        </div>
    );
}



export function Container({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div
            className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
            {...props}
        />
    );
}





