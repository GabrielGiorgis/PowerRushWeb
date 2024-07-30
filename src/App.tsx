
import './App.css'
import { Components } from './components/screens/ingredients/Ingredients'
import { Info } from './components/screens/info/Info'
import { Landing } from './components/screens/landing/Landing'
import { Steps } from './components/screens/Steps/Steps'

function App() {

  return (
    <>
      <Landing />
      <Info />
      <Components />
      <Steps />
    </>
  )
}

export default App
