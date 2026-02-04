import { compile } from './compiler.ts'
import { useContext, useEffect, useState } from 'react'
import { PlaygroundContext } from '../../ReactPlayground/PlaygroundContext.tsx'
import Editor from '../CodeEditor/Editor.tsx'
import iframeRaw from './iframe.html?raw'
import { IMPORT_MAP_FILE_NAME } from '../../ReactPlayground/files.ts'

export default function Preview() {
    const { files } = useContext(PlaygroundContext);
    const [compiledCode, setCompiledCode] = useState<string>('');
    const [iframeUrl, setIframeUrl] = useState<string>('');
    // console.log(compile(files), 'compiledCode');

    useEffect(() => { 
        setCompiledCode(compile(files));
    }, [files]);

    const getIframeUrl = () => {
    const res = iframeRaw.replace (
        '<script type="importmap"></script>',
        `<script type="importmap">${files[IMPORT_MAP_FILE_NAME].value}</script>`,
    ).replace(
        '<script type="module" id="appSrc"></script>',
        `<script type="module" id="appSrc">${compiledCode}</script>`,
    )
    return URL.createObjectURL(new Blob([res], { type: 'text/html' }));
  }

    useEffect(() => {
        setIframeUrl(getIframeUrl());
    }, [files[IMPORT_MAP_FILE_NAME].value, compiledCode]);
    
    return (
        <div style={{height: '100%'}}>
            <iframe src={iframeUrl} style={{height: '100%', width: '100%', border: 'none', padding: 0}} />
            {/* <Editor file={{
                name: 'dist.js',
                value: compiledCode,
                language: 'javascript',
            }} /> */}
        </div>
    )
}