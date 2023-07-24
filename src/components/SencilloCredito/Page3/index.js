import React from 'react';
import { Page, View, Text, Image, Font } from '@react-pdf/renderer';
import styles from '../styles';
import logo from '../../../assets/SencilloLogo.png';
import backgroundPage from '../FondoSencillo.jpg';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  fontWeight: 500
});
Font.register({
  family: 'Oswald',
  src:
    'https://fonts.gstatic.com/s/oswald/v31/TK3_WkUHHAIjg75cFRf3bXL8LICs169vsUZiYySUhiCXAA.woff',
  fontWeight: 300
});

const Page3 = ({ state, signature }) => (
  <Page size="A4" style={[styles.page, { fontFamily: 'Oswald' }]}>
    <Image
      src={{
        uri: backgroundPage,
        method: 'GET',
        headers: {},
        body: ''
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
            borderBottom: '2pt #0C6DB1 solid'
          }
        ]}
      >
        <View>
          <View style={styles.flexCol}>
            <Text style={styles.title}>COMUNICACIÓN AL CLIENTE</Text>
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
            body: ''
          }}
          style={{ width: '100pt', height: '80pt' }}
          alt="logo"
        />
      </View>
      <View
        style={[
          styles.flexCol,
          {
            marginTop: '20pt',
            lineHeight: 1.3,
            fontSize: '14pt',
            textAlign: 'justify'
          }
        ]}
      >
        <Text>Estimado cliente:</Text>
        <Text>
          Nos es grato comunicarnos con usted para darle la bienvenida como un
          cliente de Sencillo Créditos. Esta línea de créditos ha sido
          especialmente creada para atender las necesidades de todas las
          personas que posean un CBU. Siendo una de sus ventajas principales el
          débito directo de la cuota mensual de su caja de ahorro del banco al
          que pertenece, al momento del cobro de sus haberes.
        </Text>
        <Text style={{ marginTop: '20pt' }}>
          El pago de todas las cuotas se realizará a través del servicio de
          debito directo en cuenta, sirviendo la presente de formal adhesión,
          conforma a la Com. A 2559 y modificatorias del BCRA. Renunciando desde
          ya a solicitar unilateralmente la resoculicio0n de la presente
          autorización.
        </Text>
        <Text style={{ marginTop: '20pt' }}>
          Todo importe cobrado erróneamente será reintegrado dentro del cinco
          días hábiles siguientes al momento de la presentación del reclamo por
          parte del deudor inclusive usted puede llamar al 0810 555 4286 para
          realizar el reclamo pertinente.{' '}
        </Text>
        <Text style={{ marginTop: '20pt' }}>
          Yo ...................................................................
          dejo constancia que en caso de imposibilidad transitoria o emergente
          en el débito, me comprometo a abonar el saldo deudor, en el domicilio
          de la entidad sito en calle……………………………………………………………………………………….. o en su
          defecto a través de la red de cobranza Pago Fácil, Rapipago, Pago mis
          Cuentas o bien a donde en un futuro la entidad indique de modo
          fehaciente.
        </Text>
      </View>
      <View
        style={[
          styles.flexCol,
          {
            alignItems: 'center',
            marginTop: '50pt',
            width:'30%',
            alignSelf: 'flex-end',
            fontSize:'12pt'
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
            alignItems: 'center',
            marginTop:'30pt'
          }}
        >
          <Text style={styles.text}>{state.firmaAclaracion}</Text>
          <Text>ACLARACION</Text>
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
        borderTopRightRadius: '50pt'
      }}
    />
  </Page>
);

export default Page3;
