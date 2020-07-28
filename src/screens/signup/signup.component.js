import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.onCompanyNameInput = this.onCompanyNameInput.bind(this);

    this.state = {
      company_name: '',
      company_email: '',
      company_password: '',
    };
  }

  onSubmit()

  onCompanyNameInput(e) {
    this.setState({
      company_name: e.target.value,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="display-4">sign up here</h1>
        <br />
        {/* This is the form */}
        <form>
          <input
            class="form-control"
            type="text"
            required
            placeholder="Company Name"
          />
          <br />
          <input
            class="form-control"
            type="email"
            required
            aria-describedby="emailHelp"
            placeholder="company@email.com"
          />
          <br />
          <input
            class="form-control"
            type="password"
            required
            placeholder="********"
          />
          <br />

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
