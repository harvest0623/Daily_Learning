import useCountStore from "../store/count"

export default function About() {
    let count = useCountStore((state) => state.count);
    return (
        <div>
            <h2>title-{count}</h2>
        </div>
    )
}
