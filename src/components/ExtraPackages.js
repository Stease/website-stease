import React from 'react';
import { extraPackages } from '../preferences/preferences.js';
// eslint-disable-next-line
import styles from "../styling/extraPackages.css";

export class ExtraPackages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: extraPackages.rows,
      info: extraPackages.info,
    };
  }

  render() {
    return (
      <div>
        <table className="table">
          {this.state.rows.map((row, i) =>
            <tr key={i} className={"tr row" + (i + 1)}>
              <th key={0} className="th rowName">{row}</th>
              {this.state.info[i].map((info, i) =>
                <th key={i + 1} className="th rowInfo">{info}</th>
              )}
            </tr>
          )}
        </table>
      </div>
    );
  }
}