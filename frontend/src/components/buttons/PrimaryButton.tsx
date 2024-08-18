import { ReactNode } from "react"

export const PrimaryButton =({children , onclick , size} : {
    children : ReactNode
    onclick :()=> void,
    size : "big" | "small"
})=>{

    return <div className=""
    onClick={onclick}>
        {children}
    </div>
}