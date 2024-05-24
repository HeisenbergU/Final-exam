import React from 'react'
import { useSelector } from 'react-redux'

function favorites() {

const basket = useSelector(state)=>{
    state.fav.fav
}

  return (
    <div>favorites</div>
  )
}

export default favorites