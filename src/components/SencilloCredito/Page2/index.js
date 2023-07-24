import React from 'react';
import { Page, View, Text, Image, Font } from '@react-pdf/renderer';
import styles from '../styles';
import logo from '../../../assets/SencilloLogo.png';
import backgroundPage from '../FondoSencillo.jpg';

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

const Page2 = () => (
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
            <Text style={styles.title}>PAGARE A LA VISTA</Text>
            <Text style={styles.subTitle}>
              Soramus S.A | CUIT 30-71487605-4 | AV. BELGRANO 1452
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
        style={[styles.flexCol, { fontSize: '14pt', textAlign: 'justify' }]}
      >
        <View style={[styles.flexCol, { marginTop: '20pt', lineHeight: 1.3 }]}>
          <Text style={{ alignSelf: 'flex-end', marginBottom: '30pt' }}>
            Por $ ………………………………………………………………
          </Text>
          <Text>
            San Miguel de Tucumán …………………… de ……………………… de 20……………….. A la vista
            y sin protesto pagaré/mos a ………………………………………… la suma de pesos $
            ……………………………………………………………………………………………
          </Text>
          <Text>
            Por igual valor recibido a mi/nuestra entera satisfacción, dejando
            expresa constancia en mi/nuestro carácter de librador/es que de
            conformidad con lo previsto en el art.36 del decreto ley 5965/63,
            amplio/amos el plazo de presentación de este pagaré hasta (6) años
            desde la fecha de su libramiento. A partir de la fecha de
            libramiento y hasta la fecha de su efectivo pago, la cantidad
            indicada devengará intereses compensatorios a una tasa del
            …………………….% [……………………………………………………CON ……………………………………………………../100 por
            ciento] A partir de su presentación al cobro sin que la deuda
            hubiese sido cancelada, el capital más los intereses y gastos
            impagos devengará una tasa de interés punitorio increméntale del
            ………….% [………………………………………………………………CON ……………………………………………………../100 por
            ciento] efectiva mensual [TEM], hasta la fecha de su efectivo pago.
            ……………………………………………………………………………………………… queda facultada para ceder el
            presente pagaré en forma total o parcial sin necesidad de
            notificación por acto público, en los términos de los artículos 70 y
            72 de la Ley 24.441. Se establece que el lugar de pago será en San
            Miguel de TUCUMAN
          </Text>
        </View>
      </View>
      <View style={[styles.flexRow, { justifyContent: 'space-around' }]}>
        <View
          style={[
            styles.flexCol,
            { width: '40%', marginTop: '30pt', alignItems: 'center' },
          ]}
        >
          <View
            style={{
              marginTop: '30pt',
              alignItems: 'center',
              fontSize: '12pt',
            }}
          >
            <Text>.........................................</Text>
            <Text>Por Aval</Text>
          </View>
          <View
            style={{
              marginTop: '30pt',
              alignItems: 'center',
              fontSize: '12pt',
            }}
          >
            <Text>.........................................</Text>
            <Text>ACLARACIÓN</Text>
          </View>
          <View
            style={{
              marginTop: '30pt',
              alignItems: 'center',
              fontSize: '12pt',
            }}
          >
            <Text>.........................................</Text>
            <Text>TIPO Y Nº DE DOCUMENTO</Text>
          </View>
          <View
            style={[
              styles.flexRow,
              { fontSize: '10pt', marginTop: '40pt', width: '80%' },
            ]}
          >
            <Text>Domicilio:</Text>
            <Text style={[styles.text, { flexGrow: 1 }]}></Text>
          </View>
          <View
            style={[
              styles.flexRow,
              { fontSize: '10pt', marginTop: '10pt', width: '80%' },
            ]}
          >
            <Text>Localidad:</Text>
            <Text style={[styles.text, { flexGrow: 1 }]}></Text>
          </View>
          <View
            style={[
              styles.flexRow,
              { fontSize: '10pt', marginTop: '10pt', width: '80%' },
            ]}
          >
            <Text>Teléfono:</Text>
            <Text style={[styles.text, { flexGrow: 1 }]}></Text>
          </View>
        </View>
        <View
          style={[
            styles.flexCol,
            { width: '40%', marginTop: '30pt', alignItems: 'center' },
          ]}
        >
          <View
            style={{
              marginTop: '30pt',
              alignItems: 'center',
              fontSize: '12pt',
            }}
          >
            <Text>.........................................</Text>
            <Text>Firma Librador</Text>
          </View>
          <View
            style={{
              marginTop: '30pt',
              alignItems: 'center',
              fontSize: '12pt',
            }}
          >
            <Text>.........................................</Text>
            <Text>ACLARACIÓN</Text>
          </View>
          <View
            style={{
              marginTop: '30pt',
              alignItems: 'center',
              fontSize: '12pt',
            }}
          >
            <Text>.........................................</Text>
            <Text>TIPO Y Nº DE DOCUMENTO</Text>
          </View>
          <View
            style={[
              styles.flexRow,
              { fontSize: '10pt', marginTop: '40pt', width: '80%' },
            ]}
          >
            <Text>Domicilio:</Text>
            <Text style={[styles.text, { flexGrow: 1 }]}></Text>
          </View>
          <View
            style={[
              styles.flexRow,
              { fontSize: '10pt', marginTop: '10pt', width: '80%' },
            ]}
          >
            <Text>Localidad:</Text>
            <Text style={[styles.text, { flexGrow: 1 }]}></Text>
          </View>
          <View
            style={[
              styles.flexRow,
              { fontSize: '10pt', marginTop: '10pt', width: '80%' },
            ]}
          >
            <Text>Teléfono:</Text>
            <Text style={[styles.text, { flexGrow: 1 }]}></Text>
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

export default Page2;
