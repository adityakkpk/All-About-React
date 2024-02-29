// How React code is written for a 'a' tag
function customRender(reactElement, container){
    /* 
    
    // Version 1

    const domElem = document.createElement(reactElement.type);
    domElem.innerHTML = reactElement.children;
    domElem.setAttribute('href', reactElement.props.href);
    domElem.setAttribute('target', reactElement.props.target);
    
    container.appendChild(domElem);
    */

    //Version 2
    const domElem = document.createElement(reactElement.type);

    domElem.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElem.setAttribute(`${prop}`, reactElement.props[prop])
    }
    container.appendChild(domElem);
    
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const root = document.querySelector("#root");

customRender(reactElement, root)