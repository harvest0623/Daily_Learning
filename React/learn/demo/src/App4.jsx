import React from 'react'

export default function App4() {
    // function handler(e) {
    //     console.log('hello', e);
    // }
    const list = [
        { id: 1, name: 'react' },
        { id: 2, name: 'vue' },
        { id: 3, name: 'html' },
        { id: 4, name: 'css' },
    ];
    function handler(name) {
        console.log(name);
    }
    return (
        <div>
            {/* <button onClick={handler}>click me!</button> */}
            <ul>
                {
                    list.map((item, i) => {
                        return <li key={item.id} onClick={() => handler(item.name)}>{item.name}</li>;
                    })
                }
            </ul>
        </div>
    )
}