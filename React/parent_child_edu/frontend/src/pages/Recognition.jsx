import ImageCaptureAndProcess from '../components/imageCaptureAndProcess/Index'

// AI识物
export default function Recognition() {
    const realRecognition = () => {

    }

    return (
        <ImageCaptureAndProcess onRecognition={realRecognition}></ImageCaptureAndProcess>
    )
}