import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom'

function CustomButton({ title, link }) {

    const navigate = useNavigate()
    const handleOnClick = useCallback(() => navigate(`${link}`, {replace: true}, [navigate]))

  return (
    <button onClick={handleOnClick}>{title}</button>
  )
}

export default CustomButton