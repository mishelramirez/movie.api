import React from 'react'

const Card = (props) => {
    const { title, img, overview    } = props
    const urlImg = `https://image.tmdb.org/t/p/w200/${img}`

    return (
        <div>
            <p>Name: {title} </p>
            <img src={urlImg} />
            <p> descripcion: {overview}</p>

        </div>
    )
}

export default Card
