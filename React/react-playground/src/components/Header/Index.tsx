import { useContext } from 'react'
import logoSvg from './icons/logo.svg'
import styles from './index.module.scss'
import { downLoadFiles } from '../../ReactPlayground/utils'
import { PlaygroundContext } from '../../ReactPlayground/PlaygroundContext'

export default function Header() {
    const { files } = useContext(PlaygroundContext);
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logoSvg} alt="" />
                <span>React Playground</span>
            </div>
            <button onClick={() => downLoadFiles(files)}>下载</button>
        </div>
    )
}