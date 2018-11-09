import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { withFormik, Field, FieldArray } from 'formik';
import { changeLanguague } from '../../actions/tools.action';
import Tooltip from '@material-ui/core/Tooltip';
import FaQuestionCircleO from 'react-icons/lib/fa/question-circle';
import { PIT_LEVELS, MINIMUM_WAGE } from '../../constants';

class IncomeConversionComponent extends React.PureComponent {
  convertToNumber(input) {
    if (typeof input === 'string') {
      return parseInt(input.replace(/[\D]/g, ''), 10);
    }
    return null;
  }

  onChangeLanguage = event => {
    const value = event.target.value;
    this.props.changeLanguague(value);
  };

  parseFormValueToNumber() {
    const { values } = this.props;
    return {
      ...values,
      income: this.convertToNumber(values.income),
      minimumWage: this.convertToNumber(values.minimumWage),
      personal: this.convertToNumber(values.personal),
      dependant: this.convertToNumber(values.dependant)
    };
  }

  calculatePIT(taxableIncome) {
    let result = 0;
    const { pitLevels } = this.props.values;
    const lastLevel = pitLevels.length - 1;
    for (var i = 0; i < lastLevel; i++) {
      if (taxableIncome >= pitLevels[i].to)
        pitLevels[i].value = pitLevels[i].maximum;
      else if (
        pitLevels[i].from <= taxableIncome &&
        taxableIncome <= pitLevels[i].to
      )
        pitLevels[i].value = Math.floor(
          ((taxableIncome - pitLevels[i].from) * pitLevels[i].percentage) / 100
        );
      else pitLevels[i].value = 0;
      result = result + pitLevels[i].value;
    }
    if (taxableIncome > pitLevels[lastLevel].from)
      pitLevels[lastLevel].value = Math.floor(
        ((taxableIncome - pitLevels[lastLevel].from) *
          pitLevels[lastLevel].percentage) /
          100
      );
    else pitLevels[lastLevel].value = 0;
    result += pitLevels[lastLevel].value;
    return result;
  }

  convertGrossToNet = () => {
    const { setFieldValue } = this.props;
    const values = this.parseFormValueToNumber();
    const maxSI = values.minimumWage * 20;
    const deduction =
      values.personal + values.dependant * values.totalDependant;
    const incomeForSI = values.income <= maxSI ? values.income : maxSI;
    const incomeAfterSI = Math.floor(
      values.income - (incomeForSI * (values.si + values.hi + values.ui)) / 100
    );
    const incomeForPIT = incomeAfterSI - deduction;
    const incomePIT = incomeForPIT < 0 ? 0 : incomeForPIT;
    const totalTax = this.calculatePIT(incomePIT);
    setFieldValue('incomeBeforeTax', incomeAfterSI);
    setFieldValue('taxableIncome', incomePIT);
    setFieldValue('incomeForSI', Math.floor(incomeForSI * values.si) / 100);
    setFieldValue('incomeForHI', Math.floor(incomeForSI * values.hi) / 100);
    setFieldValue('incomeForUI', Math.floor(incomeForSI * values.ui) / 100);
    setFieldValue(
      'dependantDeduction',
      values.dependant * values.totalDependant
    );
    setFieldValue('totalPIT', totalTax);
    setFieldValue('netIncome', incomeAfterSI - totalTax);
  };

  formattedNumber(value) {
    return parseFloat(value).toLocaleString();
  }

  render() {
    const { values } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="mb-3">
              <FormattedMessage
                id="tools.section.deduction"
                defaultMessage="Default message"
              />
            </h4>
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

            <h4 className="mb-3">
              <FormattedMessage
                id="tools.section.pitLevel"
                defaultMessage="Default message"
              />
            </h4>
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

            <h4 className="mb-3">
              <FormattedMessage
                id="tools.section.setting"
                defaultMessage="Default message"
              />
            </h4>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label">
                <FormattedMessage
                  id="tools.minimumWage"
                  defaultMessage="Default message"
                />

                <FormattedMessage
                  id="tools.minimumWageTooltip"
                  defaultMessage="Default message"
                  values={{
                    value: values.minimumWage
                  }}
                >
                  {message => (
                    <Tooltip title={message}>
                      <FaQuestionCircleO />
                    </Tooltip>
                  )}
                </FormattedMessage>
              </label>
              <div className="col-sm-6">
                <Field
                  component="select"
                  name="minimumWage"
                  className="form-control"
                >
                  {MINIMUM_WAGE.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.region}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-6 col-form-label">
                <FormattedMessage
                  id="tools.lang"
                  defaultMessage="Default message"
                />
              </label>
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
            <h4 className="mb-3">
              <FormattedMessage
                id="tools.section.title"
                defaultMessage="Default message"
              />
            </h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>
                  <FormattedMessage
                    id="tools.income"
                    defaultMessage="Default message"
                  />
                </label>
                <Field name="income" className="form-control" />
              </div>
              <div className="col-md-4">
                <label>
                  <FormattedMessage
                    id="tools.section.currency"
                    defaultMessage="Default message"
                  />
                </label>
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
                <h4 className="mt-3">
                  <FormattedMessage
                    id="tools.section.detail"
                    defaultMessage="Default message"
                  />
                </h4>
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
                    <span className="text-success">
                      {this.formattedNumber(values.income)}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.socialInsurance"
                        defaultMessage="Default message"
                      />{' '}
                      (8%)
                    </h6>
                    <span className="text-success">
                      {this.formattedNumber(values.incomeForSI)}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.healthInsurance"
                        defaultMessage="Default message"
                      />{' '}
                      (1.5%)
                    </h6>
                    <span className="text-success">
                      {this.formattedNumber(values.incomeForHI)}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.unemploymentInsurance"
                        defaultMessage="Default message"
                      />{' '}
                      (0.5%)
                    </h6>
                    <span className="text-success">
                      {this.formattedNumber(values.incomeForUI)}
                    </span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.incomeBeforeTax"
                        defaultMessage="Default message"
                      />
                    </h6>
                    <span className="text-success">
                      {this.formattedNumber(values.incomeBeforeTax)}
                    </span>
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
                      {this.formattedNumber(values.dependantDeduction)}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.taxableIncome"
                        defaultMessage="Default message"
                      />
                    </h6>
                    <span className="text-success">
                      {this.formattedNumber(values.taxableIncome)}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>
                      <FormattedMessage
                        id="tools.pit"
                        defaultMessage="Default message"
                      />
                    </h6>
                    <span className="text-success">
                      {this.formattedNumber(values.totalPIT)}
                    </span>
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
                    <span className="text-success">
                      {this.formattedNumber(values.netIncome)}
                    </span>
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
                  <h6 className="col-sm-6 text-right">
                    {this.formattedNumber(item.value)}
                  </h6>
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
    income: 0,
    netIncome: 0,
    incomeBeforeTax: 0,
    taxableIncome: 0,
    incomeForSI: 0,
    incomeForHI: 0,
    incomeForUI: 0,
    dependantDeduction: 0,
    totalPIT: 0,
    si: 8,
    hi: 1.5,
    ui: 1,
    currency: 'vnd',
    minimumWage: '3,980,000',
    personal: '9,000,000',
    dependant: '3,600,000',
    totalDependant: 0,
    pitLevels: PIT_LEVELS.map(level => ({ ...level }))
  }),
  handleSubmit: (values, { setSubmitting }) => {
    // setTimeout(() => {
    //   setSubmitting(false);
    // }, 1000);
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
