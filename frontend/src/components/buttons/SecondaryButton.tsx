import { ReactNode } from "react"

export const SecondaryButton =({children, onClick, size="small"}:{
    children :ReactNode,
    onClick :()=>void,
    size ?:"big" | "small"
})=>{
    return <div onClick={onClick} className={`cursor-pointer hover:shadow-md border text-black border-black rounded-full ${size === "small" ? "text-sm px-8 pt-2" : "text-xl px-10 py-4"}`}>
        {children}
    </div>
}