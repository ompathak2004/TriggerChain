"use client";
import { useRouter } from "next/navigation"
import { LinkButtons } from "./buttons/LinkButtons"
// import { LinkButtons } from "./buttons/LinkButtons"

import { PrimaryButton } from "./buttons/PrimaryButton";
import { DarkButton } from "./buttons/DarkButton";

export const Appbar = () => {
    const router = useRouter();
    return <div className="flex border-b justify-between p-4">
        <div className="flex flex-col justify-center text-2xl font-extrabold">
            Zapier
        </div>
        <div className="flex">
            <div className="pr-4">
                <LinkButtons onClick={() => {}}>Contact Sales</LinkButtons>
            </div>
            <div className="pr-4">
                <LinkButtons onClick={() => {
                    router.push("/login")
                }}>Login</LinkButtons>
            </div>
            <PrimaryButton onClick={() => {
                router.push("/signup")
            }}>
                Signup
            </PrimaryButton>          
        </div>
    </div>
}