import './Main.scss'
import fondo from "../../images/illustration-working.svg"
import logo from "../../images/logo.svg"
import twitter from "../../images/icon-twitter.svg"
import Brand from "../../images/icon-brand-recognition.svg"
import Detailed from "../../images/icon-detailed-records.svg"
import Fully from "../../images/icon-fully-customizable.svg"
import { useState } from 'react'
import { Links } from '../../components/Links/Links'

const Home = () => {
  const [link, setLink] = useState('')
  const apiUrl = `https://api.shrtco.de/v2/shorten?url=${link}`
  const [shortLinks,setShortLinks] = useState([])
  const handleChange=({target})=>{
    setLink(target.value)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const {code,original_link,short_link} = data.result
      setShortLinks([
        ...shortLinks,
        {
          key:code,
          largeLink:original_link,
          shortedLink:short_link
        }
      ])
      setLink('')
      })

  }
  return (
    <>
      <div className="menu">
        <div className="menu-sections">
          <img src={logo}  alt="Shortly" />
          <div className="sections">
              <h4 className="section">Feactures</h4>
              <h4 className="section">Pricing</h4>
              <h4 className="section">Resources</h4>
          </div>
        </div>
        <div className="menu-buttons">
          <button className="login">Login</button>
          <button className="Sign">Sign Up</button>
        </div>
      </div>
      <div className='Started'>
        <div className="content">
          <h1>More than just shorter links</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe provident quasi et voluptatibus quia quo suscipit inventore, reiciendis consectetur nemo quisquam expedita facilis exercitationem consequatur quas repellat neque dicta. Tenetur.</p>
          <button className='bStart'>Get Started</button>
        </div>
        <img src={fondo} margin="auto" alt="Fondo" />
      </div>
      <div className="linkShorter">
          <form className='shorterForm' onSubmit={handleSubmit}>
              <input type="text" placeholder='Shorten a link here' onChange={handleChange} value={link} />
              <button className='bStart short'>Shorten it!</button>
          </form> 
          {
            shortLinks.map( (link) => 
                <Links 
                key={link.key}
                largeLink={link.largeLink} 
                shortedLink={link.shortedLink}
                />
          )
          }
      </div>
      <div className='container-Statistics'>
        <div className="container">
          <div className='Statistics'>
            <h2>Advanced Statistcs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta id at impedit atque saepe beatae dolorem ad provident. Labore omnis architecto quasi perferendis veniam vitae aut accusamus placeat cum!</p>
          </div>
          <div className="Statistics-details">
            <div className="details">
              <img src={Brand} alt="Brand" />
              <h3>Brand Recognition</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod natus delectus, laudantium atque odio aliquid eligendi perferendis ut facilis. Excepturi, magnam quod? Unde necessitatibus quidem rem eum illum minima ipsum.</p>
            </div>
            <div className="details">
              <img src={Detailed} alt="Detailed" />
              <h3>Detailed Records</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus at numquam voluptate omnis officiis eos distinctio incidunt, rerum a est laboriosam deleniti amet optio dolorum mollitia inventore? Quis, quas iste?</p>
            </div>
            <div className="details">
              <img src={Fully} alt="Fully" />
              <h3>Fully Customizable</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda omnis nisi voluptas exercitationem dolore quis ab eius necessitatibus a dignissimos voluptatem libero veritatis tempore rem vel quod, consequuntur voluptatibus!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="boots">
        <h1>Boost your links today</h1>
        <button className='bStart get'>Get Started</button>
      </div>
      <footer>
        <img src={logo} alt="" />
        <div className='footer-content'>
          <div className='footer'>
            <h4>Feactures</h4>
            <ul>
              <li>Link Shortering</li>
              <li>Branded Links</li>
              <li>Analitics</li>
            </ul>
          </div>
          <div className='footer'>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className='footer'>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className='socia-media'>
          <img src={twitter} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
        </div>
      </footer>
    </>
  )
}

export default Home