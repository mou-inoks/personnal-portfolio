// React and Next.js imports
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import { RevealFx } from "@/components/once-ui/RevealFx/RevealFx";
import { SparkleFx } from "@/components/once-ui/SparkleFx/SparkleFx";
import { LetterFx } from "@/components/once-ui/LetterFx/LetterFx";

const Hero = () => {
    return (
        <Section className="flex items-start justify-center min-h-screen pt-16">
            <RevealFx>
                <Container>
                    <div className="text-center">
                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-white bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            <Balancer>
                                {/* <SparkleFx
                                    speed="slow"
                                    count={50}
                                > */}
                                Salim Mouttaki
                                {/* </SparkleFx> */}
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
