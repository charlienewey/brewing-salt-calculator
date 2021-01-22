import React, { useState } from 'react';

import DataTable from 'react-data-table-component';

import WaterProfiles from './data/water_profiles.json';
import WaterProfilesColumns from './data/water_profiles_columns.json';

import './App.css';

// before loading app, set isSelected to false for all rows
for (var i in WaterProfiles) {
  WaterProfiles[i].isSelected = false;
};

function isEmpty (obj) {
  return (
    [Object, Array].includes((obj || {}).constructor) &&
    !Object.entries(obj || {}).length
  )
};

class WaterProfilesTable extends React.Component {
  render () {
    return (
      <div className='WaterProfilesTable'>
        <DataTable
          title='Water Profile Presets'
          data={WaterProfiles}
          columns={WaterProfilesColumns}
          striped={true}
          highlightOnHover={true}
          pointerOnHover={true}>
        </DataTable>
      </div>
    );
  };
};

function App () {
  return (
    <div className='App'>
      <WaterProfilesTable></WaterProfilesTable>)
    </div>
  );
}

export default App;
