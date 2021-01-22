import React from 'react';

import Grid from '@material-ui/core/Grid';

import DataTable from 'react-data-table-component';

import WaterProfiles from './data/water_profiles.json';
import WaterProfilesColumns from './data/water_profiles_columns.json';
import MineralProfiles from './data/mineral_profiles.json';
import MineralProfilesColumns from './data/mineral_profiles_columns.json';

class MineralProfilesTable extends React.Component {
  render () {
    return (
      <Grid container justify='center' className='DataTable MineralProfilesTable' spacing={1}>
        <Grid item xs={12} sm={12} lg={12}>
          <DataTable
            title={'Mineral Ion Contributions (per g, per Litre)'}
            columns={MineralProfilesColumns}
            data={MineralProfiles}
            striped={true}
            pagination
            paginationPerPage={10}>
          </DataTable>
        </Grid>
      </Grid>
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
      <Grid container justify='center' className='DataTable WaterProfilesTable' spacing={1}>
        <Grid item xs={12} sm={12} lg={12}>
          <DataTable
            columns={WaterProfilesColumns}
            data={WaterProfiles}
            striped={true}
            highlightOnHover={true}
            pointerOnHover={true}
            onRowClicked={this.selectRow}
            pagination
            paginationPerPage={10}
            defaultSortField='style'>
          </DataTable>
        </Grid>
      </Grid>
    );
  };
};

export { 
  MineralProfilesTable,
  WaterProfilesTable
};