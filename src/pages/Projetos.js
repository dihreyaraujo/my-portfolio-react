import React from 'react';
import '../style/projetos.css';
import Header from '../components/Header';
import Market from '../images/market-dihrey-project-blur.png';
import RecipeApp from '../images/therecipeappsite-blur.png';
import TFCApp from '../images/tfc-blur.png';

class Social extends React.Component {
  expandProject = ({ target }, n) => {
    const project = target.classList[1];
    const expand1 = document.querySelector(`.expand${n}`);
    const expand1Down = document.querySelector(`.expand${n}-down`);
    const project1 = document.querySelector(`.project-expand${n}`);

    project1.classList.remove('magictime');
    project1.classList.remove('vanishOut');

    if (window.innerWidth <= 1800) {
      expand1Down.style.display = 'block'
    }
    
    if (project.includes('project')) {
      expand1.style.display = 'block';
      project1.classList.add('magictime');
      project1.classList.add('vanishIn');
    }
  }

  noneExpand = (n) => {
    if (n !== undefined) {
      const expand1 = document.querySelector(`.expand${n}`);
      const expand1Down = document.querySelector(`.expand${n}-down`);
      const project1 = document.querySelector(`.project-expand${n}`);
      project1.classList.remove('magictime');
      project1.classList.remove('vanishIn');
      project1.classList.add('magictime');
      project1.classList.add('vanishOut');
      if (window.innerWidth <= 1800) {
        expand1Down.style.display = 'none';
        setTimeout(() => {
          expand1.style.display = 'none';
        }, 1000);
      } else {
        setTimeout(() => {
          expand1.style.display = 'none';
        }, 1000);
      }
    }
  }

  render() {
    return(
      <div className="main-project">
        <Header pag="social" />
        <div className="container-expand-down fadeIn expand1-down" onClick={ () => this.noneExpand(1) }></div>
        <div className="container-expand fadeIn expand1" onClick={ () => this.noneExpand(1) }>
          <div className="project-expand project-expand1 magictime vanishOut">
            <img src={ Market } />
            <h1>Dihrey Market</h1>
            <p>Esse site ?? um e-commerce e foi desenvolvido em grupo com o intuito de demonstrar minhas habilidades em M??todos ??geis, Kanban, Scrum, Ciclo de vida de Componente, React / React Router, Componentes com estado e evento. (Para realiza????o do projeto foi utilizado a API do Mercado Livre e ap??s o t??rmino do projeto eu fiz uma estiliza????o personalizada por mim para meu portf??lio)</p>
            <a href="https://dihreymarket.netlify.app/" target="_blank"><button type="button">Visitar</button></a>
          </div>
        </div>
        <div className="container-expand-down fadeIn expand2-down" onClick={ () => this.noneExpand(2) }></div>
        <div className="container-expand fadeIn expand2" onClick={ () => this.noneExpand(2) }>
          <div className="project-expand project-expand2 magictime vanishOut">
            <img src={ RecipeApp } />
            <h1>Dihrey RecipeApp</h1>
            <p>Esse projeto foi desenvolvido com o intuito de permanecer em uma largura de 380px para representar o uso de um app no celular.</p>
            <p>Esse site ?? um app de receita e foi desenvolvido em grupo com o intuito de demonstrar minhas habilidades em: Utilizar redux para gerenciar estado, utilizar a biblioteca React-Redux, utilizar a Context API do React para gerenciar estado, utilizar os React Hooks, criar hooks customizados, al??m de toda as habilidades desenvolvidas durante o m??dulo de front-end(podendo ser vista na aba de certificados). (Para realiza????o do projeto foi utilizado a API do 'thecocktaildb' e 'themealdb' e ap??s o t??rmino do projeto eu fiz uma estiliza????o personalizada por mim para meu portf??lio)</p>
            <a href="https://apprecipedihrey.netlify.app/" target="_blank"><button type="button">Visitar</button></a>
          </div>
        </div>
        <div className="container-expand-down fadeIn expand3-down" onClick={ () => this.noneExpand(3) }></div>
        <div className="container-expand fadeIn expand3" onClick={ () => this.noneExpand(3) }>
          <div className="project-expand project-expand3 magictime vanishOut">
            <img src={ TFCApp } />
            <h1>Dihrey TrybeFutebolClube</h1>
            <p>Este projeto cont??m apenas o Back-End, pois o Front-End foi desenvolvido pela Trybe, e neste projeto o intuito ?? demonstrar a minha compet??ncia em escrever c??digos pro Back-End. Houve tamb??m a dockeriza????o do meu projeto para poder realiz??-lo, por??m no reposit??rio, s?? ser?? encontrado as l??gicas realizadas e as rotas criadas.</p>
            <p>Este ?? um projeto desenvolvido individualmente com o intuito de demonstrar minhas habilidades em: Node, Typescript, Sequelize, JWT, Express, MySQL, bcrypt, API REST</p>
            <a href="https://github.com/dihreyaraujo/TrybeFutebolClube" target="_blank"><button type="button">Visitar</button></a>
          </div>
        </div>
        <div className='fadeIn container-project'>
          <div className='project project1' onClick={ (e) => this.expandProject(e, 1) }>
            <p>Dihrey Market</p>
          </div>
          <div className='project project2' onClick={ (e) => this.expandProject(e, 2) }>
            <p>Dihrey RecipeApp</p>
          </div>
          <div className='project project3' onClick={ (e) => this.expandProject(e, 3) }>
            <p>Dihrey TrybeFutebol</p>
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
