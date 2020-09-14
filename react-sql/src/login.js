import React, {Component} from 'react';
import logo from './adrian-korte-5gn2soeAc40-unsplash.jpg';
import Caption, {Img} from "./Constants"
import axios from 'axios';
import styled from 'styled-components';

const Input = styled.input`
  padding: 3px 2px;
  margin: 0 auto;
  border-radius: 1px;

`;

const Label = styled.label`
    text-align: left;
    position: fixed;
    left:765px;
    display: block

`;

const Div = styled.div`
  color: red;
`;

class Login extends Component{

  constructor(props)
  {
    super(props);
    this.state={
      email: '',
      password: '',
      value: 0
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }
  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submit(e) {
    e.preventDefault();
    axios.post('/getToken', {
      email: this.state.email,
      password: this.state.password
    }).then(res=>{localStorage.setItem('cool-jwt', res.data);
      this.setState({value: 0});
      this.props.history.push('/Music');
    })
    .catch(error => {
      return(
        this.setState({value: 1})
      )
    });
  }
  render() {
    return (
      <div className = "Login Page">
        <h1></h1>
        <Img src={logo} alt ="Logo"/>
        <h1></h1>
        <h1>Login Below</h1>
        <form onSubmit = {e => this.submit(e)}>

          <Label>Email:</Label>
          <br/>
          <Input type="text" name="email" onChange={e=> this.change(e)} value ={this.state.email}/>
          <br/><br/>

          <Label>Password:</Label>
          <br/>
          <Input type="password" name = "password" onChange={e=> this.change(e)} value = {this.state.password}/>
          <br/><br/>
          <button type = "submit" > Submit</button>
          {this.state.value ===1 &&
            <Div color = "red"> Wrong information, please try again</Div>
          }
        </form>
      </div>
    )
  }
}

export default Login;
