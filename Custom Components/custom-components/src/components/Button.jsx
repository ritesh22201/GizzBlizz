import React from 'react'

const Button = ({children, colorScheme = 'defaultColor', general = 'general', button = 'button'}) => {
  return (
    <button style={{marginTop : '10px'}} className={`${general} ${colorScheme} ${button}`}>{children}</button>
  )
}

export default Button;