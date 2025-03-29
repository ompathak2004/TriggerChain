"use client";
import { Appbar } from "@/components/AppBar"
import { PrimaryButton } from "@/components/buttons/PrimaryButton"
import { Checkerfeature } from "@/components/Checkerfeature"
import { Input } from "@/components/Input"
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";

export default function(){
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const router = useRouter();
    return <div>
 <Appbar />
        <div className="flex justify-center">
            <div className="flex pt-8 max-w-4xl">
                <div className="flex-1 pt-20 px-4">
                    <div className="font-semibold text-3xl pb-4">
                    Join millions worldwide who automate their work using TriggerChain.
                    </div>
                    <div className="pb-6 pt-4">
                        <Checkerfeature label={"Easy setup, no coding required"} />
                    </div>
                    <div className="pb-6">
                        <Checkerfeature label={"Free forever for core features"} />
                    </div>
                    <Checkerfeature label={"14-day trial of premium features & apps"} />

                </div>
                <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded">
                    <Input label={"Name"} onChange={e => {
                        setName(e.target.value);
                    }} type="text" placeholder="Your name"></Input>
                    <Input onChange={e => {
                        setEmail(e.target.value);
                    }} label={"Email"} type="text" placeholder="Your Email"></Input>
                    <Input onChange={e => {
                        setPassword(e.target.value)
                    }} label={"Password"} type="password" placeholder="Password"></Input>

                    <div className="pt-4">
                        <PrimaryButton onClick={async () => {
                            const res = axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
                                username : email,
                                password,
                                name
                            })
                            router.push("/login");
                        }} size="big">Get started free</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
}