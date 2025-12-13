import Child from "./Child";

export default function Parent(props) {
    console.log(props);
    const state = {
        name: 'henry'
    };
    return (
        <div>
            <h2>父组件</h2>
            <Child msg = {state.name}/>
        </div>
    )
}
