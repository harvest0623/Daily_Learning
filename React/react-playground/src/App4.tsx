import React, { useRef } from 'react'
import { transform } from '@babel/standalone'
import type { PluginObj } from '@babel/core'


export default function App4() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const code =`
    import { useEffect, useState } from "react";

    function App() {
        const [num, setNum] = useState(() => {
            const num1 = 1 + 2;
            const num2 = 2 + 3;
            return num1 + num2
        });
        return (
            <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
        );
    }
        
    export default App;`

    const code1 = `
        function add(a, b) {
            return a + b;
        }
        export default add;
    `;

    const url = URL.createObjectURL(new Blob([code1], { type: 'application/javascript' }));

    const code2 = `
        import { add } from './add.ts';
        console.log(add(1, 2));
    `;

    const transformImportSourcePlugin: PluginObj = {
        visitor: {
            ImportDeclaration(path) {
                path.node.source.value = url;
            }
        }
    }

    function onClick() {
        if (!textareaRef.current) {
            return;
        }
        // console.log(textareaRef.current);
        // console.log(textareaRef.current.value);
        const result = transform(textareaRef.current.value, {
            presets: ['react', 'typescript'],
            filename: 'demo.ts',
            plugins: [transformImportSourcePlugin]
        })
        console.log(result.code);
    }
    return (
        <div>
            <textarea ref={textareaRef} style={{ width: '500px', height: '300px' }} defaultValue={code2}></textarea>
            <button onClick={onClick}>编译</button>
        </div>
    )
}

// React.createElement(
//     "div",
//     {
//         onClick: () => setNum((prevNum) => prevNum + 1)
//     },
//     [
//         React.createElement(
//             "textarea",
//             {},
//             null
//         ),
//         React.createElement(
//             "button",
//             {
//                 onClick: onClick
//             },
//             "编译"
//         )
//     ]
// );