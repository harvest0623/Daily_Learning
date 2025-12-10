import Head from './components/head/Head.jsx'
import Main from './components/main/Main.jsx'

export default function App() {
    return (
        <div className="page">
        <div className="head">
            <Head></Head>
        </div>
            <div className="main">
                <Main></Main>
            </div>
            <div className="foot"></div>
        </div>
    )
}