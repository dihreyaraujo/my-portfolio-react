import React from 'react';
import Header from '../components/Header';
import '../style/hardskills.css';

class HardSkills extends React.Component {
  render() {
    return (
      <div>
        <Header pag="hs" />
        <div className='fadeIn container-hs'>
          <div className='hardskills'>
            <div className='hs git'>
              <img align="center" alt="Dihrey-Git" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" />
              <p>Git</p>
            </div>
            <div className='hs github'>
              <img align="center" alt="Dihrey-Github" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              <p>GitHub</p>
            </div>
            <div className='hs html'>
              <img align="center" alt="Dihrey-HTML" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"/>
              <p>HTML</p>
            </div>
            <div className='hs css'>
              <img align="center" alt="Dihrey-CSS" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"/>
              <p>CSS</p>
            </div>
            <div className='hs js'>
              <img align="center" alt="Dihrey-JS" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
              <p>JavaScript</p>
            </div>
            <div className='hs react'>
              <img align="center" alt="Dihrey-REACT" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
              <p>React</p>
            </div>
            <div className='hs jest'>
              <img align="center" alt="Dihrey-JEST" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"/>
              <p>Jest</p>
            </div>
            <div className='hs redux'>
              <img align="center" alt="Dihrey-REDUX" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"/>
              <p>Redux</p>
            </div>
            <div className='hs docker'>
              <img align="center" alt="Dihrey-REDUX" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"/>
              <p>Docker</p>
            </div>
            <div className='hs sql'>
              <img align="center" alt="Dihrey-REDUX" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"/>
              <p>SQL</p>
            </div>
            <div className='hs nodejs'>
              <img align="center" alt="Dihrey-REDUX" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/>
              <p>NodeJs</p>
            </div>
            <div className='hs express'>
              <img align="center" alt="Dihrey-REDUX" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"/>
              <p>ExpressJs</p>
            </div>
            <div className='hs sequelize'>
              <img align="center" alt="Dihrey-REDUX" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"/>
              <p>Sequelize</p>
            </div>
            <div className='hs typescript'>
              <img align="center" alt="Dihrey-REDUX" height="130" width="140" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
              <p>Typescript</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HardSkills;
