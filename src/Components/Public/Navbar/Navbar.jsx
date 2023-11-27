import React ,{ useState }  from 'react'
import './Navbar.css'

export default function Navbar() {
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
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={`container-navbar ${isActive ? 'active' : ''}`}>
      <div className='header'>
          <a href='/' className='logo'onMouseOver={() => handleMouseOver('EduControl')} onMouseOut={handleMouseOut}>EduControl</a>
          <div className='menuToggle' onClick={toggleMenu}></div>
          <div className={`nav ${isActive ? 'active' : ''}`}>
              <ul>
                <li><a href='/' onMouseOver={() => handleMouseOver('Inicio')} onMouseOut={handleMouseOut}>Inicio</a></li>
                <li><a href='/' onMouseOver={() => handleMouseOver('Acerca')} onMouseOut={handleMouseOut}>Acerca</a></li>
                <li><a href='/' onMouseOver={() => handleMouseOver('Servicios')} onMouseOut={handleMouseOut}>Servicios <b><ion-icon name="caret-down-outline"></ion-icon></b> </a>
                  <ul>
                      <li><a href='/' onMouseOver={() => handleMouseOver('Titulacion')} onMouseOut={handleMouseOut}>Titulacion</a></li>
                      <li><a href='/' onMouseOver={() => handleMouseOver('Becas')} onMouseOut={handleMouseOut}>Becas</a></li>
                      <li><a href='/' onMouseOver={() => handleMouseOver('Social')} onMouseOut={handleMouseOut}>Social</a></li>
                      <li><a href='/' onMouseOver={() => handleMouseOver('Escolares')} onMouseOut={handleMouseOut}>Escolares<b><ion-icon name="caret-forward-outline"></ion-icon></b></a>
                        <ul>
                          <li><a href='/' onMouseOver={() => handleMouseOver('Reinscripcion')} onMouseOut={handleMouseOut}>Reinscripcion</a></li>
                          <li><a href='/' onMouseOver={() => handleMouseOver('Certificados')} onMouseOut={handleMouseOut}>Certificados</a></li>
                          <li><a href='/' onMouseOver={() => handleMouseOver('Constancias')} onMouseOut={handleMouseOut}>Constancias</a></li>
                        </ul>
                      </li>

                  </ul>
                </li>

                <li><a href='/' onMouseOver={() => handleMouseOver('IniciarSesion')} onMouseOut={handleMouseOut}>Iniciar Sesion <b><ion-icon name="caret-down-outline"></ion-icon></b></a>
                <ul>
                      <li><a href='/LoginAlumns' onMouseOver={() => handleMouseOver('Alumno')} onMouseOut={handleMouseOut}>Alumno</a></li>
                      <li><a href='/' onMouseOver={() => handleMouseOver('Docente')} onMouseOut={handleMouseOut}>Docente</a></li>
                      <li><a href='/' onMouseOver={() => handleMouseOver('Docente CE')} onMouseOut={handleMouseOut}>Docente CE</a></li>
                      <li><a href='/' onMouseOver={() => handleMouseOver('Padres de Familia')} onMouseOut={handleMouseOut}>Padres de Familia</a>
                      </li>
                  </ul>
                </li>

                <li><a href='/'onMouseOver={() => handleMouseOver('Registrarse')} onMouseOut={handleMouseOut}>Registrarse <b><ion-icon name="caret-down-outline"></ion-icon></b> </a>
                  <ul>
                      <li><a href='/' onMouseOver={() => handleMouseOver('Alumno')} onMouseOut={handleMouseOut}>Alumno</a></li>
                      <li><a href='/' onMouseOver={() => handleMouseOver('Docente')} onMouseOut={handleMouseOut}>Docente</a></li>
                      <li><a href='/' onMouseOver={() => handleMouseOver('Docente CE')} onMouseOut={handleMouseOut}>Docente CE</a></li>
                      <li><a href='/' onMouseOver={() => handleMouseOver('Padres de Familia')} onMouseOut={handleMouseOut}>Padres de Familia</a>
                      </li>
                  </ul>
                </li>
              </ul>
          </div>
      </div>
    { /*  <script>
        let menuToggle = document.querySelector('.menuToggle');
        let header = document.querySelector('header');
        menu.onclick = function(){
          Headers.classList.toggle('active');
        }
      </script>*/}
    </div>
  )
}
