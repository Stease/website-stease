import React from 'react';
import { websitePackages } from '../preferences/preferences.js';
// eslint-disable-next-line
import styles from "../styling/websitePackages.css";

export class WebsitePackages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: websitePackages.rows,
      info: websitePackages.info,
    };
  }

  render() {
    return (
      <div>
        <table className="websiteTable">
          {this.state.rows.map((row, i) =>
            <tr key={i} className={"websiteTr websiteRow" + (i + 1)}>
              <th key={0} className="websiteTh websiteRowName">{row}</th>
              {this.state.info[i].map((info, i) =>
                <th key={i + 1} className="websiteTh websiteRowInfo">{info}</th>
              )}
            </tr>
          )}
        </table>
      </div>
    );
  }
}