import { useRef } from "react";

export default function UnControl() {
    const inputRef = useRef(null);
    function login() {
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={login}>登录</button>
        </div>
    )
}
