import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

interface FileNameItemProps {
    value: string
    actived: boolean
    onClick: (value: string) => void,
    onEditComplete: (name: string) => void,
    createing: boolean,
    onRemove: (e: React.MouseEvent, name: string) => void,
    readOnly: boolean,
}

export function FileNameItem(props: FileNameItemProps) {
    const { value, actived, onClick, onEditComplete, createing, onRemove, readOnly } = props;
    const [editing, setEditing] = useState<boolean>(createing);
    const [name, setName] = useState<string>(value);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDoubleClick = () => {
        setEditing(true);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0)
    }

    useEffect(() => {
        if (createing) {
            inputRef.current?.focus();
        }
    }, [createing]);

    return (
        <div className={`${styles['tab-item']} ${actived ? styles['actived'] : ''}`} onClick={() => onClick(value)}>
            {
                editing ? (
                    <input
                        className={styles['tab-item-input']}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ref={inputRef}
                        onBlur={() => {
                            setEditing(false)
                            onEditComplete(name)
                        }}
                    />
                ) : (
                    <>
                        <span onDoubleClick={!readOnly ? handleDoubleClick : undefined}>{name}</span>
                        {!readOnly ? <span style={{ marginLeft: 5, display: 'flex' }} onClick={(e) => onRemove(e, name)}>
                            <svg width='12' height='12' viewBox='0 0 24 24'>
                                <line stroke='#999' x1='18' y1='6' x2='6' y2='18'></line>
                                <line stroke='#999' x1='6' y1='6' x2='18' y2='18'></line>
                            </svg>
                        </span> : null}
                    </>
                )
            }
        </div>
    )
}