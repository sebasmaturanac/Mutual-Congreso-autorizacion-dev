import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import HeaderPDF from '../HeaderPDF';
import styles from '../styles';

const Page4 = () => {
  return (
    <Page size="A4" style={styles.page}>
      <HeaderPDF
        title={
          <View style={{ width: '220pt' }}>
            <Text style={{ fontSize: '15pt' }}>PAGARÉ</Text>
            <Text style={{ fontSize: '15pt' }}>A LA VISTA</Text>
          </View>
        }
      />
      <View style={[styles.container, { fontSize: '15pt' }]}>
        <View style={[styles.flexRow, { justifyContent: 'flex-end' }]}>
          <Text>Por $..........................................</Text>
        </View>
        <View style={[styles.flexCol, { marginTop: '20pt' }]}>
          <Text style={{ marginLeft: '20pt', lineHeight: 1.3 }}>
            San Miguel de Tucumán ………… de ……………… de 20……….. A la vista y sin
            protesto pagaré a ………………………………………….. o a su orden la suma de pesos $
            …………………………………… por igual valor recibido a mi/nuestra entera
            satisfacción, dejando expresa constancia en mi/nuestro carácter de
            librador/es que de conformidad con lo previsto en el art.36 del
            decreto ley 5965/63, amplio/amos el plazo de presentación de este
            pagaré hasta (6) años desde la fecha de su libramiento. A partir de
            la fecha de libramiento y hasta la fecha de su efectivo pago, la
            cantidad indicada devengará intereses compensatorios a una tasa del
            ………….% [……………………CON ……………………../100 por ciento] A partir de su
            presentación al cobro sin que la deuda hubiese sido cancelada, el
            capital más los intereses y gastos impagos devengará una tasa de
            interés punitorio increméntale del ………….% [……………………CON
            ……………………../100 por ciento] efectiva mensual [TEM], hasta la fecha de
            su efectivo pago. ……………………………… queda facultada para ceder el
            presente pagaré en forma total o parcial sin necesidad de
            notificación por acto público, en los términos de los artículos 70 y
            72 de la Ley 24.441. Se establece que el lugar de pago será en San
            Miguel de TUCUMAN
          </Text>
          <View style={[styles.flexRow, { justifyContent: 'space-around' }]}>
            <View
              style={[
                styles.flexCol,
                { width: '40%', marginTop: '30pt', alignItems: 'center' },
              ]}
            >
              <View style={{ marginTop: '30pt', alignItems: 'center' }}>
                <Text>.........................................</Text>
                <Text>Por Aval</Text>
              </View>
              <View style={{ marginTop: '30pt', alignItems: 'center' }}>
                <Text>.........................................</Text>
                <Text>ACLARACIÓN</Text>
              </View>
              <View style={{ marginTop: '30pt', alignItems: 'center' }}>
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
              <View style={{ marginTop: '30pt', alignItems: 'center' }}>
                <Text>Firma Librador</Text>
              </View>
              <View style={{ marginTop: '30pt', alignItems: 'center' }}>
                <Text>.........................................</Text>
                <Text>ACLARACIÓN</Text>
              </View>
              <View style={{ marginTop: '30pt', alignItems: 'center' }}>
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
      </View>
    </Page>
  );
};

export default Page4;
