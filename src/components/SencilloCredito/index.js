import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import { Document } from '@react-pdf/renderer';

const SencilloCredito = ({ state, signature }) => {
  return (
    <Document>
      <Page1 state={state} signature={signature} />
      <Page2 state={state} />
      <Page3 state={state} signature={signature} />
      <Page4 state={state} signature={signature} />
      <Page5 state={state} signature={signature} />
      <Page6 state={state} signature={signature} />
    </Document>
  );
};

export default SencilloCredito;
