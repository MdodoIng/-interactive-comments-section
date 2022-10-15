import React, { useContext } from 'react'

const Button = ({ btnName, style,styles, onClick,}) => {

  const handelClick = (e) => {
    // setReplay(false)
    
  
  }
  return (
    <div className='button' style={style}>
      <button style={styles}  onClick={onClick}
      >
        {btnName}
      </button>
    </div>

  )
}

export default Button