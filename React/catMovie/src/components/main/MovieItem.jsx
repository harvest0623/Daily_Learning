import './movieItem.css';

export default function MovieItem() {
    return (
        <div className="item">
        <div className="pic">
            <img src="https://q6.itc.cn/q_70/images03/20250306/355fba6a5cb049f5b98c2ed9f03cc5e1.jpeg" alt="" />
        </div>
            <div className="name">得闲谨制</div>
            <div className="score">评分:6.9</div>
        </div>
    )
}