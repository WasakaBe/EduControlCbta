import React from 'react'
import './Special.css'
import { Admin,Agricola,Agro,Alimentos,Cont,Des,Ofit,Prog } from '../../../Images'
export default function Special() {
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
    <div className='container-special'>
        <div className='special'>
            <h2 onMouseOver={() => handleMouseOver('Ofreceestascarrerastecnicas')} onMouseOut={handleMouseOut}>Ofrece estas carreras tecnicas</h2>
            <div className='special-logos'>
              <img src={Admin} alt='TÉCNICO EN ADMINISTRACIÓN PARA EL EMPRENDIMIENTO AGROPECUARIO' title='TÉCNICO EN ADMINISTRACIÓN PARA EL EMPRENDIMIENTO AGROPECUARIO' onMouseOver={() => handleMouseOver('TÉCNICO EN ADMINISTRACIÓN PARA EL EMPRENDIMIENTO AGROPECUARIO')} onMouseOut={handleMouseOut}/>
              <img src={Agricola} alt='TÉCNICO EN SISTEMAS DE PRODUCCIÓN AGRÍCOLA' title='TÉCNICO EN SISTEMAS DE PRODUCCIÓN AGRÍCOLA'  onMouseOver={() => handleMouseOver('TÉCNICO EN SISTEMAS DE PRODUCCIÓN AGRÍCOLA')} onMouseOut={handleMouseOut}/>
              <img src={Agro} alt='TÉCNICO EN SISTEMAS DE PRODUCCIÓN AGRÍCOLA' title='TÉCNICO EN SISTEMAS DE PRODUCCIÓN AGRÍCOLA'  onMouseOver={() => handleMouseOver('TÉCNICO EN SISTEMAS DE PRODUCCIÓN AGRÍCOLA')} onMouseOut={handleMouseOut}/>
              <img src={Alimentos} alt='TÉCNICO EN PRODUCCIÓN INDUSTRIAL DE ALIMENTOS' title='TÉCNICO EN PRODUCCIÓN INDUSTRIAL DE ALIMENTOS'  onMouseOver={() => handleMouseOver('TÉCNICO EN PRODUCCIÓN INDUSTRIAL DE ALIMENTOS')} onMouseOut={handleMouseOut}/>
              <img src={Cont} alt='Tecnico en Contaduria' title='Tecnico en Contaduria'  onMouseOver={() => handleMouseOver('Tecnico en Contaduria')} onMouseOut={handleMouseOut}/>
              <img src={Des} alt='TÉCNICO EN DESARROLLO INTEGRAL COMUNITARIO' title='TÉCNICO EN DESARROLLO INTEGRAL COMUNITARIO'  onMouseOver={() => handleMouseOver('TÉCNICO EN DESARROLLO INTEGRAL COMUNITARIO')} onMouseOut={handleMouseOut}/>
              <img src={Ofit} alt='Tecnico en Ofimatica' title='Tecnico en Ofimatica'  onMouseOver={() => handleMouseOver('Tecnico en Ofimatica')} onMouseOut={handleMouseOut}/>
              <img src={Prog} alt='Tecnico en Programacion' title='Tecnico en Programacion'  onMouseOver={() => handleMouseOver('Tecnico en Programacion')} onMouseOut={handleMouseOut}/>
            </div>
        </div>
    </div>
  )
}
