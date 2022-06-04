import logo from './assets/images/JC_Logo_Col_Dark_300.png';
import accountIcon from './assets/images/user-circle.png';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {

    //FETCH TEXT FROM API
    let endpoint = "/api/index";

    const config = {method: "GET", headers:{"Accept":"application/json"}}

    fetch(endpoint, config)
      .then(response => response.json())
      .then(data => {
    
        //APPEND TEXT
        document.getElementById('h1-text').innerHTML = data.h1Text
        document.getElementById('h2-text').innerHTML = data.h2Text

      })
      .catch((error) => {
        alert("There was the following error: "+error);      
      });
  }) 
  
  return (
    <div className="App">
      <div className="navigation-wrapper">
        <img src={logo} alt="nav logo" className="logo"/>
        <div className="account-buttons-wrapper">
          <button className="register-button">Register</button>
          <a type="button" href="#"><img src={accountIcon} alt="account icon" /></a>
        </div>
      </div>
      <div className="container">
        <div className="deposit-wrapper">
          <h1 id="h1-text"></h1>
          <h2 id="h2-text"></h2>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
