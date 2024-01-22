"use client"
import { useEffect, useRef, useState } from "react";
import NaveItem from "./NaveItem";
import { PRODUCT_CATEGORIES } from "@/config";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NaveItems = () => {
    const [activeIndex, setActiveIndex] = useState< null | number >(null);
    const isAnyOpen = activeIndex !== null 

    useEffect(()=>{
        const handleEscape = (e: KeyboardEvent) => {
            if(e.key === "Escape"){
                setActiveIndex(null)
            }
        }
        document.addEventListener("keydown",handleEscape);

        return () => {
            document.removeEventListener("keydown",handleEscape)
        }
        
    },[])

    const navRef = useRef<HTMLDivElement| null>(null);

    useOnClickOutside(navRef,()=>setActiveIndex(null));

    return (
        <div className="flex gap-4 h-full" ref={navRef}>

            {PRODUCT_CATEGORIES.map((category, i)=>{
                const handleOpen = () => {
                    if(activeIndex === i){
                        setActiveIndex(null)
                    }else
                    {
                        setActiveIndex(i)
                    }
                }

                const isOpen = i === activeIndex

                return(
                    <NaveItem category={category} handleOpen={handleOpen} isOpen={isOpen} key={category.vale} isAnyOpen={isAnyOpen}/>
                )
            })}

        </div>
    )
}

export default NaveItems;