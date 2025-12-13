import Child from "./Child"
import { useState } from "react";
export default function Parent() {
    let [count, setCount] = useState(1);
    const getNum = (n) => {
        setCount(n);
    }
    // console.log('hello');
    return (
        <div>
            <h2>父组件二 -- {count}</h2>
            <Child getNum = {getNum}></Child>
        </div>
    )
}
