import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

// creating components and passing them as a variable it can be only possible due to props that we passed in the card.jsx
let newObj = {
  userName:"maharshi",
  age: 21,
}

// same with the array
let newArr = [1,2,3,4,5]

function App() {
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     {/* made the seperate card component in the source and we can import them and use it like this and also multiple times*/}
     <Card  userName="maharshi patel" btnText="Click Me"/>
     {/* this both the cards are identical but if we want the same card but want to change the data we can do it by the props*/}
     <Card userName="yug sidana" btnText="Visit Me"/>
    </>
  )
}

export default App
