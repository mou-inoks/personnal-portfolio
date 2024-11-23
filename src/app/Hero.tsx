// React and Next.js imports
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import { RevealFx } from "@/components/once-ui/RevealFx/RevealFx";
import { Spotlight } from "@/components/aceternity/Spotlight";

const Hero = () => {
    return (
        <Section className="flex items-start justify-center min-h-screen pt-16">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <RevealFx>
                <Container>
                    <div className="text-center top-9">
                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-white bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            <Balancer>
                                Salim Mouttaki
                            </Balancer>
                        </span>
                        <h3 className="text-muted-foreground mt-4 md:text-2xl">
                            <Balancer>
                                Software Engineering Student & Freelance Developer
                                Turning Ideas into Digital Reality
                            </Balancer>
                        </h3>
                    </div>
                </Container>
            </RevealFx>
        </Section>
    );
};

export default Hero;
