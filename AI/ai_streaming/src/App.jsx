import { useRef, useState } from 'react';
import './App.css'

export default function App() {
    const [question, setQuestion] = useState('讲一个中国神话中女娲补天的故事');
    const [content, setContent] = useState('');
    const checkRef = useRef(null);
    const update = async () => {
        // 获取到用户在 input 框输入的内容,传给dp，将 dp 返回的内容展示在页面上
        if(!question) return; // 如果用户什么都没输入
        setContent('思考中...');
        const endpoint = 'https://api.deepseek.com/chat/completions';
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
        }
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    {role: 'user', content: question}
                ],
                stream: checkRef.current.check
            })
        })
        if(checkRef.current.checked) {  // 要 LLM 以流式资源输出
            // console.log(response.body.getReader());
            // setContent((pre) => {})
        } else {
            const result = await response.json();
            setContent(result.choices[0].message.content);
        }
        // .then(res => {
        //     return res.json();
        // })
        // .then(result => {
        //     // console.log(result.choices[0].message.content);
        //     setContent(result.choices[0].message.content);
        // })
    }
    const handleChange = (e) => {
        // console.log(e.target.value);
        setQuestion(e.target.value);
    }
    return (
        <div className="container">
            <div>
                <label htmlFor="question">输入：</label>
                <input type="text" id="question" value={question} onChange={handleChange}/>
                <button onClick={update}>提交</button>
            </div>
            <div className="output">
                <div>
                    <label htmlFor="check">Streaming</label>
                    <input type="checkbox" id="check" ref={checkRef} />
                    <div>{content}</div>
                </div>
            </div>
        </div>
    )
}
