import React from 'react';
import CustomInput from '../../components/custom_input/custom_input.component';

class NewApplication extends React.Component {
  render() {
    return (
      <div className="col-sm-10 overflow-auto">
        <div className="container">
          <form>
            {/* Client Details */}
            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <CustomInput
                  label="Client Name"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="col-sm-6 ">
                <CustomInput
                  label="Client Mobile Number"
                  type="text"
                  placeholder="microfinance"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <CustomInput
                  label="id number"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="col-sm-6 ">
                <CustomInput
                  label="Address"
                  type="text"
                  placeholder="microfinance"
                />
              </div>
            </div>
            {/* Client Next of keen Details */}
            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <CustomInput
                  label="Client Name"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="col-sm-6 ">
                <CustomInput
                  label="Client Mobile Number"
                  type="text"
                  placeholder="microfinance"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <CustomInput
                  label="id number"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="col-sm-6 ">
                <CustomInput
                  label="Address"
                  type="text"
                  placeholder="microfinance"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewApplication;
