import React from 'react';
import '../style/projetos.css';
import Header from '../components/Header';
import Market from '../images/market-dihrey-project-blur.png';
import RecipeApp from '../images/therecipeappsite-blur.png';
import TFCApp from '../images/tfc-blur.png';
import deliveryAPP from '../images/app-delivery-blur.png';

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
            <p>Esse site é um e-commerce e foi desenvolvido em grupo com o intuito de demonstrar minhas habilidades em Métodos Ágeis, Kanban, Scrum, Ciclo de vida de Componente, React / React Router, Componentes com estado e evento. (Para realização do projeto foi utilizado a API do Mercado Livre e após o término do projeto eu fiz uma estilização personalizada por mim para meu portfólio)</p>
            <a href="https://dihreymarket.netlify.app/" target="_blank"><button type="button">Visitar</button></a>
          </div>
        </div>
        <div className="container-expand-down fadeIn expand2-down" onClick={ () => this.noneExpand(2) }></div>
        <div className="container-expand fadeIn expand2" onClick={ () => this.noneExpand(2) }>
          <div className="project-expand project-expand2 magictime vanishOut">
            <img src={ RecipeApp } />
            <h1>Dihrey RecipeApp</h1>
            <p>Esse projeto foi desenvolvido com o intuito de permanecer em uma largura de 380px para representar o uso de um app no celular.</p>
            <p>Esse site é um app de receita e foi desenvolvido em grupo com o intuito de demonstrar minhas habilidades em: Utilizar redux para gerenciar estado, utilizar a biblioteca React-Redux, utilizar a Context API do React para gerenciar estado, utilizar os React Hooks, criar hooks customizados, além de toda as habilidades desenvolvidas durante o módulo de front-end(podendo ser vista na aba de certificados). (Para realização do projeto foi utilizado a API do 'thecocktaildb' e 'themealdb' e após o término do projeto eu fiz uma estilização personalizada por mim para meu portfólio)</p>
            <a href="https://apprecipedihrey.netlify.app/" target="_blank"><button type="button">Visitar</button></a>
          </div>
        </div>
        <div className="container-expand-down fadeIn expand3-down" onClick={ () => this.noneExpand(3) }></div>
        <div className="container-expand fadeIn expand3" onClick={ () => this.noneExpand(3) }>
          <div className="project-expand project-expand3 magictime vanishOut">
            <img src={ TFCApp } />
            <h1>Dihrey TrybeFutebolClube</h1>
            <p>Este projeto contém apenas o Back-End, pois o Front-End foi desenvolvido pela Trybe, e neste projeto o intuito é demonstrar a minha competência em escrever códigos pro Back-End. Houve também a dockerização do meu projeto para poder realizá-lo, porém no repositório, só será encontrado as lógicas realizadas e as rotas criadas.</p>
            <p>Este é um projeto desenvolvido individualmente com o intuito de demonstrar minhas habilidades em: Node, Typescript, Sequelize, JWT, Express, MySQL, bcrypt, API REST</p>
            <a href="https://github.com/dihreyaraujo/TrybeFutebolClube" target="_blank"><button type="button">Visitar</button></a>
          </div>
        </div>
        <div className="container-expand-down fadeIn expand4-down" onClick={ () => this.noneExpand(4) }></div>
        <div className="container-expand fadeIn expand4" onClick={ () => this.noneExpand(4) }>
          <div className="project-expand project-expand4 magictime vanishOut">
            <img src={ deliveryAPP } />
            <h1>App Delivery</h1>
            <p>Este é um projeto Full Stack desenvolvido em grupo com o intuito de demonstrar minhas habilidades em:</p>
            <p>React, Axios, NodeJs, MySQL, Express, Sequelize, MD5, JWT, ORM, API REST, SCRUM e KANBAN</p>
            <p><a href="https://drive.google.com/file/d/1PwJ58zAk5IkNHn8fZsCgQQXb50K8KlYr/view" target="_blank" className="video-link">*Clique Aqui*</a> para ver o vídeo de funcionamento da aplicação na WEB ou clique no botão abaixo para ir para o repositório no Github</p>
            <a href="https://github.com/dihreyaraujo/App-Delivery" target="_blank"><button type="button">Visitar</button></a>
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
          <div className='project project4' onClick={ (e) => this.expandProject(e, 4) }>
            <p>Dihrey App Delivery</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Social;
