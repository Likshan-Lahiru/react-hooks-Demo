import {createContext, useState} from "react";
import {Component3} from "./component3.tsx";


   export const customerContext = createContext()

export function Component1() {


    const[customerName,setValue1] = useState("customer Kaveeja")

    return (
        <customerContext.Provider value={customerName} >

        <Component3 />

        </customerContext.Provider>
    );
}
