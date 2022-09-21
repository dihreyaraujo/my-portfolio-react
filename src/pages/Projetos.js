import React from 'react';
import '../style/projetos.css';
import Header from '../components/Header';

class Social extends React.Component {
  render() {
    return(
      <div>
        <Header pag="social" />
        <div className='fadeIn container-project'>
          <div className='project'>
            <p>Em Breve</p>            
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
