function customRender(reactElement,mainContainer){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target) 
    mainContainer.appendChild(domElement)
    */

    //more advance version for selecting the attribute
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(let prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
        mainContainer.appendChild(domElement) 
    }
}


// this is what we actually get from the react underhood
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank', 
    },

    children: 'click me to visit the google'
}



const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer)