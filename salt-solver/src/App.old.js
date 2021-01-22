import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Container from '@material-ui/core/Container';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { MineralEntry } from './MineralEntry';
import { WaterProfilesTable } from './DataTables';

import './App.css';

class SaltSolverApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clickedRow: null};
    this.selectRow = this.selectRow.bind(this);
  };

  selectRow (row) {
    this.setState({clickedRow: row});
  };

  render () {
    return (
      <div className='App'>
        <Container maxWidth='lg'>
          <div className='WaterProfileInput'>
            <h2>Source Water Profile Input</h2>
            <MineralEntry classNames='SourceProfileEntry'></MineralEntry>
          </div>

          <div className='TargetProfileInput'>
            <h2>Target Water Profile Input</h2>
            <MineralEntry state={this.state.clickedRow} classNames='TargetProfileEntry'></MineralEntry>
          </div>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
            Water Profile Presets
            </AccordionSummary>
            <AccordionDetails>
              <div className='Tables'>
                <WaterProfilesTable selectRow={this.selectRow}></WaterProfilesTable>
              </div>
            </AccordionDetails>
          </Accordion>
        </Container>
      </div>
    );
  };
}

function App () {
  return <SaltSolverApp></SaltSolverApp>;
};

export default App;
