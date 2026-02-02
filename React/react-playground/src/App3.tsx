import React from 'react';
import iframeRaw from './iframe.html?raw';

const iframeUrl = URL.createObjectURL(new Blob([iframeRaw], { type: 'text/html' }));

export default function App3() {
    return (
        <iframe src={iframeUrl} style={{ width: '300px', height: '300px' }}/>
    )
}