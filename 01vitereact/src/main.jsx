import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherUser = 'Aditya'

const reactElem = React.createElement(
    'a',
    {href: "https://youtube.com", target: "_blank"},
    'click me to visit Youtube ',
    anotherUser
)

const anotherElem = (
    <a href="https://youtube.com" target="_blanck">Visit Youtube</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // MyApp()
    // <MyApp />
    // anotherElem
    reactElem

)
