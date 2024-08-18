import { useRouter } from "next/router"
import { LinkButtons } from "./buttons/LinkButtons"

export const Appbar = ()=>{
    const router = useRouter()
    return(
        <div className="flex border-b justify-between ">
            <div>
                Zappier
            </div>
            <div>
                <LinkButtons onClick={()=>{}}> Contact Sales</LinkButtons>
                <LinkButtons onClick={()=>{
                    router.push('/login')
                }}> Login</LinkButtons>
            </div>
        </div>
    )
}