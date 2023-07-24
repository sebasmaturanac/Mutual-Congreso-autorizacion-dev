import React from 'react';
import { Page, Image, View, Text } from '@react-pdf/renderer';
import HeaderPDF from '../HeaderPDF';
import styles from '../styles';
import { formatDate } from '../../../utils/date';
import { formatAddress } from '../../../utils/address';

const Page3 = ({ state, signature }) => {
  return (
    <Page size="A4" style={styles.page}>
      <HeaderPDF
        title={
          <View style={{ width: '220pt' }}>
            <Text style={{ fontSize: '15pt' }}>ARTICULO 36</Text>
            <Text style={{ fontSize: '15pt' }}>LEY 24.240</Text>
          </View>
        }
      />
      <View style={styles.container}>
        <View style={[styles.flexRow, { justifyContent: 'flex-end' }]}>
          <Text>{'Fecha'}</Text>
        </View>
        <View>
          <Text style={{ marginTop: '10pt', paddingHorizontal: '10pt' }}>
            Al efecto de dar cumplimiento con el Art. 36 de Ley 24.240, se deja
            manifestado que: El negocio causal del presente pagare es un
            contrato de mutuo
          </Text>
        </View>
        <View style={[styles.flexRow, { justifyContent: 'space-between' }]}>
          <View style={[styles.flexCol, { width: '49%' }]}>
            {FancyLabel('FECHA')}
            {FancyLabel('MONTO DE CREDITO')}
            {FancyLabel('ENTREGA')}
            {FancyLabel('CANTIDAD DE CUOTAS')}
            {FancyLabel('VENCIMIENTO 1º CUOTA')}
            {FancyLabel('VENCIMIENTO ÚLTIMA CUOTA')}
            {FancyLabel('TASA EFECTIVA ANUAL')}
          </View>
          <View style={[styles.flexCol, { width: '49%' }]}>
            {FancyLabel('SISTEMA DE AMORTIZACION DEL CAPITAL')}
            {FancyLabel('FORMA DE CANCELACION DE INTERESES')}
            {FancyLabel('TOTAL DE INTERESES')}
            {FancyLabel('GASTOS ADMINISTRATIVOS POR CUOTAS')}
          </View>
        </View>
        <View>
          <Text
            style={{
              width: '100%',
              borderRadius: '10pt',
              backgroundColor: 'silver',
              textAlign: 'center',
              marginTop: '10pt',
              paddingVertical: '3pt',
            }}
          >
            DATOS DEL SOLICITANTE / GARANTE
          </Text>
        </View>
        <View style={[styles.flexCol, { paddingHorizontal: '5pt' }]}>
          <View style={[styles.row, { marginTop: '3pt' }]}>
            <Text style={styles.label}>APELLIDO Y NOMBRE</Text>
            <Text
              style={styles.text}
            >{`${state.nombre} ${state.apellido}`}</Text>
            <Text style={styles.label}>DNI:</Text>
            <Text style={styles.text}> {state.dni}</Text>
            <Text style={styles.label}>FECHA DE NAC.:</Text>
            <Text style={styles.text}>{formatDate(state.fechaNacimiento)}</Text>
          </View>
          <View style={[styles.row, { marginTop: '5pt' }]}>
            <Text style={styles.label}>TELEFONO:</Text>
            <Text style={styles.text}> {state.telefono1}</Text>
            <Text style={styles.label}>DOMICILIO:</Text>
            <Text style={[styles.text, { flexGrow: 1 }]}>
              {formatAddress(state.domicilio)}
            </Text>
          </View>
          <View style={[styles.row, { marginTop: '5pt' }]}>
            <Text style={styles.label}>E-MAIL:</Text>
            <Text style={[styles.text, { flexGrow: 1 }]}>{state.email}</Text>
          </View>
          <View style={[styles.row, { marginTop: '5pt' }]}>
            <Text style={styles.label}>PROFESION:</Text>
            <Text style={styles.text}> {state.profesion}</Text>
            <Text style={styles.label}>ESTADO CIVIL:</Text>
            <Text style={[styles.text, { flexGrow: 1 }]}>
              {state.estadoCivil}
            </Text>
          </View>
          <View
            style={[
              styles.flexCol,
              { height: '350pt', justifyContent: 'center' },
            ]}
          >
            <View
              style={[
                styles.flexRow,
                {
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                },
              ]}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Image src={signature} style={styles.signature} />
                <Text>FIRMA</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.text}>{state.firmaAclaracion}</Text>
                <Text>ACLARACION</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.text}>{state.dni}</Text>
                <Text>DNI</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
};

const FancyLabel = (label) => {
  const radius = '10pt';
  return (
    <View
      style={[
        styles.flexRow,
        {
          width: '100%',
          border: '2pt solid black',
          marginTop: '5pt',
          borderRadius: radius,
        },
      ]}
    >
      <View
        style={{
          width: '60%',
          padding: '3pt',
          borderRight: '2pt solid black',
          paddingHorizontal: '5pt',
          fontSize: '10pt',
          backgroundColor: 'silver',
          borderTopLeftRadius: radius,
          borderBottomLeftRadius: radius,
        }}
      >
        <Text style={{ width: '90%' }}>{label}</Text>
      </View>
    </View>
  );
};

export default Page3;
