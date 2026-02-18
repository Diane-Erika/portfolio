import './App.css'
import PortfolioMain from './components/PortfolioMain'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1c1917", // stone-900
            color: "#fff",
            borderRadius: "9999px",
            padding: "10px 16px",
            fontSize: "14px",
          },
        }}
      />
      <PortfolioMain />
    </>
  )
}

export default App
