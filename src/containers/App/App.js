import React from 'react';
import './App.scss'

import MailBoard from "../../components/MailBoard";


function App() {
  return (
    <div className="app">
      <div className="mailContainer row">
        <div className="dashboard col-5">
          <div className="toolsContainer row">
            <ul className="toolsList col-1">
              <li className="create">                
                <i className="far fa-edit"></i>
              </li>
              <li className="inbox selected">
                <i className="far fa-envelope"></i> 
              </li>
              <li>
                <i className="fas fa-thumbtack"></i>
              </li>
              <li>
                <i class="far fa-folder-open"></i>
              </li>
              <li>
                <i class="far fa-clock"></i>
              </li>
              <li>
                <i class="fas fa-user-friends"></i>
              </li>
            </ul>            
            .<MailBoard />
          </div>
        </div>

        <div className="contentViewer col-7">
          <div className="row">
            <div className="">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
