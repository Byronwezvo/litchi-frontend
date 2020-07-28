import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onCompanyNameInput = this.onCompanyNameInput.bind(this);
    this.onEmailInput = this.onEmailInput.bind(this);
    this.onPasswordInput = this.onPasswordInput.bind(this);

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
  onEmailInput(e) {
    // -> Update the state
    this.setState({
      company_email: e.target.value,
    });
  }
  onPasswordInput(e) {
    // -> Update the state
    this.setState({
      company_password: e.target.value,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="display-4">sign up here</h1>
        <br />
        {/* This is the form */}
        <form onSubmit={this.onSubmit}>
          <input
            className="form-control"
            type="text"
            required
            placeholder="Company Name"
            onChange={this.onCompanyNameInput}
          />
          <br />
          <input
            className="form-control"
            type="email"
            required
            aria-describedby="emailHelp"
            placeholder="company@email.com"
            onChange={this.onEmailInput}
          />
          <br />
          <input
            className="form-control"
            type="password"
            required
            placeholder="********"
            onChange={this.onPasswordInput}
          />
          <br />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
