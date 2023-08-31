import styled from '@emotion/styled'
import React, { FC } from 'react'
import theme from '../../theme/theme'
interface ButtonProps{
    name:string
}
const ButtonStyle = styled.button(()=>({
  color:'white',
  textDecoration:'none',
  backgroundColor:theme.palette.primary.main,
  border:'0px',
  padding:'15px 50px',
  borderRadius:'35px',
  marginTop:'35px',
  fontSize:'17px',
  cursor:'pointer',
  "@media (max-width:550px)":{
    padding:'12px 40px',
    borderRadius:'35px',
    marginTop:'5px',
    fontSize:'12px'
  }
}))
const Button:FC<ButtonProps> = ({name}) => {
  return (
    <div>
      <ButtonStyle >{name}</ButtonStyle>
    </div>
  )
}

export default Button
