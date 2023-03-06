import React from 'react';
import '../style/section.css';
import '../magic-master/dist/magic.css'
import codeImage from '../images/code-solid.svg';
import terminalImage from '../images/terminal-solid.svg';

class Section extends React.Component {  
  render() {
    return(
      <section className='fadeIn section'>
        <div className='introMe'>
          <h1>Olá, Eu Sou Dihrey.</h1>
          <p>Sou um <b>Desenvolvedor Web Full Stack</b>. Amo tecnologia, em especial <b>programação</b>. Esse site é meu <b>portfólio</b>, aqui você encontrará <b>meus projetos pessoais, certificados, hard-skills</b> e também os meios para entrar em <b>contato comigo</b>.</p>
        </div>
        <div className='icon-img-container'>
          <img src={ codeImage } className="icons-image" alt="code-icon" />
          <img src={ terminalImage } className="icons-image img-two" alt="terminal-icon"/>
        </div>
      </section>
    )
  }
}

export default Section;
