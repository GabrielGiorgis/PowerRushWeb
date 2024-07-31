
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
      <Header />
      <Landing />
      <Info />
      <Components />
      <Steps />
      <Footer />
    </>
  )
}

export default App
