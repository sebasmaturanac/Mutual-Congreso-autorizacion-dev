import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import { Document } from '@react-pdf/renderer';

const MutualCongreso = ({ state, signature }) => {
  return (
    <Document>
      <Page1 state={state} signature={signature} />
      <Page2 state={state} signature={signature} />
      <Page3 state={state} signature={signature} />
      <Page4 state={state} />
      <Page5 state={state} signature={signature} />
      <Page6 state={state} signature={signature} />
      <Page7 state={state} signature={signature} />
      <Page8 state={state} signature={signature} />
      <Page9 state={state} signature={signature} />
    </Document>
  );
};

export default MutualCongreso;
