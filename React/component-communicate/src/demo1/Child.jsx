export default function Child(props) {
    console.log(props);
    // props.msg = 'harvest';
    return (
        <div>子组件 -- {props.msg}</div>
    )
}
