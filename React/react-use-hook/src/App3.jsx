// import { useHover } from 'react-use';
import useHover from './hooks/useHover.jsx';

export default function App3() {
    const element = (hovered) => {
        return <div>
            Hover me! {hovered && 'Thanks!'}
        </div>
    }
    const [hoverable, hovered] = useHover(element);
    return (
        <div>
            {hoverable}
            {hovered ? 'yes ✅' : 'no ❌'}
        </div>
    )
}