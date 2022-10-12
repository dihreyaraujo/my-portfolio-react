import React from 'react';
import '../style/projetos.css';
import Header from '../components/Header';
import Market from '../images/market-dihrey-project-blur.png';

class Social extends React.Component {
  expandProject = ({ target }) => {
    const project = target.classList[1];
    const expand1 = document.querySelector('.expand1');
    const project1 = document.querySelector('.project-expand1');

    project1.classList.remove('magictime');
    project1.classList.remove('vanishOut');
    
    if (project === 'project1') {
      expand1.style.display = 'block';
      project1.classList.add('magictime');
      project1.classList.add('vanishIn');
    }
  }

  noneExpand = () => {
    const expand1 = document.querySelector('.expand1');
    const project1 = document.querySelector('.project-expand1');
    project1.classList.remove('magictime');
    project1.classList.remove('vanishIn');
    project1.classList.add('magictime');
    project1.classList.add('vanishOut');
    setTimeout(() => expand1.style.display = 'none', 1000);
  }

  render() {
    return(
      <div>
        <Header pag="social" />
        <div className="container-expand fadeIn expand1" onClick={ this.noneExpand }>
          <div className="project-expand project-expand1 magictime vanishOut">
            <img src={ Market } />
            <h1>Dihrey Market</h1>
            <p>Esse site é um e-commerce e foi desenvolvido em grupo com o intuito de demonstrar minhas habilidades em Métodos Ágeis, Kanban, Scrum, Ciclo de vida de Componente, React / React Router, Componentes com estado e evento. (estilização personalizada por mim para meu portfólio)</p>
            <a href="https://dihreymarket.netlify.app/" target="_blank"><button type="button">Visitar</button></a>
          </div>
        </div>
        <div className='fadeIn container-project'>
          <div className='project project1' onClick={ (e) => this.expandProject(e) }>
            <p>Dihrey Market</p>
          </div>
          <div className='project'>
            <p>Em Breve</p>
          </div>
          <div className='project'>
            <p>Em Breve</p>
          </div>
          <div className='project'>
            <p>Em Breve</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Social;
