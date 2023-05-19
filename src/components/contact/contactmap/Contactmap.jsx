import React from 'react'
import '../contactmap/contactmap.css'

const Contactmap = () => {
  return (

<div className='iframe-wrapper'>
     <iframe 
     width="800" 
     height="500" 
     frameborder="0" 
     src="https://www.bing.com/maps/embed?h=500&w=800&cp=59.308828~18.026912&lvl=15&typ=d&sty=r&src=SHELL&FORM=MBEDV8" 
     scrolling="yes">
     </iframe>
</div>   

  )
}

export default Contactmap
