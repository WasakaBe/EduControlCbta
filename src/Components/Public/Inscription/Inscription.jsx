import React from 'react'
import './Inscription.css'
export default function Inscription() {
  return (
    <div className='container-inscription'>
        <div className='inscription'>
            <h2>INSCRIPCIONES</h2>
            <div className='linea'></div>
            <div className='inscription-texto'>
                <p>Estos son los requerimientos para la inscripción del alumno (a), para formar parte de la institución:</p>
                <ul>
                    <li><p><ion-icon name="chevron-forward-circle-sharp"></ion-icon> Copia de Acta de Nacimiento</p></li>
                    <li><p><ion-icon name="chevron-forward-circle-sharp"></ion-icon> Copia de la CURP (Actualizada)</p></li>
                    <li><p><ion-icon name="chevron-forward-circle-sharp"></ion-icon> Constancia de estudios con promedio</p></li>
                    <li><p><ion-icon name="chevron-forward-circle-sharp"></ion-icon> 2 fotografías tamaño infantil</p></li>
                    <li><p><ion-icon name="chevron-forward-circle-sharp"></ion-icon> Copia del INE/IFE (Tutor)</p></li>
                    <li><p><ion-icon name="chevron-forward-circle-sharp"></ion-icon> Comprobante de domicilio</p></li>
                    <li><p><ion-icon name="chevron-forward-circle-sharp"></ion-icon> Cubrir costo de la ficha</p></li>
                    <li><p><ion-icon name="chevron-forward-circle-sharp"></ion-icon> Presentarse el interesado con el tutor</p></li>
                </ul>
            </div>
            <p className='p'>La expedición de fichas se llevará a cabo a<span>partir del 13 de febrero al 16 de junio</span>  del presente año. <br/>El horario de atención es de 9:00 a.m. a 14:00 p.m.</p>
        </div>
    </div>
  )
}
