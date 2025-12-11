import { useState } from "react";

export default function Control() {
    const [message, setMessage] = useState('123');
    function changeHandler(e) {
        console.log(e.target.value);
        setMessage(e.target.value);
    }
    return (
        <div>
            <input type="text" value={message} onChange={changeHandler}/>
        </div>
    )
}
