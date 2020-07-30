import React from 'react';

import CustomInput from '../../components/custom_input/custom_input.component';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Bind methods to the Signup class
     *
     * @author Byron Wezvo
     */
    this.onSubmit = this.onSubmit.bind(this);
    this.onRepresentativeInput = this.onRepresentativeInput.bind(this);
    this.onCompanyNameInput = this.onCompanyNameInput.bind(this);
    this.onCompanyNumberInput = this.onCompanyNumberInput.bind(this);
    this.onCompanyEmailInput = this.onCompanyEmailInput.bind(this);
    this.onCompanyPasswordInput = this.onCompanyPasswordInput.bind(this);

    this.state = {
      representative_name: '',
      company_name: '',
      company_number: '',
      company_email: '',
      company_password: '',
    };
  }

  /**
   * # onSubmit method
   *  is called when the form is submitted, this method will make a request to the
   * backend, posting the form and awaiting response
   * @param {*} e
   *
   * @author Byron Wezvo
   */
  onSubmit(e) {
    // -> Default is load
    e.preventDefault();

    // -> Form field status [ if something is wrong it will set this var to false ]
    let formStatus = true;

    // -> Add method to check if anything is '' then break and throw an error
    for (const [key, value] of Object.entries(this.state)) {
      console.log(`${key}: ${value}`);
      if (value == '' || ' ' || value.length < 3) {
        // -> Set form status to false
        formStatus = false;

        // -> Alert the user
        alert('Please check your data');

        // -> break the loop
        break;
      }
    }

    // -> make a post request
    // const url = 'http://localhost:3300/dashboard/signup';
    // fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(this.state),
    // })
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));

    //-> debug
    console.log(formStatus);
  }

  /**
   * # onRepresentativeInput method
   * will update the representative_name state in the state object to a given value
   * by the client
   *
   * @param {*} e
   *
   * @author Byron Wezvo
   */
  onRepresentativeInput(e) {
    // -> Update the state
    this.setState({
      representative_name: e.target.value,
    });
  }

  /**
   * # onCompanyNameInput method
   * will update the company_name state in the state object to a given value
   * by the client
   *
   * @param {*} e
   *
   * @author Byron Wezvo
   */
  onCompanyNameInput(e) {
    // -> Update the state
    this.setState({
      company_name: e.target.value,
    });
  }

  /**
   * # onCompanyNumberInput method
   * will update the company_number state in the state object to a given value
   * by the client
   *
   * @param {*} e
   *
   * @author Byron Wezvo
   */
  onCompanyNumberInput(e) {
    // -> Update the state
    this.setState({
      company_number: e.target.value,
    });
  }

  /**
   * # onCompanyEmailInput method
   * will update the company_email state in the state object to a given value
   * by the client
   *
   * @param {*} e
   *
   * @author Byron Wezvo
   */
  onCompanyEmailInput(e) {
    // -> Update the state
    this.setState({
      company_email: e.target.value,
    });
  }

  /**
   * # onCompanyPasswordInput method
   * will update the company_password state in the state object to a given value
   * by the client
   *
   * @param {*} e
   *
   * @author Byron Wezvo
   */
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
            onChange={this.onRepresentativeInput}
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
            onChange={this.onCompanyNumberInput}
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
