import React from 'react'
import { Btn } from './Button.style'
import { Link } from 'react-router-dom'

function Button({title, link}) {
  return (
    <Btn><Link to={`/${link}`}>{title}</Link></Btn>
  )
}

export default Button