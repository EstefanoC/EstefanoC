import React from 'react'

// Component
import TypedReact from '../helpers/typed'


const NavTop = (props) => {
    const typedString = ['gracias por visitarme :)', 'Aprender cada día más acerca de programación es mi pasión', 'Conóceme aqui', 'Me sobran ganas de seguir creciendo profesionalmente', '¡Me gustan los retos!', 'No necesito café para mantenerme despierto, ya tengo mucha energía', 'Me considero responsable', 'Me considero enfocado']
    return (
        <div className="bg-navTop">
            <ul className='list-NavTop d-inline-flex flex-column text-center text-light text-left p-0 m-0'>
                <li><span className='purple'>import</span> <span className='blue1'>React</span> <span className="purple">from</span> <span className="red">'react'</span>;</li>
                <li><span className='purple'>import</span> <span className='blue1'>ReactDOM</span> <span className="purple">from</span> <span className="red">'react-dom'</span>;</li>
                <li><span className="green1">{"//Component"}</span></li>
                <li><span className='purple'>import</span> <span className='blue1'>Index</span> <span className="purple">from</span> <span className="red">'./component/'</span>;</li>
                <li></li>
                <li><span className="blue2">const</span> <span className="yellow">Index</span> = ( ) <span className="blue2">{'=>'}</span> {"{"}</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="yellow">return</span> (</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<>"}</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<"}<span className="green2">Index</span> {"/>"}</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="blue2">{"<h1>"}</span>¡Hola mundo!<span className="blue2">{"</h1>"}</span></li>
                <li>
                <div className="typed d-inline-block">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="blue2">{"<p>"}</span>
                    <TypedReact
                        speed={100}
                        typedString={typedString}
                        typeSpeed={70}
                        backSpeed={50}
                        backDelay={10000}
                        cursor='|'
                        stop={props.stop}
                        start={props.start}
                        WithoutStop={props.WithoutStop}
                    />
                    <span className="blue2">{"</p>"}</span>
                </div>
                </li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</>"}</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; );</li>
                <li>{"}"};</li>
                <li></li>
                <li></li>
                <li><span className="blue1">ReactDom</span>.<span className="yellow">render</span>( {"<"}<span className="green2">Index</span>{"/>"}, <span className="blue1">document</span>.<span className="yellow">getElementById</span>(<span className="red">'app'</span>));</li>
            </ul>    
        </div>
    )
}

export default NavTop