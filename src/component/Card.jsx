import React from 'react'

const Card = (props) => {
    const { title, img } = props
    const urlImg = `url${img}`
    return (
        <div>
            <p>Name: {title} </p>
        </div>
    )
}

export default Card
