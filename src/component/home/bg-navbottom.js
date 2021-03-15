import React from 'react'

// Component
import TypedReact from '../helpers/typed'


const NavBottom = (props) => {
    const typedString = ['+58 0412', '+58 041414', '+57 031247', '0212', '+58 021265']

    return (
        <>
            <div className="bg-navBottom"></div>
            <div className="bg-navBottomPhone">
                    <TypedReact
                        speed={10}
                        typedString={typedString}
                        typeSpeed={90}
                        backSpeed={90}
                        backDelay={1000}
                        cursor=' '
                        stop={props.stop}
                        start={props.start}
                        WithoutStop={props.WithoutStop}
                    />
            </div>
        </>
    )
}

export default NavBottom