import React from 'react';
import './login.css';
import { toast } from 'react-toastify';
import CustomInput from '../../components/custom_input/custom_input.component';
import GlitchButton from '../../components/glitch_button/glitch_button.component';
import Footer from '../../components/footer/footer.component';

class Login extends React.Component {
  /**
   * Basically clean the session storage
   * 
   @author Byron Wezvo
   */
  componentWillMount() {
    sessionStorage.clear();
  }

  constructor(props) {
    super(props);

    /**
     * Bind methods to the Signup class
     *
     * @author Byron Wezvo
     */
    this.onSubmit = this.onSubmit.bind(this);
    this.onCompanyEmailInput = this.onCompanyEmailInput.bind(this);
    this.onCompanyPasswordInput = this.onCompanyPasswordInput.bind(this);
    this.routeToDashboard = this.routeToDashboard.bind(this);
    this.saveToSessionStorage = this.saveToSessionStorage.bind(this);

    this.state = {
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
      if (value.length < 3) {
        // -> Set form status to false
        formStatus = false;

        // -> break the loop
        break;
      }
    }

    // -> Check if status is true then send
    if (formStatus === true) {
      // -> make a post request
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const rawData = JSON.stringify(this.state);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: rawData,
        redirect: 'follow',
      };

      fetch('http://localhost:3300/login', requestOptions)
        .then((response) => {
          // -> Check to see the response status
          if (response.status === 200) {
            // -> Create a success notification
            toast.success('✅ Yey. Lets get you there.', {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            // -> convert response to json
            return response.json();
          } else {
            // -> Create an error
            toast.error('🤔 Invalid username or password.', {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .then((result) => {
          // -> call the saveToSessionStorage function
          this.saveToSessionStorage(result);

          // -> route user to dashboard
          this.routeToDashboard();
        }) // Todo : save data to
        .catch((error) => {
          console.log('error', error);
        });
    } else {
      // -> Alert user error
      toast.error('😭 Invalid Details.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    //-> debug
    console.log(this.state);
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

  /**
   * # Process Response [ from API ]
   *
   * this method is called only when response code is 200 level
   *
   * @author Byron Wezvo
   */
  saveToSessionStorage(object) {
    // -> Local storage / Session Storage
    sessionStorage.setItem('payload', JSON.stringify(object));
  }

  /**
   * # Route To Dashboard
   *
   * This function will only be called when user has submitted the correct details
   * and at this point we might want to give them access to the dashboard
   *
   * @author Byron Wezvo
   */
  routeToDashboard() {
    window.location = '/dashboard';
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
