import {useContext} from "react";
import {customerContext} from "./component1.tsx";

export function Component5() {
    const customer1 = useContext(customerContext)
    return (
        <>
            <div>{customer1}</div>
        </>
    );
}
