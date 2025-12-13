import { useContext } from 'react'
import { Context } from './Parent' 

export default function Child2() {
    const msg = useContext(Context)
    return (
        <div>
        <h4>孙子组件 --- {msg}</h4>
        </div>
    )
}

