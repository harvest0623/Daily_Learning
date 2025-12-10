import './movieList.css'
import MovieItem from './MovieItem.jsx'

export default function MovieList() {
    return (
        <div className="movie-list">
            <div className="nav">
                <div className="nav-title">影院热映</div>
                <div className="more">
                    <span>查看更多</span>
                    <i className="iconfont icon-youjiantou"></i>
                </div>
            </div>
            <div className="list">
                <MovieItem></MovieItem>
                <MovieItem></MovieItem>
                <MovieItem></MovieItem>
                <MovieItem></MovieItem>
                <MovieItem></MovieItem>
                <MovieItem></MovieItem>
            </div>
        </div>
    )
}