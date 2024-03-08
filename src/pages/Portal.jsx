import React, { useState } from 'react'
import Popup from '../components/Popup'

function Portal() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='pt-[70px]'>
      {isOpen && (
        <><Popup setIsOpen={setIsOpen}/></>
      )}
      <button onClick={()=>setIsOpen(true)}>Click me</button>
    </div>
  )
}

export default Portal