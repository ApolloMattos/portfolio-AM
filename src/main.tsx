import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ScreenSizeProvider } from './hooks/MediaQuery.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScreenSizeProvider>
      <App />
    </ScreenSizeProvider>
  </StrictMode>,
)

