import React from 'react';
import '../style/certificados.css';
import Header from '../components/Header';
import Certificado1 from '../images/certificado.png';
import Certificado2 from '../images/certificado2.png';

class Certificados extends React.Component {
  renderButton = (index, certificado, word) => {
    const button = document.getElementsByClassName('button-certificado');
    const certificadoEl = document.getElementsByClassName(certificado);
    const linkButton = button[index].firstChild;
    button[index].style.display = 'block';
    certificadoEl[0].style.filter = 'blur(3px)';
    if (word !== undefined) {
      button[index].style.background = 'white';
      linkButton.style.color = '#535782';
    }
  }

  removeButton = (index, certificado, word) => {
    const button = document.getElementsByClassName('button-certificado');
    const certificadoEl = document.getElementsByClassName(certificado);
    const linkButton = button[index].firstChild;
    button[index].style.display = 'none';
    certificadoEl[0].style.filter = 'blur(0px)';
    if (word !== undefined) {
      button[index].style.backgroundColor = '#535782';
      linkButton.style.color = 'white';
    }
  }

  render() {
    return(
      <div>
        <Header pag="certificados" />
        <div id="certificado-container" className='fadeIn'>
          <div className='certificado-div'>
            <p>Fundamentos do Desenvolvimento Web</p>
            <div
              onMouseOver={() => this.renderButton(0, 'certificado1')}
              onMouseOut={ () => this.removeButton(0, 'certificado1') }
            >
              <img
                src={ Certificado1 }
                className='certificado1'
                alt="certificado desenvolvimento web"
              />
            </div>
              <button
                type="button" 
                className='button-certificado'
                onMouseOver={() => this.renderButton(0, 'certificado1', 'button')}
                onMouseOut={ () => this.removeButton(0, 'certificado1', 'button') }
              >
                <a href="https://www.credential.net/f876cfff-3aaf-46fe-b81b-04f8b77b323a#gs.b2mhi9" target="_blank">Visualize Aqui</a>
              </button>
          </div>
          <div className='certificado-div'>
            <p>Desenvolvimento Front End</p>
            <img
              src={ Certificado2 }
              className='certificado2'
              alt="certificado front end"
              onMouseOver={() => this.renderButton(1, 'certificado2')}
              onMouseOut={ () => this.removeButton(1, 'certificado2') }
            />
            <button
              type="button" 
              className='button-certificado'
              onMouseOver={() => this.renderButton(1, 'certificado2', 'button')}
              onMouseOut={ () => this.removeButton(1, 'certificado2', 'button') }
            >
              <a href="https://www.credential.net/9175ef3c-1069-473a-a5f9-193b892db389#gs.b2mhkp" target="_blank">Visualize Aqui</a>
            </button>
          </div>
        </div>
      </div>
    )
  }
};

export default Certificados;
