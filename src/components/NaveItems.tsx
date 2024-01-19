"use client"
import { useState } from "react";
import NaveItem from "./NaveItem";
import { PRODUCT_CATEGORIES } from "@/config";

const NaveItems = () => {
    const [activeIndex, setActiveIndex] = useState< null | number >(null);
    const isAnyOpen = activeIndex !== null 
    return (
        <div className="flex gap-4 h-full">

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