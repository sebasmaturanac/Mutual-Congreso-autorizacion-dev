import React from 'react';
import { Page, View, Text, Image, Font } from '@react-pdf/renderer';
import styles from '../styles';
import logo from '../../../assets/SencilloLogo.png';
import backgroundPage from '../FondoSencillo.jpg';
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

const Page6 = ({ state, signature }) => {
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
            SEXTA: Mora Automática: la falta de pago de una sola cuota a su
            vencimiento producirá la mora de pleno derecho. En caso de mora,
            todas las obligaciones serán consideradas como de plazo vencido y
            exigible por el total de la deuda, la cual pasara a considerarse
            como deuda vencida. La regularización de uno o más pagos no
            producirá la rehabilitación de los plazos sino que se considerará
            pago a cuenta de deuda vencida.-
          </Text>
          <Text style={{ marginTop: '20pt' }}>
            SEXTA: Mora Automática: la falta de pago de una sola cuota a su
            vencimiento producirá la mora de pleno derecho. En caso de mora,
            todas las obligaciones serán consideradas como de plazo vencido y
            exigible por el total de la deuda, la cual pasara a considerarse
            como deuda vencida. La regularización de uno o más pagos no
            producirá la rehabilitación de los plazos sino que se considerará
            pago a cuenta de deuda vencida.-
          </Text>
          <Text style={{ marginTop: '20pt' }}>
            SEPTIMA: LA MUTUARIA incurrirá automáticamente en mora antes del
            vencimiento del plazo convenido en la cláusula segunda, autorizando
            a LA MUTUANTE a reclamar la restitución de lo adeudado, en
            cualquiera de los siguientes supuestos: a.- Solicitud de concurso
            preventivo o su propia quiebra o cuando esta le fuere solicitada por
            un tercero. - b. traba de embargo sobre sus bienes o cuentas
            bancarias.- C.- ser objeto de intervención judicial o
            administrativa: suspensión intervención, inhabilitación o cualquier
            otra medida adoptada por el BCRA respecto a la institución
            interviniente.-
          </Text>
          <Text style={{ marginTop: '20pt' }}>
            OCTAVA: Este contrato reviste el carácter de título ejecutivo
            conforme lo dispuesto por el Art. 485 inc. 2 del Código de
            Procedimientos en lo Civil y Comercial de Tucumán.-
          </Text>
          <Text style={{ marginTop: '20pt' }}>
            NOVENA: Gastos e Impuestos: todos los gastos que se originen en
            virtud de este mutuo, incluidos sellado de contrato, y cualquier
            otro impuesto que pudiere gravarlo, serán a cargo en forma exclusiva
            de LA MUTUARIA.-
          </Text>
          <Text style={{ marginTop: '20pt' }}>
            DECIMA: las partes constituyen domicilios especiales en los
            indicados en el encabezamiento del presente contrato, jurisdicción
            de los Tribunales Ordinarios de la Ciudad de San Miguel de Tucumán.-
            En la ciudad de San Miguel de Tucumán, a los ______________________
            días del mes de____________ de____________________ se firman en
            prueba de conformidad, dos ejemplares de un mismo tenor y a un solo
            efecto.-
          </Text>
        </View>
        <View style={[styles.flexRow, { justifyContent: 'space-around' }]}>
          <View
            style={[
              styles.flexCol,
              { width: '40%', marginTop: '10pt', alignItems: 'center' },
            ]}
          >
            <View
              style={{
                marginTop: '10pt',
                alignItems: 'center',
                fontSize: '12pt',
              }}
            >
              <Text>
                .........................................................................................
              </Text>
              <Text>FIRMA MUTUANTE</Text>
            </View>
          </View>
          <View
            style={[
              styles.flexCol,
              { width: '40%', marginTop: '10pt', alignItems: 'center' },
            ]}
          >
            <View
              style={{
                marginTop: '10pt',
                alignItems: 'center',
                fontSize: '12pt',
              }}
            >
              <Image src={signature} style={styles.signature} />
              <Text>Firma Librador</Text>
            </View>
            <View
              style={{
                marginTop: '10pt',
                alignItems: 'center',
                fontSize: '12pt',
              }}
            >
              <Text style={styles.text}>{state.firmaAclaracion}</Text>
              <Text>ACLARACIÓN</Text>
            </View>
            <View
              style={{
                marginTop: '10pt',
                alignItems: 'center',
                fontSize: '12pt',
              }}
            >
              <Text style={styles.text}>{formatAddress(state.domicilio)}</Text>
              <Text>DIRECCION</Text>
            </View>
            <View
              style={{
                marginTop: '10pt',
                alignItems: 'center',
                fontSize: '12pt',
              }}
            >
              <Text>{state.dni}</Text>
              <Text>DNI</Text>
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

export default Page6;
