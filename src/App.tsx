// import { Heading } from './components/Heading'
import { Container } from './components/Container'
import './styles/global.css'
import './styles/theme.css'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles'


function App() {


  return (
    <>
      <Container>
        <Logo />
        <Menu />
        <Container>
          <CountDown />
        </Container>
        <Container>
          <form className='form' action=''>
            <div className='formRow'>
              <DefaultInput
                labelText='task'
                id='meuInput'
                type='text'
                placeholder='Digite algo'
              />
            </div>

            <div className='formRow'>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='formRow'>
              <p>Ciclos</p>
              <p>0 0 0 0 0 0 0</p>
              <Cycles />
            </div>

            <div className='formRow'>
              <button>Enviar</button>
            </div>
          </form>
        </Container>
      </Container>
    </>
  )
}

export default App
