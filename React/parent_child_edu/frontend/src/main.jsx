import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './utils/rem.js'
import './styles/Global.css'

createRoot(document.getElementById('root')).render(
    <App />
)
