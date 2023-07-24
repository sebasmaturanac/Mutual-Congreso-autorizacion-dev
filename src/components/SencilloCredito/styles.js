import { StyleSheet } from '@react-pdf/renderer';

export default StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  pageBackground: {
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    display: 'block',
    height: '100%',
    width: '100%',
  },
  wfull: { width: '100%' },
  wmedio: { width: '50%' },
  wtercio: { width: '33.3%' },
  wcuarto: { width: '25%' },
  wquinto: { width: '20%' },
  wdecimo: { width: '10%' },
  wcinco: { width: '5%' },
  container: {
    flexGrow: 1,
    width: '97%',
    border: '2pt solid black',
    borderRadius: '10pt',
    marginBottom: '5pt',
    padding: '5pt',
    fontSize: '12pt',
  },
  title: {
    fontFamily: 'Oswald',
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  subTitle: {
    fontFamily: 'Oswald',
    textTransform: 'uppercase',
    fontSize: '8pt',
  },
  textTitle: {
    border: '1pt solid black',
    backgroundColor: 'silver',
    fontSize: '12pt',
    padding: '1pt',
    marginRight: '3pt',
  },
  text: {
    marginRight: '5pt',
    borderBottom: '1pt dotted black',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 'auto',
    fontSize: 10,
  },
  signature: {
    height: '30pt',
    width: '60pt',
  },
});
