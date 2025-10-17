import { Heading } from './components/Heading'
import { Container } from './components/Container'
import './styles/global.css'
import './styles/theme.css'
import { Logo } from './components/Logo'


function App() {


  return (
    <>
      <Container>
        <Logo />
        <Heading>LOGO</Heading>
      </Container>
    </>
  )
}

export default App
