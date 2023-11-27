import React from 'react'
import {Navbar,Footer} from '../../Components/Public'
import './Alumn.css'
export default function Alumns() {
  const playAudio = (text) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  const handleMouseOver = (text) => {
    playAudio(text);
  };

  const handleMouseOut = () => {
    window.speechSynthesis.cancel(); // Detiene la reproducción de audio cuando el mouse sale del elemento
  };
  return (
    <div>
      <Navbar/>
          <div className='container-alumns'>
              <div className='alumns'>
                  <img src='https://i.pinimg.com/564x/6f/ee/30/6fee305d994889dfed1d245754a036fe.jpg' alt=''/>
              </div>
              <div className='alumns'>
                  <div className='alumns-text'>
                      <div className='text-title'>
                          <h2 onMouseOver={() => handleMouseOver('Bienvenido e Inicie Sesion')} onMouseOut={handleMouseOut}>Bienvenido</h2>
                          <h3 onMouseOver={() => handleMouseOver(' e Inicie Sesion')} onMouseOut={handleMouseOut}>e</h3>
                            <h4 onMouseOver={() => handleMouseOver(' Inicie Sesion')} onMouseOut={handleMouseOut}> Inicie Sesion</h4>
                            <div className='inputs'>
                              <label form='numfolio' onMouseOver={() => handleMouseOver('Ingrese su numero de folio escolar')} onMouseOut={handleMouseOut}>Numero de Folio</label>
                                 <input type='text' placeholder='Ingrese su numero de folio'/>
                            </div>
                            <div className='inputs'>
                              <label form='email' onMouseOver={() => handleMouseOver('Ingrese su correo electronico escolar')} onMouseOut={handleMouseOut}>Correo Electronico</label>
                                 <input type='email' placeholder='Ingrese su correo de institucional'/>
                            </div>
                            <div className='inputs'>
                              <label form='password' onMouseOver={() => handleMouseOver('Ingrese su passwrd')} onMouseOut={handleMouseOut}>Contrasena</label>
                                 <input type='password' placeholder='Ingrese su contrasena'/>
                            </div>
                            <button className='acceder' type='submit'>Acceder</button>

                            <div className='linea2'></div>
                            <div className='linea3'>
                                <a href='/' >Olvidaste tu Contrasena?</a>
                            </div>
                      </div>


                      
                  </div>
              </div>
          </div>
      <Footer/>
    </div>
  )
}
