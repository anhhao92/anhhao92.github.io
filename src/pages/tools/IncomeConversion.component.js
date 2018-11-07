import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { withFormik, Field, FieldArray } from 'formik';
import { changeLanguague } from '../../actions/tools.action';
import Tooltip from '@material-ui/core/Tooltip';
import FaQuestionCircleO from 'react-icons/lib/fa/question-circle';
import { PIT_LEVELS } from '../../constants';

class IncomeConversionComponent extends React.PureComponent {
  state = {
    value: ''
  };

  convertToNumber(input) {
    return parseInt(input.replace(/[\D]/g, ''), 10);
  }

  onChangeLanguage = event => {
    const value = event.target.value;
    this.props.changeLanguague(value);
  };

  convertGrossToNet = () => {
    const { values } = this.props;
    const maxSI = this.convertToNumber(values.minimumWage) * 20;
    const mDependant =
      this.convertToNumber(values.dependant) * values.totalDependant;
    const grossIncome = this.convertToNumber(values.income);
    const mGross = grossIncome <= maxSI ? grossIncome : maxSI;
    const mSelf = Math.floor(
      grossIncome - (mGross * (values.si + values.hi + values.ui)) / 100
    );
    const mct = mSelf - this.convertToNumber(values.personal) - mDependant;
  };

  render() {
    const { values } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="mb-3">Currency</h4>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label">Monetary</label>
              <div className="col-sm-6">
                <Field
                  component="select"
                  name="currency"
                  className="form-control"
                >
                  <option value="usd">USD</option>
                  <option value="vnd">VND</option>
                </Field>
              </div>
            </div>
            <h4 className="mb-3">Deduction</h4>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label">
                <FormattedMessage
                  id="tools.personal"
                  defaultMessage="Default message"
                />
              </label>
              <div className="col-sm-6">
                <Field type="text" name="personal" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label">
                <FormattedMessage
                  id="tools.dependant"
                  defaultMessage="Default message"
                />
              </label>
              <div className="col-sm-6">
                <Field type="text" name="dependant" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label">
                <FormattedMessage
                  id="tools.totalDependant"
                  defaultMessage="Default message"
                />
              </label>
              <div className="col-sm-6">
                <Field
                  type="text"
                  name="totalDependant"
                  className="form-control"
                />
              </div>
            </div>

            <h4 className="mb-3">PIT Level</h4>
            <FieldArray
              name="pitLevels"
              render={arrayHelpers => (
                <>
                  {values.pitLevels.map((item, idx) => (
                    <div key={idx} className="form-group row">
                      <label className="col-sm-6 col-form-label">
                        <FormattedMessage
                          id={item.title}
                          defaultMessage="Default message"
                        />{' '}
                        (%)
                      </label>
                      <div className="col-sm-6">
                        <Field
                          type="text"
                          name={`pitLevels.${idx}.percentage`}
                          className="form-control"
                        />
                      </div>
                    </div>
                  ))}
                </>
              )}
            />

            <h4 className="mb-3">Setting</h4>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label">Minimum Wage</label>
              <div className="col-sm-6">
                <Field
                  type="text"
                  name="minimumWage"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label">Languague</label>
              <div className="col-sm-6">
                <select
                  defaultValue={this.props.lang}
                  onChange={this.onChangeLanguage}
                  className="form-control"
                >
                  <option value="en">English</option>
                  <option value="vi">Vietnamese</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Calculation GROSS and NET Income</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Income</label>
                <Field name="income" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button
                  type="button"
                  onClick={this.convertGrossToNet}
                  className="btn btn-primary"
                >
                  Convert to NET
                </button>
              </div>
              <div className="col-md-6">
                <button type="button" className="btn btn-secondary">
                  Convert to GROSS
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4 className="mb-3">Detail</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.grossIncome"
                        defaultMessage="Default message"
                      />
                      <FormattedMessage
                        id="tools.grossIncomeTooltip"
                        defaultMessage="Default message"
                      >
                        {message => (
                          <Tooltip title={message}>
                            <FaQuestionCircleO />
                          </Tooltip>
                        )}
                      </FormattedMessage>
                    </h6>
                    <span className="text-success">1000000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.socialInsurance"
                        defaultMessage="Default message"
                      />{' '}
                      (8%)
                    </h6>
                    <span className="text-success">1000000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.healthInsurance"
                        defaultMessage="Default message"
                      />{' '}
                      (1.5%)
                    </h6>
                    <span className="text-success">1000000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.unemploymentInsurance"
                        defaultMessage="Default message"
                      />{' '}
                      (0.5%)
                    </h6>
                    <span className="text-success">1000000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.deduction"
                        defaultMessage="Default message"
                      />
                    </h6>
                    <span className="text-success">{values.personal}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.dependantDeduction"
                        defaultMessage="Default message"
                      />
                    </h6>
                    <span className="text-success">
                      {values.totalDependant}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.taxableIncome"
                        defaultMessage="Default message"
                      />
                    </h6>
                    <span className="text-success">1000000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.pit"
                        defaultMessage="Default message"
                      />
                    </h6>
                    <span className="text-success">1000000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.netIncome"
                        defaultMessage="Default message"
                      />
                      <FormattedMessage
                        id="tools.netIncome"
                        defaultMessage="Default message"
                      >
                        {message => (
                          <Tooltip title={message}>
                            <FaQuestionCircleO />
                          </Tooltip>
                        )}
                      </FormattedMessage>
                    </h6>
                    <span className="text-success">1000000</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <h4 className="mb-3">
                  <FormattedMessage
                    id="tools.pitDetail"
                    defaultMessage="Default message"
                  />
                </h4>
              </div>
            </div>
            <div className="row">
              {values.pitLevels.map((item, idx) => (
                <React.Fragment key={idx}>
                  <h6 className="col-sm-6">
                    <FormattedMessage
                      id={item.title}
                      defaultMessage="Default message"
                    />{' '}
                    (%)
                  </h6>
                  <h6 className="col-sm-6 text-right">{item.value}</h6>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const withForm = withFormik({
  mapPropsToValues: () => ({
    income: '',
    si: 8,
    hi: 1.5,
    ui: 1,
    currency: 'vnd',
    minimumWage: '1,150,000',
    personal: '9,000,000',
    dependant: '3,600,000',
    totalDependant: 0,
    pitLevels: PIT_LEVELS
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
});

const withConnect = connect(
  state => {
    return state.locales;
  },
  { changeLanguague }
);

export default compose(
  withForm,
  withConnect
)(IncomeConversionComponent);
