import styled from '@emotion/styled'
import React, { FC } from 'react'


interface CardProps{
  image:string
  title:string
}

const Cards = styled.div(()=>({
  width:'calc(33.33% - 70px)',
  padding:'40px 25px 35px',
  borderRadius:'15px',
  boxShadow:'0 0 10px 0 rgba(0,0,0,.15)',
  borderTop:'15px solid transparent',
  transition:'0.1s',
  "@media (max-width:900px)":{
    width:'calc(50% - 70px)',
  },
  "@media (max-width:551px)":{
    width:'calc(100% - 70px)',
    padding:'20px 15px 10px',
  },
  '&:hover':{
    borderTop:'15px solid rgb(81, 42, 151)',
    transition:'1s'
  },
  '&:nth-child(2)':{
    borderTop:'15px solid rgb(81, 42, 151)',
  }
})  )
const Heading = styled.h1( ()=>({
  fontSize:'23px',
  margin:'15px 0px',
  "@media (max-width:551px)":{
    fontSize:'20px',
    margin:'20px 0px',
  }
}) )
const Image = styled.img( ()=>({
  "@media (max-width:551px)":{
    width:'70px',
  }
}) )
const Text = styled.p( ()=>({
  margin:'5px 0px',
  textAlign:"center",
  "@media (max-width:551px)":{
    fontSize:'13px',
  }
}) )


const Card:FC<CardProps> = ({image,title}) => {
  return (
    <Cards >
        <center >
            <Image src={image} alt="" width={90}/>
            <Heading >{title}</Heading>
            <Text >There are many variations of passages of Lorem Ipsum available,</Text>
        </center>
    </Cards>
  )
}

export default Card
