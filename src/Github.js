import React, {Component} from 'react';
import we from './we.svg';
import hu from './hu.svg';
import se from './se.svg';

class Github extends Component {
  render(){
    return(
      <div>
      <div className="row">

      <div className="col-sm-3">
        <section className="card1">
        <h4>Scenario-1 </h4>
        <p>
        Blas Riveros: Is he the next Carlos?</p>
        <img src={we} alt="image1" id="gen" />
        <p>Basel left-back Blas Riveros is attracting attention</p>
          </section>
          </div>

        <div className="col-sm-3">
        <section className="card1">
          <h4>Scenario-2 </h4>
          <p>
          City to win title against Manchester United on April 7</p>
          <img src={se} alt="image1" id="gen" />
          <p>Football official</p>
            </section>
            </div>

        <div className="col-sm-3">
        <section className="card1">
          <h4>Scenario-3 </h4>
          <p>
          If City drop points somewhere along the line</p>
            <img src={hu} alt="image1" id="gen" />
            <p>City could also win the league at Wembley</p>
        </section>
        </div>

        <div className="col-sm-3">
        <section className="card1"  id="create">
          <h4>Log in to your account </h4>
            <form>
              <input type="text" placeholder="Email" /><br /><br />
              <input type="password" placeholder="Password" /><br />
              <input type="checkbox" value="Remember Me" /> Remember Me<br />
              <button>Log In</button><hr id="white" />
              <h5>See whats happening in the<br />
              Football world right now.</h5>
              <button>Sign Up</button>
              </form>

        </section>
        </div>


        </div>

        <div className="row">

        <div className="col-sm-3">
          <section className="card1">
          <h4>Scenario-4 </h4>
          <p>
          Alexander Arnold has proven to be an attacking threat</p>
          <img src={we} alt="image1" id="gen" />
            </section>
            </div>

        <div className="col-sm-3">
          <section className="card1">
          <h4>Scenario-4 </h4>
          <p>
          Manchester City will break the records for most points won</p>
            <img src={we} alt="image1" id="gen" />
          </section>
        </div>

          <div className="col-sm-3">
          <section className="card1">
            <h4>Scenario-5 </h4>
            <p>
            Riveros featured for Basel against Manchester City</p>
            <img src={hu} alt="image1" id="gen" />
              </section>
              </div>

          <div className="col-sm-3">
          <section className="card1">
            <h4>Scenario-6 </h4>
            <p>
            Robertsons crossing ability praised by Jamie Carragher</p>
              <img src={se} alt="image1" id="gen" />
          </section>
          </div>


          </div>

        </div>


    );
  }
}
export default Github;
