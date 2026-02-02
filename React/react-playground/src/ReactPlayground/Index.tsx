import { Allotment } from "allotment";
import "allotment/dist/style.css";
import Header from '../components/Header/Index'
import CodeEditor from '../components/CodeEditor/Index'
import Preview from '../components/Preview/Index'


export default function ReactPlayground() {
    return (
        <div style={{ height: '100vh' }}>
            <Header/>
            <Allotment defaultSizes={[100, 100]}>
                <Allotment.Pane minSize={0}>
                    <CodeEditor/>
                </Allotment.Pane>

                <Allotment.Pane minSize={0}>
                    <Preview/>
                </Allotment.Pane>
            </Allotment>
        </div>
    )
}