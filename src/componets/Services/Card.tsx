import React, { FC } from 'react'


interface CardProps{
  image:string
  title:string
}

const Card:FC<CardProps> = ({image,title}) => {
  return (
    <div className='Card'>
        <center >
            <img src={image} alt="" width={90}/>
            <h1 className='heding' >{title}</h1>
            <p style={{margin:'5px 0px',textAlign:"center"}}>There are many variations of passages of Lorem Ipsum available,</p>
        </center>
    </div>
  )
}

export default Card
