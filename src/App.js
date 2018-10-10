import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
function Coworkk(props) {
  return (
    <div>
      <h5> UserName</h5>
      <input name="formname" type="text" placeholder="New WorkSpace" onChange={props.this.change_event1} />
      <h5> Password</h5>
      <input name="formpassword" type="text" placeholder="New WorkSpace" onChange={props.this.change_event1} />
      <button type="submit" onClick={props.this.check} >check </button>


    </div>
  )
}
function Coworkk2(props) {
  return (
    <div>
      <h3>{props.state.zia}</h3>
    </div>
  )
}

class App extends Component {
  constructor() {
    super()
    this.change_event = this.change_event.bind(this)
    this.change_event1 = this.change_event1.bind(this)
    this.check = this.check.bind(this)


    this.state = {
      zia: 'Sucessfully failed',
      mobeen: '',
      formname: '',
      formpassword: '',
      users: [
        {
          UserName: 'zia1',
          Password: 'nopass'
        },
        {
          UserName: 'zia2',
          Password: 'nopass'
        },
        {
          UserName: 'zia3',
          Password: 'nopass'
        }
      ]

    }
  }
  change_event(e) {
    console.log('its working from ', e.target.name)
    this.setState({ zia: e.target.value })
    console.log('state value ', this.state.zia)
  }
  change_event1(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  check(e) {
    console.log('its working')
    this.state.users.map((user, index) => {
      if (this.state.zia === 'Sucessfully failed') {
        console.log("baray wala if")

        if (this.state.formname === user.UserName && this.state.formpassword === user.Password) {
          this.setState({ zia: 'Successfully Logged in' })
          console.log("if main hun")
          
        }
        else {
          this.setState({ zia: 'Sucessfully failed' })
          console.log("else main hun")
        }
       }

       else {

       }


    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is my Cowork</h1>
        <Coworkk this={this} />
        <Coworkk2 state={this.state} />


      </div>
    );
  }
}

export default App;
