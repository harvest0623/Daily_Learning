import useCountStore from './store/count.store.js'
import TodoComponent from './components/TodoComponent.jsx'

export default function App() {
    return (
        <div>
            <h1>Count: {useCountStore((state) => state.count)}</h1>
        </div>
    )
}