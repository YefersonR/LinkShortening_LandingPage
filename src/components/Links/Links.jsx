import './Links.scss'
import { useState } from 'react';

export const Links = ({largeLink, shortedLink}) => {
  const [isCopied,setIsCopied] = useState(false)
  const handleClick = ()=>{
    navigator.clipboard.writeText(shortedLink).then(function() {
      setIsCopied(true)
    }, function(err) {
    alert('No fue posible copiarlo', err);
    });
  }
  return (
    <>
      <div className='contentShortLinks'>
        <h2>{largeLink}</h2>
        <div className='short'>
          <h3>{shortedLink}</h3>
          <button className={`bStart ${isCopied && 'copied'}`} onClick={handleClick}>{!isCopied ? "Copy": "Copied"}</button>
        </div>
      </div>
    </>
  )
}
