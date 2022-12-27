import React from 'react'
import './Shorter.scss'
import { useState } from 'react'
import { Links } from '../../components/Links/Links'

export const Shorter = () => {
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
  )
}
