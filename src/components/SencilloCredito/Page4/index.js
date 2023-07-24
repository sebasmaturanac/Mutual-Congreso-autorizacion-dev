import React from 'react';
import { Page, View, Text, Image, Font } from '@react-pdf/renderer';
import styles from '../styles';
import { TitleGenerator } from '../utils';
import logo from '../../../assets/SencilloLogo.png';
import backgroundPage from '../FondoSencillo.jpg';
import { formatDate } from '../../../utils/date';
import { formatAddress } from '../../../utils/address';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  fontWeight: 500,
});
Font.register({
  family: 'Oswald',
  src:
    'https://fonts.gstatic.com/s/oswald/v31/TK3_WkUHHAIjg75cFRf3bXL8LICs169vsUZiYySUhiCXAA.woff',
  fontWeight: 300,
});

const Page4 = ({ state, signature }) => {
  return (
    <Page size="A4" style={[styles.page, { fontFamily: 'Oswald' }]}>
      <Image
        src={{
          uri: backgroundPage,
          method: 'GET',
          headers: {},
          body: '',
        }}
        style={styles.pageBackground}
        alt="logo"
      />
      <View style={{ width: '100%', backgroundColor: 'red', height: '20pt' }} />
      <View style={{ paddingHorizontal: '30pt' }}>
        <View
          style={[
            styles.flexRow,
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              borderBottom: '2pt #0C6DB1 solid',
            },
          ]}
        >
          <View>
            <View style={styles.flexCol}>
              <Text style={styles.title}>ARTÍCULO 36 - LEY 24.240</Text>
              <Text style={styles.subTitle}>
                Soramus S.A | CUIT 30-71487605-4 | AV. BELGRANO 1452
              </Text>
              <Text style={{ fontSize: '10pt', marginTop: '20pt' }}>
                FECHA: .......... / .......... / ..................
              </Text>
            </View>
          </View>
          <Image
            src={{
              uri: logo,
              method: 'GET',
              headers: {},
              body: '',
            }}
            style={{ width: '100pt', height: '80pt' }}
            alt="logo"
          />
        </View>
        <View
          style={[
            styles.flexCol,
            {
              marginTop: '5pt',
              lineHeight: 1.3,
              fontSize: '12pt',
              textAlign: 'justify',
            },
          ]}
        >
          <Text>
            Al efecto de dar cumplimiento con el Art. 36 de Ley 24.240, 5 deja
            manifestado que: El negocio causal del presenta par es un contrato
            de mutuo.
          </Text>
        </View>
        <View style={[styles.flexRow, { paddingBottom: '20pt' }]}>
          <View
            style={[
              styles.flexCol,
              {
                marginTop: '10pt',
                width: '45%',
                justifyContent: 'space-between',
              },
            ]}
          >
            <View style={styles.flexCol}>{GenerateBubble(45, 'FECHA')}</View>
            <View style={styles.flexCol}>
              {GenerateBubble(45, 'MONTO DE CREDITO')}
            </View>
            <View style={styles.flexCol}>{GenerateBubble(45, 'ENTREGA')}</View>
            <View style={styles.flexCol}>
              {GenerateBubble(45, 'CANTIDAD DE CUOTAS')}
            </View>
            <View style={styles.flexCol}>
              {GenerateBubble(45, 'VTO 1º CUOTA')}
            </View>
            <View style={styles.flexCol}>
              {GenerateBubble(45, 'VTO DE ULTIMA CUOTA')}
            </View>
            <View style={styles.flexCol}>
              {GenerateBubble(45, 'TASA EFECTIVA ANUAL')}
            </View>
          </View>
          <View style={[styles.flexCol, { marginTop: '10pt', width: '45%' }]}>
            <View style={styles.flexCol}>
              {GenerateBubble(65, 'SISTEMA DE AMORTIZACION DEL CAPITAL')}
            </View>
            <View style={styles.flexCol}>
              {GenerateBubble(65, 'FORMA DE CANCELACION DE INTERESES')}
            </View>
            <View style={styles.flexCol}>
              {GenerateBubble(65, 'TOTAL DE INTERESES')}
            </View>
            <View style={styles.flexCol}>
              {GenerateBubble(65, 'GASTOS ADMINISTRATIVOS')}
            </View>
          </View>
        </View>
        <View>
          {TitleGenerator('DATOS DEL SOLICITANTE / GARANTE')}
          <View style={[styles.flexCol, { fontSize: '10pt' }]}>
            <View style={[styles.flexRow, { marginTop: '3pt' }]}>
              <Text style={styles.label}>APELLIDO Y NOMBRE</Text>
              <Text
                style={[styles.text, { flexGrow: 1, marginLeft: '10pt' }]}
              >{`${state.nombre} ${state.apellido}`}</Text>
            </View>
            <View style={[styles.flexRow, { marginTop: '3pt' }]}>
              <Text style={styles.label}>DNI:</Text>
              <Text style={[styles.text, { flexGrow: 1, marginLeft: '10pt' }]}>
                {' '}
                {state.dni}
              </Text>
              <Text style={styles.label}>FECHA DE NAC.:</Text>
              <Text style={[styles.text, { flexGrow: 1, marginLeft: '10pt' }]}>
                {formatDate(state.fechaNacimiento)}
              </Text>
            </View>
            <View style={[styles.flexRow, { marginTop: '5pt' }]}>
              <Text style={styles.label}>TELEFONO:</Text>
              <Text style={[styles.text, { flexGrow: 1, marginLeft: '10pt' }]}>
                {' '}
                {state.telefono1}
              </Text>
              <Text style={styles.label}>DOMICILIO:</Text>
              <Text style={[styles.text, { flexGrow: 1, marginLeft: '10pt' }]}>
                {formatAddress(state.domicilio)}
              </Text>
            </View>
            <View style={[styles.flexRow, { marginTop: '5pt' }]}>
              <Text style={styles.label}>E-MAIL:</Text>
              <Text style={[styles.text, { flexGrow: 1 }]}>{state.email}</Text>
            </View>
            <View style={[styles.flexRow, { marginTop: '5pt' }]}>
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
                { height: '150pt', justifyContent: 'center' },
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
      </View>
      <View
        style={{
          width: '97.5%',
          backgroundColor: '#0C6DB1',
          height: '100pt',
          bottom: -70,
          position: 'absolute',
          borderTopLeftRadius: '50pt',
          borderTopRightRadius: '50pt',
        }}
      />
    </Page>
  );
};

const GenerateBubble = (width, label) => (
  <View style={[styles.flexRow, { fontSize: '10pt', marginTop: '10pt' }]}>
    <Text
      style={{
        width: `${width}%`,
        borderRadius: '50pt',
        border: '1pt solid red',
        backgroundColor: 'silver',
        paddingLeft: '10pt',
        paddingTop: '3pt',
      }}
    >
      {label}
    </Text>
    <Text style={[{ flexGrow: 1, marginLeft: '5pt' }, styles.text]}> </Text>
  </View>
);

export default Page4;
