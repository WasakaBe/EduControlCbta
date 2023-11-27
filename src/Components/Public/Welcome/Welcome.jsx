import React from 'react';
import './Welcome.css';
import Mision from '../../../Buttons/Mision/Mision';
import Vision from '../../../Buttons/Vision/Vision'
import { Alumna, Oido, Ojos } from '../../../Images';
export default function Welcome() {
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
    <div className='container-welcome'>
      <div className='welcome'>
        <div className='welcome-text'>
          <h3 onMouseOver={() => handleMouseOver('Bienvenidos al')} onMouseOut={handleMouseOut}>Bienvenidos al</h3>
          <h2 onMouseOver={() => handleMouseOver('Centro Bachillerato Tecnologico Agropecuario No.5')} onMouseOut={handleMouseOut}>Centro Bachillerato Tecnologico Agropecuario No.5</h2>
          <h4 onMouseOver={() => handleMouseOver('"Hermanos Flores Magon"')} onMouseOut={handleMouseOut}>"Hermanos Flores Magon"</h4>
          <p onMouseOver={() => handleMouseOver('El Centro de Bachillerato Tecnológico Agropecuario No. 5 inicia sus actividades el 02 de octubre de 1972 en la ciudad de Huejutla de Reyes Hidalgo, se encuentra localizado al norte de la ciudad, sobre el Boulevard Adolfo López Mateos s/n colonia aviación civil. Es un gra privilegio poder forjar a las futuras generaciones desde hace ya aproximadamente 50 años y de esta manera estar contribuyendo a nuestra comunidad, el C.B.T.A. 5 de Huejutla, Hgo. ha formado técnicos de calidad, con un claro compromiso social. ¡Bienvenidos!')} onMouseOut={handleMouseOut}>
          El Centro de Bachillerato Tecnológico Agropecuario No. 5 inicia sus actividades el 02 de octubre de 1972 en la ciudad de Huejutla de Reyes Hidalgo, se encuentra localizado al norte de la ciudad, sobre el Boulevard Adolfo López Mateos s/n colonia aviación civil. Es un gra privilegio poder forjar a las futuras generaciones desde hace ya aproximadamente 50 años y de esta manera estar contribuyendo a nuestra comunidad, el C.B.T.A. 5 de Huejutla, Hgo. ha formado técnicos de calidad, con un claro compromiso social. ¡Bienvenidos!
          </p>
          <div className='btns'>
                 <Mision  onMouseOver={() => handleMouseOver('Misión')} onMouseOut={handleMouseOut}/>
          <Vision  onMouseOver={() => handleMouseOver('Visión')} onMouseOut={handleMouseOut}/>     
          </div>

         
        </div>

        <div className='welcome-image'>
          <img onMouseOver={() => handleMouseOver('Imagen')} onMouseOut={handleMouseOut} src={Alumna} alt='' />
        </div>

        <div className='accessibility-buttons'>
          <button onMouseOver={() => handleMouseOver('Accesibilidad para discapacidad vista')} onMouseOut={handleMouseOut}>
            <img
              src={Ojos}
              alt='Icono vista'
              title='Accesibilidad para discapacidad vista'
            />
          </button>
          <button onMouseOver={() => handleMouseOver('Accesibilidad para discapacidad auditiva')} onMouseOut={handleMouseOut}>
            <img
              src={Oido}
              alt='Icono auditivo'
              title='Accesibilidad para discapacidad auditiva'
            />
          </button>
        </div>
      </div>
    </div>
  );
}
