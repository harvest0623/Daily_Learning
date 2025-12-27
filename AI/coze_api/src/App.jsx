import { useState, useRef} from "react";

export default function App() {
    const [selectedImage, setSelectedImage] = useState(null);
    const audioRef = useRef(null);
    const handleImageUpload = (e) => {
        // console.log(e.target.files[0]);
        const file = e.target.files[0];
        if (file) {
            // 将图片处理成字符串路径
            const imageUrl = URL.createObjectURL(file);
            // console.log(imageUrl);
            setSelectedImage(imageUrl);
            // 交给工作流
            realRecognition(file);
        }
    }

    const realRecognition = async(file) => {
        const API_TOKEN = import.meta.env.VITE_COZE_IMAGE_TO_TEXT_AND_VOICE;
        const dataUrl = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
        // console.log(dataUrl);
        
        // 发请求
        const response = await fetch('/coze-api/run', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type':   'application/json'
            },
            body: JSON.stringify({
                image: dataUrl
            })
        })
        const data = await response.json();
        console.log(data);
        audioRef.current.src = data.audio_file.url;
        audioRef.current.play();
    }

    return (
        <div className="update-image">
            <input type="file" onChange={handleImageUpload}/>
            <div className="preview">
                <img width={100} src={selectedImage} alt="" />
            </div>
            <audio ref={audioRef}></audio>
        </div>
    )
}
