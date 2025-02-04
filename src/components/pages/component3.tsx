import {useContext} from "react";
import {customerContext} from "./component1.tsx";
import {Component5} from "./Component5.tsx";


export function Component3() {
    const customer = useContext(customerContext)
    return (
        <>
            <div>

                access Component1 value: {customer}
            </div>
            <Component5 />
        </>
    );
}
