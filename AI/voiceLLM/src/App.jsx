import React, { useRef, useState } from 'react'
import './App.css'

export default function App() {
    const [status, setStatus] = useState('ready');
    const audioRef = useRef(null);
    const [inputText, setInputText] = useState('');

    // 将 base64 格式解析成一个 url
    function createBlobUrl(base64AudioData) {
        let byteArrays = [];
        let byteCharacters = atob(base64AudioData);
        for (let offset = 0; offset < byteCharacters.length; offset++){
            let byteArray = byteCharacters.charCodeAt(offset); // 将 ASCII 字符串中的每一个字符处理成 UTF-16 编码格式
            byteArrays.push(byteArray);
        }
        let blob = new Blob([new Uint8Array(byteArrays)], {type: 'audio/mp3'});

        return URL.createObjectURL(blob); // 负责将二进制的数据处理成一个可以用的 url 格式的样子
    }

    const generateAudio = async() => {
        if (!inputText) {  // 用户什么都没输入
            return;
        }

        const token = import.meta.env.VITE_ACCESS_TOKEN;
        const appId = import.meta.env.VITE_APP_IP;
        const clusterId = import.meta.env.VITE_CLUSTRE_ID;
        const voiceName = 'zh_female_meilinvyou_moon_bigtts';
        const endpoint = '/tts/api/v1/tts';

        const headers = {
            Authorization: `Bearer;${token}`,
            'Content-Type': 'application/json'
        }
        const payload = {
            app: {
                cluster: clusterId,
                appid: appId,
                token
            },
            user: {
                uid: 'harvest'
            },
            audio: {
                voice_type: voiceName,
                encoding: 'ogg_opus',
                emotion: 'happy'
            },
            request: {
                reqid: Math.random().toString(36).substring(7),
                text: inputText,
                operation: 'query'
            }
        }
        setStatus('loading...');
        const res = await fetch(endpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify(payload)
        })
        const data = await res.json();
        console.log(data.data);

        // 解析 base64 格式的资源
        const url = createBlobUrl(data.data);

        audioRef.current.src = url;
        audioRef.current.play();
    }
    return (
        <div className='container'>
            <div>
                <label>Prompt</label>
                <button onClick={generateAudio}>播放</button>
                <textarea className='input' type='text' onChange={(e) => {
                    setInputText(e.target.value)
                }}></textarea>
            </div>
            <div className="output">
                <div>{status}</div>
                <audio ref={audioRef}></audio>
            </div>
        </div>
    )
}
