import React from "react";
import '../style/header.css';
import { Link } from 'react-router-dom';
import GitHub from '../icons/github.svg';
import Instagram from '../icons/instagram.svg';
import Gmail from '../icons/gmail.svg';
import Linkedin from '../icons/linkedin.svg';
import Perfil from '../perfil-images/imagemPrincipal.jpg';
import Exit from '../images/exit.png';
import Download from '../curriculo/download.png'

class Header extends React.Component {
  enterMenu = () => {
    const menuPopUp = document.querySelector('.menu-popup');
    menuPopUp.style.display = 'flex';
    menuPopUp.classList.add('magictime');
    menuPopUp.classList.add('swashIn');
  }

  exitMenu = () => {
    const menuPopUp = document.querySelector('.menu-popup');
    menuPopUp.classList.remove('magictime');
    menuPopUp.classList.remove('swashIn');
    menuPopUp.classList.add('magictime');
    menuPopUp.classList.add('holeOut');
  }

  lateralMenuOnClick = () => {
    const listMenu = document.querySelector('.menu-lateral-container');
    listMenu.classList.forEach((element) => {
      if (element === 'slideRightReturn') {
        listMenu.classList.remove('slideRightReturn');
        listMenu.classList.remove('magictime');
        listMenu.style.display = 'block'
        listMenu.classList.add('magictime');
        listMenu.classList.add('slideRight');
      } else if (element === 'slideRight') {
        listMenu.classList.remove('magictime');
        listMenu.classList.remove('slideRight');
        listMenu.classList.add('magictime');
        listMenu.classList.add('slideRightReturn');
      }
    })
  }

  render() {
    const { pag } = this.props;
    return(
      <div className="main-header">
        <div className="menu-hamburger">
          <div className="container">
            <input type="checkbox" id="checkbox-menu" />
            <label htmlFor="checkbox-menu" onClick={ this.lateralMenuOnClick }>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
        <div className="menu-lateral-container magictime slideRightReturn">
          <nav>
            <ul className="menu-lateral">
              <Link to='/'
              className={pag === 'home' ? "lista-lateral active" : "lista-lateral"}>
                <li>Home</li>
              </Link>
              <Link to='/hardskills'
              className={pag === 'hs' ? "lista-lateral active" : "lista-lateral"}>
                <li>Hard Skills</li>
              </Link>
              <Link to='/certificados'
              className={pag === 'certificados' ? "lista-lateral active" : "lista-lateral"}>
                <li>Certificados</li>
              </Link>
              <Link to='/projetos'
              className={pag === 'social' ? "lista-lateral active" : "lista-lateral"}>
                <li>Projetos</li>
              </Link>
            </ul>
          </nav>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F1F5F8" fill-opacity="1" d="M0,192L40,165.3C80,139,160,85,240,80C320,75,400,117,480,117.3C560,117,640,75,720,85.3C800,96,880,160,960,192C1040,224,1120,224,1200,197.3C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" className="wave"></path></svg>
        <div className="menu-popup">
        <img src={ Exit } className="exit" onClick={ this.exitMenu } alt='icon-exit'></img>
          <div className="perfil-menu"></div>
          <h1>Dihrey Araujo</h1>
          <a href="../curriculo/dihrey-araujo-cv-fullstack.pdf" download className="link-download">
            <div className="button-popup">
              <img src={ Download } alt="download icon" className="download-icon"/>
              <p>CV</p>
            </div>
          </a>
          <div>
            <a href="https://github.com/dihreyaraujo" target='_blank'>
              <img src={GitHub} className="icons-social" alt="github"></img>
            </a>
            <a href="https://www.linkedin.com/in/dihrey-araujo/" target='_blank'>
              <img src={Linkedin} className="icons-social" alt="linkedin"></img>
            </a>
            <a href="mailto:dihreyh@gmail.com" target='_blank'>
              <img src={Gmail} className="icons-social" alt="gmail"></img>
            </a>
            <a href="https://www.instagram.com/dihreyaraujo/" target='_blank'>
              <img src={Instagram} className="icons-social" alt="instagram"></img>
            </a>
          </div>
        </div>
        <header className="container-header">
          <div className="container-perfil">
            <div>
              <img src={ Perfil } className="perfil" onClick={ this.enterMenu } alt="foto de perfil"></img>
            </div>
          </div>
          <nav className="menu-principal">
            <ul className="menu">
              <Link to='/'
              className={pag === 'home' ? "lista-menu active" : "lista-menu"}>
                <li>Home</li>
              </Link>
              <Link to='/hardskills'
              className={pag === 'hs' ? "lista-menu active" : "lista-menu"}>
                <li>Hard Skills</li>
              </Link>
              <Link to='/certificados'
              className={pag === 'certificados' ? "lista-menu active" : "lista-menu"}>
                <li>Certificados</li>
              </Link>
              <Link to='/projetos'
              className={pag === 'social' ? "lista-menu active" : "lista-menu"}>
                <li>Projetos</li>
              </Link>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
