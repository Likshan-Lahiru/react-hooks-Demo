import {useEffect, useState} from "react";

export function ItemPage() {

    const[time,rendertime] = useState(0);
    const[num,setNum] = useState(0);
    const[fetchTimeCount,dataFetch] = useState(1);

    useEffect(() => {
        setTimeout(() => rendertime(time+1), 1000);
    });

    useEffect(() => {

        dataFetch(()=>num*2)
    },[num]);

    return (
        <>
            <div>Render Time :{time}</div>
            <div>change hook :{num}</div>
            <div>data fetch count :{fetchTimeCount}</div>

            <button onClick={()=>setNum(num+1)}>click</button>
        </>
    );
}
