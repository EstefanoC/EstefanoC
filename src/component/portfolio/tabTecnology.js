import React from 'react'

// Component
import { Icon1, Icon2, Icon3 } from '../../data/tecnologyItems'


let userImage


const TabTecnology = (props) => {
    return (
        <>
            <h3 className='mb-2'>Las tecnologías usadas en este proyecto fueron:</h3>
            <ul className="list m-0 p-0">
                {
                    props.items.map( (val) => {
                        return (
                            Icon1.map( (value, index) => {
                                if (val === value.title) {
                                    userImage = require(`../../media/${value.img.toString()}`).default

                                    return (
                                        <li className="logo" key={index}><a href={value.url} target="_blank" rel="noopener noreferrer"><img src={userImage} alt={value.title} className='img-fluid'/><strong className="d-block text-center t'w">{value.title}</strong></a></li>
                                    )
                                }
                                return null
                            })
                        )
                    })
                }
                {
                    props.items.map( (val) => {
                        return (
                            Icon2.map( (value, index) => {
                                if (val === value.title) {
                                    userImage = require(`../../media/${value.img.toString()}`).default

                                    return (
                                        <li className="logo" key={index}><a href={value.url} target="_blank" rel="noopener noreferrer"><img src={userImage} alt={value.title} className='img-fluid'/><strong className="d-block text-center t'w">{value.title}</strong></a></li>
                                    )
                                }
                                return null
                            })
                        )
                    })
                }
                                {
                    props.items.map( (val) => {
                        return (
                            Icon3.map( (value, index) => {
                                if (val === value.title) {
                                    userImage = require(`../../media/${value.img.toString()}`).default

                                    return (
                                        <li className="logo" key={index}><a href={value.url} target="_blank" rel="noopener noreferrer"><img src={userImage} alt={value.title} className='img-fluid'/><strong className="d-block text-center t'w">{value.title}</strong></a></li>
                                    )
                                }
                                return null
                            })
                        )
                    })
                }
            </ul>
        </>
    )
}

export default TabTecnology