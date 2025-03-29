"use client";
import { useRouter } from "next/navigation"
import { LinkButton } from "./buttons/LinkButton"
import { PrimaryButton } from "./buttons/PrimaryButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";

export const Appbar = () => {
    const router = useRouter();
    const [user, setUser] = useState<{name: string} | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }

        axios.get(`${BACKEND_URL}/api/v1/user`, {
            headers: {
                Authorization: token
            }
        }).then(response => {
            setUser(response.data.user);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });

    }, []);

    return <div className="flex border-b justify-between p-4">
        <div className="flex flex-col justify-center text-2xl font-extrabold">
            TriggerChain
        </div>
        <div className="flex">
            {!loading && (
                user ? (
                    <div className="flex items-center gap-4">
                        <div>Hello, {user.name}</div>
                        <LinkButton onClick={() => {
                            localStorage.removeItem("token");
                            router.push("/login");
                        }}>Logout</LinkButton>
                    </div>
                ) : (
                    <>
                        <div className="pr-4">
                            <LinkButton onClick={() => {}}>Contact Sales</LinkButton>
                        </div>
                        <div className="pr-4">
                            <LinkButton onClick={() => {
                                router.push("/login")
                            }}>Login</LinkButton>
                        </div>
                        <PrimaryButton onClick={() => {
                            router.push("/signup")
                        }}>
                            Signup
                        </PrimaryButton>
                    </>
                )
            )}
        </div>
    </div>
}