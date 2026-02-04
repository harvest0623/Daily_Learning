import { useContext, useEffect, useState } from 'react'
import { PlaygroundContext } from '../../ReactPlayground/PlaygroundContext.tsx'
import { FileNameItem } from './FileNameItem.tsx'
import styles from './index.module.scss'
import { ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME } from '../../ReactPlayground/files.ts'

export default function FileNameList() {
    const { files, selectedFileName, setSelectedFileName, addFile, removeFile, updateFileName } = useContext(PlaygroundContext);
    const [tabs, setTabs] = useState<string[]>([]);
    const [createing, setCreateing] = useState<boolean>(false);

    useEffect(() => {
        setTabs(Object.keys(files));
    }, [files]);

    const handleEditComplete = (oldFileName: string, newFileName: string) => {
        updateFileName(oldFileName, newFileName);
        setSelectedFileName(newFileName);
    }

    const addTab = () => {
        const newname = `Comp${tabs.length + 1}.tsx`;
        addFile(newname);
        setCreateing(true);
    }

    // 不让删除的文件
    const readOnlyTabs = [ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME];

    return (
        <div className={styles['tabs']}>
            {tabs.map((tab, index, arr) => (
                <FileNameItem
                    key={tab}
                    value={tab}
                    actived={tab === selectedFileName}
                    onClick={() => setSelectedFileName(tab)}
                    onEditComplete={(name: string) => handleEditComplete(tab, name)}
                    createing={createing && index === arr.length - 1}
                    onRemove={(e: React.MouseEvent, name: string) => {
                        e.stopPropagation()  // 阻止事件冒泡，防止点击删除按钮后触发点击文件名事件
                        removeFile(name)
                        setSelectedFileName(tabs[0])
                    }}
                    readOnly={readOnlyTabs.includes(tab)}
                />

                // <div key={tab} onClick={() => setSelectedFileName(tab)}>{tab}</div>
            ))}
            <div className={styles['add']} onClick={addTab}>+</div>
        </div>
    )
}