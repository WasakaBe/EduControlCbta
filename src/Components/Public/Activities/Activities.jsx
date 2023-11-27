import React from 'react';
import './Activities.css';
export default function Activities()  {
  const handleNext = () => {
    const slide = document.getElementById('slide');
    slide.appendChild(slide.firstElementChild);
  };

  const handlePrev = () => {
    const slide = document.getElementById('slide');
    slide.prepend(slide.lastElementChild);
  };

  return (
    <div className="container-act">
       
      <div id="slide">
        <div className="item" style={{ backgroundImage: 'url(https://scontent.fmex10-3.fna.fbcdn.net/v/t39.30808-6/404510675_849480533849541_2707802375272451998_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGjLRHi7Wg4VEuEsl6qIJFKIsGa0ezXSXsiwZrR7NdJe1ckneyTtVZ22H0IliMk-w4rUMNes8UMGHLHZ8kpxP3Q&_nc_ohc=E9yyGJIoJ88AX_sS_R3&_nc_zt=23&_nc_ht=scontent.fmex10-3.fna&oh=00_AfD08PZa-rhrGG1YBGQruyB07ls4ktHbYpG3-xEKwgnvuQ&oe=65684C77)' }}>
          <div className="content">
            <div className="name">Alumnos</div>
            <div className="des">
              Alumnos desfilaron del 20 de Nov
            </div>
            <button>Ver más</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/404901826_849479680516293_2969723197199352547_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFTIqRQUHeO2wigILgWzW7n9OkVskJH2HP06RWyQkfYc9H5kY13NtKj-sQHNzl_hnHbqvTLzhHka5hJ2YFdsCxX&_nc_ohc=H_d_fyYuLHIAX8Lx5AU&_nc_zt=23&_nc_ht=scontent.fmex10-1.fna&oh=00_AfARZQmG1-wgooF0QcdNDdZG6fAFEWYGlBT5YhdkpL2xXA&oe=65688123)' }}>
          <div className="content">
            <div className="name">Alumnas</div>
            <div className="des">
              Alumnas desfilaron del 20 de Nov
            </div>
            <button>Ver más</button>
          </div>
        </div>

        <div className="item" style={{ backgroundImage: 'url(https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/399853504_845128834284711_571206792220326504_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGwc6xzB05-dG4ROrlTMaGorFYFAbd9hxusVgUBt32HG_sMXzntvziLBr_BkH9JCjOno66W9bA9XW3C-Hu7IA1x&_nc_ohc=9DxUKVH4nqAAX8XPIvq&_nc_zt=23&_nc_ht=scontent.fmex10-1.fna&oh=00_AfDVdVI66ixjQ-yFZ3Uw6KiWju0M4B6qrpDkycJRSNGslQ&oe=65670DB2)' }}>
          <div className="content">
            <div className="name">Equipo Futbol Masculino</div>
            <div className="des">
              Alumnos del equipo de futbol
            </div>
            <button>Ver más</button>
          </div>
        </div>
        
        <div className="item" style={{ backgroundImage: 'url(https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/404895611_849479173849677_8229693264269139563_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFYddy6YUkafY98dqnAFLVrZwS5qLhky31nBLmouGTLfb9aQa3B6HUx-znkUkTBpARgEsy6ppwSm-eNJYd9256R&_nc_ohc=ZeOc-xO08TAAX-lrU6m&_nc_zt=23&_nc_ht=scontent.fmex10-1.fna&oh=00_AfCsugp6tEMu1vIU16KoF0ftffybzDCd3K891mLsixo4rQ&oe=65673EA7)' }}>
          <div className="content">
            <div className="name">Danza</div>
            <div className="des">
              Alumnas hacen presencia de danza en el desfile de 20 de Nov
            </div>
            <button>Ver más</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/398412725_835925228538405_1478959986500891965_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGUQ-NvTX-GuE_WbPeVxo1OD2p1EffrCcMPanUR9-sJwwGz4B6HAMknOxCrXb7q-cuhvfMsTSWvVT1qh1DB7l_L&_nc_ohc=ZGRd8neo5n4AX9ob7Yq&_nc_oc=AQkVcjYoOEyRWmoKLsbcSy88bJnXIcxGtH_QH1u1RWSm-0Jvl_lxSMc9VLxGJ8Ten5s&_nc_zt=23&_nc_ht=scontent.fmex10-1.fna&oh=00_AfBRg2fE86ndy6cZJ4v2iwGOeidz9dq-NUHFn3OEFbfRoQ&oe=656714F0)' }}>
          <div className="content">
            <div className="name">Dia de Muertos</div>
            <div className="des">
              Altar en la institucion 
            </div>
            <button>Ver más</button>
          </div>
        </div>
     
      </div>
      <div className="buttonsx">
        <button className="b1" id="prev" onClick={handlePrev}>
        <ion-icon name="arrow-back-circle-outline"></ion-icon>
        </button>
        <button  className="b1" id="next" onClick={handleNext}>
        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

