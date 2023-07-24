import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../../assets/logoWhite.png';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    background: 'white',
    color: 'black',
    border: '2pt solid black',
    borderRadius: '10pt',
    height: '120pt',
    width: '95%',
    marginTop: '3pt',
    marginBottom: '3pt',
  },
  leftHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7F7F7F',
    color: 'white',
    fontWeight: 200,
    padding: '0 5pt',
    borderBottomLeftRadius: '10pt',
    borderTopLeftRadius: '10pt',
  },
  logo: {
    width: 60,
    height: 60,
  },
  congreso: {
    fontSize: 12,
    fontWeight: 500,
  },
  middleHeader: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5pt 10pt',
    justifyContent: 'space-between',
  },
  textBold: {
    color: 'black',
    fontSize: '12pt',
    textAlign: 'left',
  },
  textLight: {
    color: 'black',
    fontSize: '10pt',
    marginTop: '10pt',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 10,
    paddingVertical: 10,
  },
  noteContainer: {
    border: '1pt solid black',
    backgroundColor: '#C0C0C0',
    borderRadius: 5,
    padding: 5,
    alignSelf: 'flex-end',
    marginBottom: 10,
    width: '50%',
  },
});

const HeaderPDF = ({ title, subItem }) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftHeader}>
        <Image
          src={{
            uri: logo,
            method: 'GET',
            headers: {},
            body: '',
          }}
          alt="logo"
          style={styles.logo}
        />
        <Text>Mutual</Text>
        <Text style={styles.congreso}>Congreso de Tucuman</Text>
      </View>
      <View style={styles.middleHeader}>
        <View>
          <Text style={styles.textBold}>
            ASOCIACION MUTUAL PARA EL PERSONAL
          </Text>
          <Text style={styles.textBold}>DEL PODER JUDICIAL Y TRABAJADORES</Text>
          <Text style={styles.textBold}>
            INDEPENDIENTES CONGRESO DE TUCUMAN
          </Text>
        </View>
        <View>
          <Text style={styles.textLight}>Lamadrid 456 3 A</Text>
          <Text style={styles.textBold}>San Miguel de Tucumán</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.noteContainer}>
          <View style={styles.flexCol}>{title}</View>
        </View>
        {subItem && subItem}
      </View>
    </View>
  );
};

export default HeaderPDF;
