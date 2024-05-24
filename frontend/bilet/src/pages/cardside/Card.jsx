import React from 'react'
import './card.scss'

function Card() {
  return (
    <>
    
    <div className='cardcontainer' >
<div className='middlecardfirst' >
  <div className='cardimgfirst' ><div className='clctext' ><p className='fntsizetxtcol' >COLLECTIONS</p><p className='fntsizetxtcollec'>Women</p></div></div>
</div>
<div className='middlecardsecond' >
<div className='cardimgsecond' ><div className='clctext' ><p className='fntsizetxtcol'>COLLECTIONS</p><p className='fntsizetxtcollec'> Children</p></div></div>
</div>
<div className='middlecardthird' >
<div className='cardimgthird' ><div className='clctext' ><p className='fntsizetxtcol'>COLLECTIONS</p><p className='fntsizetxtcollec'>Mens</p></div></div>
</div>
    </div>
    
    </>
  )
}

export default Card