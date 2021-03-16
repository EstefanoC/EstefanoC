import React from 'react'
import { Icon1, Icon2, Icon3 } from '../../data/tecnologyItems'


let userImage


const AboutList = () => (
    <div className="tabCo p-3">

        <h2 className='mb-5'>Tecnologías y lenguajes que manejo hasta el momento:</h2>
        <ul className="icon1 p-0 mb-5">
            {
                Icon1.map( (value, index) => {
                    userImage = require(`../../media/${value.img.toString()}`).default

                    return (
                        <li className={`logo ${value.title}`} key={index}><a href={value.url} target="_blank" rel="noopener noreferrer"><img src={userImage} alt={value.title} className='img-fluid'/><strong className='d-block text-center'>{value.title}</strong></a></li>
                    )
                })
            }
        </ul>

        <h3 className='mb-5'>Librerias o framework que he usado:</h3>
        <ul className='icon2 p-0 mb-5'>
            {
                Icon2.map( (value, index) => {
                    userImage = require(`../../media/${value.img.toString()}`).default

                    return (
                        <li className="logo" key={index}><a href={value.url} target="_blank" rel="noopener noreferrer"><img src={userImage} alt={value.title} className='img-fluid'/><strong className='d-block text-center'>{value.title}</strong></a></li>
                    )
                })
            }
        </ul>

        <h3 className='mb-5'>Tambien he usado:</h3>
        <ul className='icon3 p-0'>
            {
                Icon3.map( (value, index) => {
                    userImage = require(`../../media/${value.img.toString()}`).default

                    return (
                        <li className="logo" key={index}><a href={value.url} target="_blank" rel="noopener noreferrer"><img src={userImage} alt={value.title} className='img-fluid'/><strong className="d-block text-center">{value.title}</strong></a></li>
                    )
                })
            }
        </ul>
    </div>
)

export default AboutList