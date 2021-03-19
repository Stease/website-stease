import React from 'react';
import { ExtraPackages } from "./ExtraPackages";
import { WebsitePackages } from "./WebsitePackages";

export class PrijzenpageWindow extends React.Component {
  render() {
    return (
      <div>
        <WebsitePackages />
        <ExtraPackages />
      </div>
    );
  }
}