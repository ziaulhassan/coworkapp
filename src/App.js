import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
function Pannell(props) {
  return (
    <div>
      <button type="submit"  onClick={props.this.event_home} > Home </button>
      <button type="submit"  onClick={props.this.event_aboutus} > About Us </button>
      <button type="submit"  onClick={props.this.event_contact} > Contact Us </button>
      <button type="submit"  onClick={props.this.event_login} > Login </button>
    </div>
  )
}
function Website(props) {
  if(props.this.state.page===1)
  {
    return(<Home/>)
  }
  else if(props.this.state.page===2)
  {
    return(<About/>)
  }
  else if(props.this.state.page===3)
  {
    return(<Contact/>)
  }
  else if(props.this.state.page===4)
  {
    return(<Login/>)
  }

}
function Home(props) {
  return (
    <div>
      <h1>Welcome to Cowork.Pk </h1>
    </div>
  )
}
function About(props) {
  return (
    <div>
      <h1>About Cowork.Pk </h1>
      <p>We are providing shared workspaces all over Pakistan at best rates</p>
    </div>
  )
}
function Contact(props) {
  return (
    <div>
      <h1>Contact Details </h1>
      <h2>email:zia.elect.engr@gmail.com</h2>
      <h2>Cell# 0305-5742138</h2>
      <a href="https://facebook.com/ziahassan">Facebook</a>

    </div>
  )
}
function Login(props) {
  return (
    <div>
      
      <h1>This is my Cowork</h1>
      <Coworkk this={props.this} />
      <Coworkk2 this={props.this} />
    </div>
  )
}



function Coworkk(props) {
  return (
    <div>
      <h5> This is Login Page</h5>
        {/* <input name="formname" type="text" placeholder="New WorkSpace" onChange={props.this.change_event1} /> 
      <h5> Password</h5>
      <input name="formpassword" type="text" placeholder="New WorkSpace" onChange={props.this.change_event1} />
      <button type="submit" onClick={props.this.check} >check </button> */}

    </div>
  )
}
function Coworkk2(props) {
  return (
    <div>
      {/* <h3>{props.this.state.zia}</h3> */}
    </div>
  )
}

class App extends Component {
  constructor() {
    super()
    this.change_event = this.change_event.bind(this)
    this.change_event1 = this.change_event1.bind(this)
    this.event_login = this.event_login.bind(this)
    this.event_contact = this.event_contact.bind(this)
    this.event_home = this.event_home.bind(this)
    this.event_aboutus = this.event_aboutus.bind(this)
    this.check = this.check.bind(this)

    this.state = {
      zia: 'Sucessfully failed',
      mobeen: '',
      formname: '',
      formpassword: '',
      page: 1,
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
  event_home(e)
  {
    this.setState({ page: 1 })
  }
  event_aboutus(e)
  {
    this.setState({ page: 2 })
  }
  event_login(e)
  {
    this.setState({ page: 4 })
  }
  event_contact(e)
  {
    this.setState({ page: 3 })
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
    <Pannell this={this} />
    <Website this={this}/>
      </div>
    );
  }
}

export default App;
