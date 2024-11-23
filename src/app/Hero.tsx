// React and Next.js imports
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import { RevealFx } from "@/components/once-ui/RevealFx/RevealFx";
import { SparkleFx } from "@/components/once-ui/SparkleFx/SparkleFx";

const Hero = () => {
    return (
        <Section className="flex items-start justify-center min-h-screen pt-16">
            <RevealFx>
                <Container>
                    <div className="text-center">

                        <h1 className="text-6xl md:text-8xl font-bold text-slate-50">

                            <Balancer>
                                {/* <SparkleFx
                                    speed="slow"
                                    count={50}
                                > */}
                                    Passionate Developper
                                {/* </SparkleFx> */}

                            </Balancer>

                        </h1>
                        <h3 className="text-muted-foreground mt-4">
                            <Balancer>
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Balancer>
                        </h3>
                    </div>
                </Container>
            </RevealFx>
        </Section>
    );
};

export default Hero;
