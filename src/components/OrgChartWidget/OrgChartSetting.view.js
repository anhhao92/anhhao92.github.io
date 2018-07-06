import React from 'react';
import { Input } from 'reactstrap';

export const OrgChartSettingView = props => {
  return (
    <div className="row">
      <div className="col-12">Root Contact:</div>
      <div className="col-6">
        <Input
          type="select"
          defaultValue={props.configs.rootEmployeeId}
          onChange={props.setRootEmployee}
        >
          {props.contacts &&
            props.contacts.map(e => (
              <option key={e.id} value={e.id}>
                {e.firstName} {e.lastName}
              </option>
            ))}
        </Input>
      </div>
    </div>
  );
};
