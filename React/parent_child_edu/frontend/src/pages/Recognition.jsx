import ImageCaptureAndProcess from '../components/imageCaptureAndProcess/Index'
import axios from '../http'

// AI识物
export default function Recognition() {
    const realRecognition = async (file) => {
        try {
            // 将图片资源处理成 base64 
            const dataUrl = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (err) => reject(err);
            })

            // 向工作流发请求
            await axios.post('/api/coze/recognition', {
                img: dataUrl
            })
        } catch (error) {

        }
    }

    return (
        <ImageCaptureAndProcess onRecognition={realRecognition}></ImageCaptureAndProcess>
    )
}