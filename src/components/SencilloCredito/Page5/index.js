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

const Page5 = () => (
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
            <Text style={styles.title}>CONTRATO MUTUO</Text>
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
        style={[
          styles.flexCol,
          {
            marginTop: '20pt',
            lineHeight: 1.3,
            fontSize: '12pt',
            textAlign: 'justify',
          },
        ]}
      >
        <Text style={{ marginTop: '20pt' }}>
          Entre __________________________________, representada en este acto
          por, ________________________________, DNI ________________, con
          domicilio en _________________________________________, de la ciudad
          de San Miguel de Tucumán, Provincia de Tucumán, con facultades
          necesarias y suficientes para suscribir el presente contrato, en
          adelante LA MUTUANTE por una parte y
          ____________________________________________________,
          DNI___________________, con domicilio en
          ________________________________________________, de la ciudad de San
          Miguel de Tucumán, Provincia de Tucumán, en adelante LA MUTUARIA por
          la otra, convienen en ________________________ celebrar el presente
          contrato de Mutuo, sujeto a las clausulas y condiciones siguientes:
        </Text>
        <Text style={{ marginTop: '20pt' }}>
          PRIMERA: LA MUTUANTE da y entrega en este acto un prestamos en fondos
          propios a LA MUTUARIA por la suma de $ ………………. - (pesos
          ________________________________________ 00/100), que LA MUTUARIA
          recibe en este acto de plena de conformidad, sirviendo el presente de
          formal recibo y carta de adeudo. Intereses: la suma mencionada
          devengara a favor de LA MUTUANTE un interés compensatorio de _____ %
          TNA + IVA.-{' '}
        </Text>
        <Text style={{ marginTop: '20pt' }}>
          SEGUNDA: LA MUTUARIA se obliga a cancelar el préstamo recibido,
          mediante el pago de pagaré o de los pagarés suscriptos,
          correspondientes a las cuotas pactadas.{' '}
        </Text>
        <Text style={{ marginTop: '20pt' }}>
          TERCERA: En caso de falta de pago, en tiempo y forma de alguna de las
          obligaciones asumidas en este contrato el importe adeudado devengara
          un interés moratorio equivalente al que perciba el Banco de la Nación
          Argentina en esta moneda para sus operaciones de crédito persona, con
          mas un interés punitorio adicional de ………. % mensual desde la mora y
          hasta el efecto ivo pago, ambos tipo de interés capitalizables
          mensualmente.-{' '}
        </Text>
        <Text style={{ marginTop: '20pt' }}>
          CUARTA: En el supuesto que en virtud de cualquier precepto legal,
          administrativo, regulatorio, impositivo o de mercado se produjeren
          variaciones que afectaren la ecuación económica del presente contrato;
          o en el caso que la variación del índice de Precios al Consumidor
          Interanual, es decir de los 12 (doce) meses inmediatos anteriores al
          vencimiento de cada cuota, supere el 40% (cuarenta por ciento), según
          datos publicados por el Instituto Nacional de Estadísticas y Censos de
          la Republica Argentina (INDEC), la tasa de interés aplicable a las
          cuotas a abonar aumentara un punto porcentual por cada punto
          porcentual que el Indice de Precios al Consumidor Interanual supere el
          35% (treinta y cinco por ciento). En caso de que esto suceda, se
          formulara la deuda y consecuentemente las cuotas a abonar en concepto
          de la misma, teniendo EL MUTUARIO la facultad de optar por: 1) Aumento
          de la cuota mensual; 2) aumento de la cantidad de cuotas de
          financiación; 3) cancelación anticipada de la operación por pago de
          capital adeudado mas 3% (tres por ciento) en concepto de gastos.-
        </Text>
        <Text style={{ marginTop: '20pt' }}>
          QUINTA: en caso de mora, LA MUTUANTE podrá optar por ejecutar el
          presente contrato de mutuo o la ejecución de los valores entregados
          por LA MUTUARIA y no abonados, renunciando en forma expresa a oponer
          excepciones legitimas al momento de la intimación de pago con la
          salvedad de la defensa de pago parcial o total debidamente
          documentado.-
        </Text>
      </View>
      {/* <View
        style={[
          styles.flexCol,
          {
            alignItems: "center",
            marginTop: "50pt",
            width: "30%",
            alignSelf: "flex-end",
            fontSize: "12pt"
          }
        ]}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Image src={signature} style={styles.signature} />
          <Text>FIRMA</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30pt"
          }}
        >
          <Text style={styles.text}>{state.firmaAclaracion}</Text>
          <Text>ACLARACION</Text>
        </View>
      </View> */}
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

export default Page5;
