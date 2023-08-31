import { useState } from 'react'
import { AiOutlineBulb } from "react-icons/ai";
import './App.css'
import imguno from './assets/testimonio-diego.jpg'


const ejemplo = <p>
  <b>Lorem ipsum dolor</b> sit amet, consectetur adipisicing elit. Alias impedit repellendus ab enim. <mark>Deserunt perferendis</mark> repellat vitae neque voluptatibus dolore asperiores, doloremque amet! Quae laudantium, obcaecati quia totam repellendus esse.
</p>

function App(){
 
  return (
    <>
    <div className='app'>
      <h1>Frontend Developer</h1>
    </div>
    <img src={imguno} alt='bild' className='hbild' />

    <section className='cont-intro'>
      <h2 className='introdusion'>
         Welcome on my WebSite
       </h2>{ejemplo}

    </section>

    <section className='buscador'>
      
     <button  className='btn-chance'> Change  <AiOutlineBulb /> </button>

   
    </section>
    
    
    
    </>
    
  )
}

export default App
