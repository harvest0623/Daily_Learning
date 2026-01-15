import ImageCaptureAndProcess from '../components/imageCaptureAndProcess/Index'

// AI识物
export default function Recognition() {
    // 实际的识别逻辑
    const handleRecognition = (file) => {
        // 这里应该是实际的AI识别调用
        // 现在只是模拟识别过程
        console.log('开始识别图片:', file.name);
        setTimeout(() => {
            console.log('识别完成');
        }, 1000);
    };
    
    return (
        <ImageCaptureAndProcess onRecognition={handleRecognition}></ImageCaptureAndProcess>
    )
}