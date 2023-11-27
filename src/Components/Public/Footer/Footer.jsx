import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='body-footer'>
  <footer className='footer'>
      <div className='container-footer'>
        <div className='sec aboutus'>
          <h2>Acerca de</h2>
          <p>Dirección: Adolfo López Mateos SN, Centro, 43000 Huejutla de Reyes, Hgo., México</p>
          <ul className='sci'>
            <li><a href='/'><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href='/'><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href='/'><ion-icon name="logo-twitter"></ion-icon></a></li>
          </ul>
        </div>
        <div className='sec quicklinks'>
          <h2>Soporte</h2>
          <ul>
            <li><a href='/Terminos'>Terminos y Condiciones</a></li>
            <li><a href='/Cookies'>Terminos de Cookies</a>
            </li>
          </ul>
        </div>
        <div className='sec quicklinks'>
        <h2>Enlaces</h2>
        <ul>
        <li>
                <a href='/Inicio'>Inicio</a>
              </li>
              <li>
                <a href='/Acerca'>Acerca</a>
              </li>
              <li>
                <a href='/Servicios'>Servicios</a>
              </li>
              <li>
                <a href='/Login'>Iniciar Sesion</a>
              </li>
          </ul>
        </div>
        <div className='sec contact'>
        <h2>Contactos</h2>
        <ul className='info'>
          <li>
            <span><ion-icon name="call"></ion-icon></span><p><a href='+4156111174'>+52 789 896 0065</a></p>
          </li>
          <li>
            <span><ion-icon name="mail"></ion-icon></span><p><a href='/'>cbta@gmail.cc</a></p>
          </li>
        </ul>
        </div>
         <div className='sec contact'>
         <h2>Mapa de ubicacion</h2>
             <ul className='info'>   
         <li>
          <iframe
                  title="ubicacion"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.098299591696!2d-98.4068462247401!3d21.148485980530932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d726fcf9f14585%3A0x897e90570d60ad67!2sCBTa%20No.%205!5e0!3m2!1ses!2snl!4v1699897597855!5m2!1ses!2snl"
                  width="500px"
                  height="auto"
                  style={{ border: 1 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
          </li>

        </ul>
        </div>
      </div>
  
    </footer>
    </div>
  
  );
}
