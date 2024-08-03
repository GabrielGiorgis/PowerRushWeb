
import './App.css'
import { Components } from './components/screens/ingredients/Ingredients'
import { Info } from './components/screens/info/Info'
import { Landing } from './components/screens/landing/Landing'
import { Steps } from './components/screens/Steps/Steps'
import { Header } from './components/ui/Header/Header'
import { Footer } from './components/ui/Footer/Footer'

function App() {

  return (
    <>
      <div className="App">
        <Header />
        <Landing />
        <Info />
        <Components />
        <Steps />
        <Footer />
      </div>
    </>
  )
}

export default App
