import React from 'react';
import { Page, View, Text, Image } from '@react-pdf/renderer';
import HeaderPDF from '../HeaderPDF';
import styles from '../styles';

const Page6 = ({ state, signature }) => {
  return (
    <Page size="A4" style={styles.page}>
      <HeaderPDF
        title={
          <View style={{ width: '260pt' }}>
            <Text style={{ fontSize: '12pt' }}>CESIÓN DE HABERES</Text>
            <Text style={{ fontSize: '12pt' }}>FORMULARIO</Text>
          </View>
        }
        subItem={
          <View style={[styles.notePageOne, { paddingHorizontal: '40pt' }]}>
            <Text style={styles.textBold}>Asociado Nº </Text>
            <Text style={styles.textBold}>
              {'Anexo           Legajo        '}
            </Text>
          </View>
        }
      />
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Text style={[styles.textTitle, { padding: '5pt' }]}>
            AUTORIZACION PARA DESCUENTOS POR PLANILLA
          </Text>
        </View>
        <View
          style={[
            styles.flexCol,
            { marginTop: '30pt', lineHeight: 1.5, paddingHorizontal: '10pt' }
          ]}
        >
          <Text>
            El que suscribe {`${state.nombre} ${state.apellido} `}DNI Nº {`${state.dni} `}argentino, mayor de
            edad, empleado en {`${state.empresa} `} con domicilio en
            {` ${state.domicilio.direccion} ${state.domicilio.numero} `} CEDE Y TRANSFIERE a favor de la ASOCIACION MUTUAL
            PARA EL PERSONAL DEL PODER JUDICIAL Y TRABAJADORES INDEPENDIENTES
            CONGRESO DE TUCUMAN, la cantidad de $………………………………….(pesos
            ………………………………………………………….) de sus haberes mensuales que percibe como
            empleado de las repartición mencionado, para cubrir el importe del
            crédito mensual otorgado y/o otorgase.-
          </Text>
          <Text>
            En consecuencia faculto a ………………………………………………. Para que ante la
            presentación de esta cesión por parte cesionario ASOCIACION MUTUAL
            PARA EL PERSONAL DEL PODER JUDICIAL Y TRABAJADORES INDEPENDIENTES
            CONGRESO DE TUCUMAN, proceda mensualmente a la retención de los
            conceptos mencionados y tomando razón del presente instrumento
            proceda a entregar la suma retenida a quien se designe en
            representación de la misma.-
          </Text>
          <Text>
            En prueba de conformidad se firma la presente cesión en la ciudad de
            ……………………………………… a los días del mes ……………………………………………… de 20……….-
          </Text>
        </View>
        <View
          style={[
            styles.flexRow,
            {
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginTop: '50pt'
            }
          ]}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Image src={signature} style={styles.signature} />
            <Text>FIRMA</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Text style={styles.text}>{state.firmaAclaracion}</Text>
            <Text>ACLARACION</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Text style={styles.text}>{state.dni}</Text>
            <Text>DNI</Text>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default Page6;
