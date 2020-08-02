import React from 'react';
import './login.css';
import CustomInput from '../../components/custom_input/custom_input.component';
import GlitchButton from '../../components/glitch_button/glitch_button.component';
import Footer from '../../components/footer/footer.component';

class Login extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Bind methods to the Signup class
     *
     * @author Byron Wezvo
     */
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
      <div className="container page-wrapper">
        <div className="row user-form">
          {/* form section */}
          <div className="col-lg-7">
            {/* Form text */}
            <h1 className="text-center" id="register-big-text">
              Log in
            </h1>
            <br />
            {/* Form */}
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <CustomInput
                  label="Company Email"
                  type="email"
                  placeholder="company@domain.com"
                  onChange={this.onCompanyEmailInput}
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="form-group">
                <CustomInput
                  label="Password"
                  type="password"
                  placeholder="********"
                  onChange={this.onCompanyPasswordInput}
                />
              </div>

              <div className="form-group text-center">
                <GlitchButton name="Log in" />
              </div>

              <div className="help-messages-wrapper">
                <p className="help-message">Forgot password</p>
                <p className="help-message">Not a user, Create account</p>
                <p className="help-message">
                  I'm having other problems logging into my account
                </p>
              </div>
            </form>
          </div>
          {/* End of Form */}
          {/* Image or design */}
          <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
