'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {twMerge} from "tailwind-merge"
export type LinkExpandProps = {
    expandNameParam: string
    label:string
}
export default function LinkExpand({expandNameParam, label}: LinkExpandProps){
    const link = ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','s','s','s','s','s']
    const LinksElemnt = link.map((link) =>(<li key={link}>{link}</li>))
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const expand = searchParams.get(expandNameParam) === 'true'
    const classNameExpand = expand? '' : 'hidden' 

    const checkChangeHandler = (check:boolean) =>{
        const params = new URLSearchParams(searchParams)
        params.set(expandNameParam, `${check}`)
        router.replace(`${pathname}?${params}`)
    }

    return (
        <div data-type='Middler' className= {twMerge("flex flex-col  overflow-auto bg-red-400", expand && "flex-grow")}>                                             
        <div className="bg-neutral-300  overflow-auto rounded-md m-1">
        {label} <input type="checkbox"  checked={expand} onChange={(e)=>{checkChangeHandler(e.target.checked)}} />
            <ul className={classNameExpand}>                                
                {LinksElemnt
                }
            </ul>
        </div>                                                                
    </div>
    )
}