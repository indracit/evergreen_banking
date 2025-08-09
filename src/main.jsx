import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import GlobalStyles from './GlobalStyles.jsx'

async function enableMocking() {
  const { worker } = await import('./apis/browser.js')
  return worker.start()
}


enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <GlobalStyles/>
    <App />
  </StrictMode>
  </BrowserRouter>,
)
})



