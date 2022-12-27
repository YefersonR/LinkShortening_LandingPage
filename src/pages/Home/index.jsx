import './Main.scss'
import fondo from "../../images/illustration-working.svg"
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Statistics } from '../../components/Statistics/Statistics'

const Home = () => {

  return (
    <>
    <div className='Container'>
      <Header />
      <div className='Started'>
        <div className="content">
          <h1>More than just shorter links</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe provident quasi et voluptatibus quia quo.</p>
          <button className='bStart'>Get Started</button>
        </div>
        <img src={fondo} margin="auto" alt="Fondo" />
      </div>
    </div>
    <Statistics />
    <Footer />
    </>
  )
}

export default Home