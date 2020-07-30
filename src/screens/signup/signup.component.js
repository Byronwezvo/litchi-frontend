import React from 'react';

import CustomInput from '../../components/custom_input/custom_input.component';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onCompanyNameInput = this.onCompanyNameInput.bind(this);
    this.onEmailInput = this.onCompanyEmailInput.bind(this);
    this.onPasswordInput = this.onCompanyPasswordInput.bind(this);

    this.state = {
      company_name: '',
      company_email: '',
      company_password: '',
    };
  }

  onSubmit(e) {
    //-> Default is load
    e.preventDefault();

    // -> make a post request
    const url = 'http://localhost:3300/dashboard/signup';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));

    //-> debug
    console.log(this.state);
  }

  onCompanyNameInput(e) {
    // -> Update the state
    this.setState({
      company_name: e.target.value,
    });
  }
  onCompanyEmailInput(e) {
    // -> Update the state
    this.setState({
      company_email: e.target.value,
    });
  }
  onCompanyPasswordInput(e) {
    // -> Update the state
    this.setState({
      company_password: e.target.value,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="display-4">Sign up here</h1>
        <br />
        {/* This is the form */}
        <form onSubmit={this.onSubmit}>
          <CustomInput
            label="Representative Name"
            type="text"
            placeholder="John Doe"
            onChange={}
          />

          <CustomInput
            label="Company Name"
            type="text"
            placeholder="microfinance"
            onChange={this.onCompanyNameInput}
          />

          <CustomInput
            label="Company Number"
            type="text"
            placeholder="07** *** ***"
            onChange={}
          />

          <CustomInput
            label="Company Email"
            type="email"
            placeholder="company@domain.com"
            onChange={this.onCompanyEmailInput}
            aria-describedby="emailHelp"
          />

          <CustomInput
            label="Password"
            type="password"
            placeholder="********"
            onChange={this.onCompanyPasswordInput}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
