import React from 'react';

import DataTable from 'react-data-table-component';

import WaterProfiles from './data/water_profiles.json';
import WaterProfilesColumns from './data/water_profiles_columns.json';

import MineralProfiles from './data/mineral_profiles.json';
import MineralProfilesColumns from './data/mineral_profiles_columns.json';


class MineralProfilesTable extends React.Component {
  render () {
    return (
      <div className='DataTable MineralProfilesTable'>
        <DataTable
          title='Mineral Ion Contributions (per g, per Litre)'
          data={MineralProfiles}
          columns={MineralProfilesColumns}
          striped={true}
          highlightOnHover={true}>
        </DataTable>
      </div>
    );
  };
};

class WaterProfilesTable extends React.Component {
  constructor (props) {
    super(props);
    this.selectRow = props.selectRow;
  }

  render () {
    return (
      <div className='DataTable WaterProfilesTable'>
        <DataTable
          data={WaterProfiles}
          columns={WaterProfilesColumns}
          striped={true}
          highlightOnHover={true}
          pointerOnHover={true}
          onRowClicked={this.selectRow}>
        </DataTable>
      </div>
    );
  };
};

export { 
    MineralProfilesTable,
    WaterProfilesTable
};