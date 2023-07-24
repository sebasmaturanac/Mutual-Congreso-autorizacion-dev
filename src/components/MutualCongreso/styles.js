import { StyleSheet } from '@react-pdf/renderer';

export default StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexGrow: 1,
    width: '97%',
    border: '2pt solid black',
    borderRadius: '10pt',
    marginBottom: '5pt',
    padding: '5pt',
    fontSize: '12pt',
  },
  textTitle: {
    border: '1pt solid black',
    backgroundColor: 'silver',
    fontSize: '12pt',
    padding: '1pt',
    marginRight: '3pt',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    minWidth: '50pt',
    marginRight: '5pt',
    borderBottom: '1pt dotted black',
    paddingHorizontal: '5pt',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 'extrabold',
  },
  notePageOne: {
    border: '1pt solid black',
    backgroundColor: '#C0C0C0',
    padding: 5,
    fontSize: 10,
  },
  textBold: {
    color: 'black',
    fontSize: '12pt',
    textAlign: 'left',
  },
  labelCheck: {
    marginRight: '10pt',
    minWidth: '100pt',
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
