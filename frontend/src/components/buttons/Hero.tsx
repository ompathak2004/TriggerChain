"use client"
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { Feature } from "./Feature";

export const Hero = () => {
    const router = useRouter();
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex justify-center">
                <motion.div 
                    className="text-5xl font-bold  text-center pt-8 max-w-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Automate as fast as you can type    
                </motion.div>
            </div>
            <div className="flex justify-center pt-2">
                <motion.div
                    className="text-xl font-bold  text-center pt-8 max-w-2xl"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    AI gives you automation superpowers, and Zapier puts them to work. Pairing AI and Zapier helps you turn ideas into workflows and bots that work for you.
                </motion.div>
            </div>

            <div className="flex justify-center pt-4">
                <motion.div
                    className="flex"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <PrimaryButton
                        onClick={() => {
                            router.push("/signup");
                        }}
                        size="big"
                    >
                        Get Started free
                    </PrimaryButton>
                    <div className="pl-4">
                        <SecondaryButton onClick={() => {}} size="big">
                            Contact Sales
                        </SecondaryButton>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="flex justify-center pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <Feature title={"Free Forever"} subtitle={"for core features"} />
                <Feature title={"More apps"} subtitle={"than any other platforms"} />
                <Feature title={"Cutting Edge"} subtitle={"AI Features"} />
            </motion.div>
        </motion.div>
    );
}
