import useCountStore from '../store/count.js'

export default function Home() {
    let count = useCountStore((state) => state.count);
    // console.log(count);
    const increase = useCountStore((state) => state.increase);
    const decrease = useCountStore((state) => state.decrease);
    return (
        <div>
            <button onClick={increase}>发送-{count}</button>
            <button onClick={() => decrease(10)}>减少-{count}</button>
        </div>
    )
}
