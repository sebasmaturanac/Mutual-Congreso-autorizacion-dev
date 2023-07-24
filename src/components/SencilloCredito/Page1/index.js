import React from 'react';
import { Page, View, Text, Image, Font } from '@react-pdf/renderer';
import styles from '../styles';
import {
  TitleGenerator,
  InlineField,
  SelectVertical,
  SelectHorizontal,
} from '../utils';
import logo from '../../../assets/SencilloLogo.png';
import calles from '../graficoCuadras.png';
import backgroundPage from '../FondoSencillo.jpg';
import { formatDate } from '../../../utils/date';

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

const Page1 = ({ state, signature }) => {
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
            { justifyContent: 'space-between', width: '100%' },
          ]}
        >
          <View>
            <View style={styles.flexCol}>
              <Text style={styles.title}>Solicitud de credito personal</Text>
              <Text style={styles.subTitle}>
                Soramus S.A | CUIT 30-71487605-4 | AV. BELGRANO 1452
              </Text>
            </View>
            <View style={[styles.flexRow, { marginTop: '10pt' }]}>
              <View style={styles.flexCol}>
                {InlineField('Cuenta Nº')}
                {InlineField('Promotor')}
                {InlineField('Autorizó')}
              </View>
              <View style={styles.flexCol}>
                {InlineField('Limite de Efectivo')}
                {InlineField('Limite de Cuotas')}
              </View>
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

        {TitleGenerator('DATOS PERSONALES DEL SOLICITANTE/GARANTE')}
        <View
          style={[
            styles.wfull,
            styles.flexRow,
            { fontSize: '8pt', marginTop: '5pt' },
          ]}
        >
          <View style={[styles.wcuarto, styles.flexCol]}>
            <Text>APELLIDO</Text>
            <Text style={styles.text}>{state.apellido}</Text>
          </View>
          <View style={[styles.wcuarto, styles.flexCol]}>
            <Text>NOMBRE</Text>
            <Text style={styles.text}>{state.nombre}</Text>
          </View>
          {SelectVertical('SOL')}
          {SelectVertical('CAS')}
          {SelectVertical('DIV')}
          {SelectVertical('VIU')}
          <View style={[{ flexGrow: 1, paddingLeft: '10pt' }, styles.flexCol]}>
            <Text>GARANTE CUENTA Nº</Text>
            <Text style={[styles.text]}> </Text>
          </View>
        </View>
        <View
          style={[
            styles.wfull,
            styles.flexRow,
            { fontSize: '8pt', marginTop: '5pt' },
          ]}
        >
          <View style={[styles.wmedio, styles.flexCol]}>
            <Text>DIRECCION/CALLE</Text>
            <Text style={styles.text}>{state.domicilio.direccion}</Text>
          </View>
          <View style={[styles.wcinco, styles.flexCol]}>
            <Text>NUMERO</Text>
            <Text style={styles.text}>{state.domicilio.numero}</Text>
          </View>
          <View style={[styles.wcinco, styles.flexCol]}>
            <Text>BLOCK</Text>
            <Text style={styles.text}> </Text>
          </View>
          <View style={[styles.wcinco, styles.flexCol]}>
            <Text>PISO</Text>
            <Text style={styles.text}>{state.domicilio.piso || ' '}</Text>
          </View>
          <View style={[styles.wcinco, styles.flexCol]}>
            <Text>DEPTO</Text>
            <Text style={styles.text}>
              {state.domicilio.departamento || ' '}
            </Text>
          </View>
          <View style={[{ flexGrow: 1 }, styles.flexCol]}>
            <Text>BARRIO</Text>
            <Text style={styles.text}>{state.barrio}</Text>
          </View>
        </View>
        <View
          style={[
            styles.wfull,
            styles.flexRow,
            { fontSize: '8pt', marginTop: '5pt' },
          ]}
        >
          <View style={[styles.wdecimo, styles.flexCol]}>
            <Text>MANZ</Text>
            <Text style={styles.text}>
              {state.domicilio.manzana ? state.domicilio.manzana : ' '}
            </Text>
          </View>
          <View style={[styles.wdecimo, styles.flexCol]}>
            <Text>LOTE</Text>
            <Text style={styles.text}>
              {state.domicilio.lote ? state.domicilio.lote : ' '}
            </Text>
          </View>
          <View style={[styles.wdecimo, styles.flexCol]}>
            <Text>PROVINCIA</Text>
            <Text style={styles.text}>
              {state.provincia ? state.provincia : ' '}
            </Text>
          </View>
          <View style={[styles.wcuarto, styles.flexCol]}>
            <Text>LOCALIDAD</Text>
            {/*TODO: state.localidad} */}
            <Text style={styles.text}>
              {state.localidad ? state.localidad : ' '}
            </Text>
          </View>

          <View style={[styles.wcuarto, styles.flexCol]}>
            <Text>DEPARTAMENTO</Text>
            {/*TODO: state.departamentoProvincia} */}
            <Text style={styles.text}> </Text>
          </View>
          <View style={[{ flexGrow: 1 }, styles.flexCol]}>
            <Text>CP</Text>
            <Text style={styles.text}>{state.codigoPostal}</Text>
          </View>
        </View>
        <View
          style={[
            styles.wfull,
            styles.flexRow,
            {
              fontSize: '8pt',
              marginTop: '5pt',
              justifyContent: 'space-between',
            },
          ]}
        >
          <View style={styles.flexCol}>
            <View style={styles.flexRow}>
              {SelectHorizontal('C.U.I.T')}
              {SelectHorizontal('C.U.I.L')}
              {SelectHorizontal('C.D.I')}
            </View>
            <View style={styles.flexRow}>
              {SelectHorizontal('DNI')}
              {SelectHorizontal('LC')}
              {SelectHorizontal('LE')}
            </View>
          </View>
          <View style={[styles.wquinto, styles.flexCol]}>
            <Text>Nº DE IDENTIFICACION</Text>
            <Text style={styles.text}>{state.dni}</Text>
          </View>
          <View style={[styles.wquinto, styles.flexCol]}>
            <Text>FECHA DE NAC.</Text>
            <Text style={styles.text}>{formatDate(state.fechaNacimiento)}</Text>
          </View>
          <View style={[styles.flexCol, { paddingRight: '5pt' }]}>
            {SelectHorizontal('MASCULINO')}
            {SelectHorizontal('FEMENINO   ')}
          </View>
        </View>
        <View
          style={[
            styles.wfull,
            styles.flexRow,
            {
              fontSize: '8pt',
              marginTop: '5pt',
              justifyContent: 'space-between',
            },
          ]}
        >
          <View style={[styles.wtercio, styles.flexCol]}>
            <Text>TELEFONO PARTICULAR</Text>
            <Text style={styles.text}>
              {state.telefono1 ? state.telefono1 : ' '}
            </Text>
          </View>
          <View style={[styles.wtercio, styles.flexCol]}>
            <Text>TELEFONO DE CONTACTO</Text>
            <Text style={styles.text}>
              {state.celular1 ? state.celular1 : ' '}
            </Text>
          </View>
          <View style={[styles.wtercio, styles.flexCol]}>
            <Text>NOMBRE DEL CONTACTO</Text>
            <Text style={styles.text}>{state.nombre}</Text>
          </View>
        </View>
        <View
          style={[
            styles.wfull,
            styles.flexRow,
            {
              fontSize: '8pt',
              marginTop: '5pt',
            },
          ]}
        >
          <View style={[styles.wcuarto, styles.flexCol]}>
            <View style={[styles.flexRow, { alignItems: 'center' }]}>
              <Text>APELLIDO DEL CONYUGE</Text>
              <Text style={{ fontSize: '5pt', marginLeft: '3pt' }}>
                (SI ES CASADA EL DE SOLTERA)
              </Text>
            </View>
            <Text style={styles.text}> </Text>
          </View>
          <View style={[styles.wcuarto, styles.flexCol]}>
            <Text>NOMBRE DEL CONYUGE</Text>
            <Text style={styles.text}> </Text>
          </View>
          <View style={styles.flexCol}>
            <View style={styles.flexRow}>
              {SelectHorizontal('DNI')}
              {SelectHorizontal('L.E')}
            </View>
            <View style={styles.flexRow}>{SelectHorizontal('L.C')}</View>
          </View>
          <View
            style={[styles.wquinto, styles.flexCol, { marginLeft: '10pt' }]}
          >
            <Text>DOCUMENTO</Text>
            <Text style={styles.text}> </Text>
          </View>
          <View style={[styles.flexCol, { flexGrow: 1 }]}>
            <Text>HIJOS</Text>
            <Text style={styles.text}> </Text>
          </View>
        </View>
        {TitleGenerator(
          'DOMICILIO POSTAL',
          '(DONDE SE ENVIA LA CORRESPONDENCIA)',
        )}
        <View
          style={[
            styles.wfull,
            styles.flexRow,
            {
              fontSize: '8pt',
              marginTop: '5pt',
            },
          ]}
        >
          <View style={[styles.flexCol, { width: '60%' }]}>
            <View style={styles.flexRow}>
              <View style={[styles.wmedio, styles.flexCol]}>
                <Text>DIRECCION/CALLE</Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[{ flexGrow: 1 }, styles.flexCol]}>
                <Text>NUMERO</Text>
                <Text style={styles.text}> </Text>
              </View>
            </View>
            <View style={[styles.flexRow, { marginTop: '5pt' }]}>
              <View style={[styles.wdecimo, styles.flexCol]}>
                <Text>BLOCK</Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[styles.wdecimo, styles.flexCol]}>
                <Text>PISO</Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[styles.wdecimo, styles.flexCol]}>
                <Text>DEPTO</Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[styles.wquinto, styles.flexCol]}>
                <Text>BARRIO</Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[styles.wdecimo, styles.flexCol]}>
                <Text>MANZ</Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[styles.wdecimo, styles.flexCol]}>
                <Text>LOTE</Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[{ flexGrow: 1 }, styles.flexCol]}>
                <Text>PROVINCIA</Text>
                <Text style={styles.text}> </Text>
              </View>
            </View>
            <View style={[styles.flexRow, { marginTop: '5pt' }]}>
              <View style={[styles.wtercio, styles.flexCol]}>
                <Text>LOCALIDAD</Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[styles.wtercio, styles.flexCol]}>
                <Text>DEPARTAMENTO</Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[{ flexGrow: 1 }, styles.flexCol]}>
                <Text>CP</Text>
                <Text style={styles.text}> </Text>
              </View>
            </View>
          </View>
          <Image
            src={{
              uri: calles,
              method: 'GET',
              headers: {},
              body: '',
            }}
            style={{ marginLeft: '30pt' }}
            alt="calles"
          />
        </View>
        {TitleGenerator('DATOS LABORALES')}
        <View style={[styles.flexCol]}>
          <View
            style={[
              styles.wfull,
              styles.flexRow,
              { fontSize: '8pt', marginTop: '5pt' },
            ]}
          >
            <View style={[styles.flexRow, styles.wmedio]}>
              <Text>Nº DE C.U.I.T DE LA EMPRESA EMPLEADORA</Text>
            </View>
            <View
              style={[
                styles.flexRow,
                styles.wmedio,
                { justifyContent: 'space-between' },
              ]}
            >
              {SelectHorizontal('RELAC. DEPEND.')}
              {SelectHorizontal('COMERCIANTE')}
              {SelectHorizontal('PROFESIONAL')}
              {SelectHorizontal('JUBILADO/PENS.')}
            </View>
          </View>
          <View
            style={[
              styles.wfull,
              styles.flexRow,
              { fontSize: '8pt', marginTop: '5pt' },
            ]}
          >
            <View style={[styles.wtercio, styles.flexCol]}>
              <Text>EMPRESA EMPLEADORA/ EMPLEADOR</Text>
              <Text style={styles.text}>{state.empresa}</Text>
            </View>
            <View style={[styles.wtercio, styles.flexCol]}>
              <Text>REPARTICION / Nº BENEFICIO (JUBIL. O PENS.)</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[styles.wtercio, styles.flexCol]}>
              <Text>RAMO O ACTIVIDAD / Nº LEGAJO (EMPLEADO PUBLICO)</Text>
              <Text style={styles.text}> </Text>
            </View>
          </View>
          <View
            style={[
              styles.wfull,
              styles.flexRow,
              { fontSize: '8pt', marginTop: '5pt' },
            ]}
          >
            <View style={[styles.wmedio, styles.flexCol]}>
              <Text>DIRECCION/CALLE</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[styles.wcinco, styles.flexCol]}>
              <Text>NUMERO</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[styles.wcinco, styles.flexCol]}>
              <Text>BLOCK</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[styles.wcinco, styles.flexCol]}>
              <Text>PISO</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[styles.wcinco, styles.flexCol]}>
              <Text>DEPTO</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[{ flexGrow: 1 }, styles.flexCol]}>
              <Text>BARRIO</Text>
              <Text style={styles.text}> </Text>
            </View>
          </View>
          <View
            style={[
              styles.wfull,
              styles.flexRow,
              { fontSize: '8pt', marginTop: '5pt' },
            ]}
          >
            <View style={[styles.wdecimo, styles.flexCol]}>
              <Text>MANZ</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[styles.wdecimo, styles.flexCol]}>
              <Text>LOTE</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[styles.wdecimo, styles.flexCol]}>
              <Text>PROVINCIA</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[styles.wcuarto, styles.flexCol]}>
              <Text>LOCALIDAD</Text>
              {/*TODO: state.localidad} */}
              <Text style={styles.text}> </Text>
            </View>
            <View style={[styles.wcuarto, styles.flexCol]}>
              <Text>DEPARTAMENTO</Text>
              {/*TODO: state.departamentoProvincia} */}
              <Text style={styles.text}> </Text>
            </View>
            <View style={[{ flexGrow: 1 }, styles.flexCol]}>
              <Text>CP</Text>
              <Text style={styles.text}> </Text>
            </View>
          </View>
          <View
            style={[
              styles.wfull,
              styles.flexRow,
              { fontSize: '8pt', marginTop: '5pt' },
            ]}
          >
            <View style={[styles.wcuarto, styles.flexCol]}>
              <Text>TELEFONO</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[styles.wquinto, styles.flexCol]}>
              <Text>INTERNO</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[styles.wdecimo, styles.flexCol]}>
              <Text>FECHA INGRESO</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[styles.wcuarto, styles.flexCol]}>
              <Text>CARGO</Text>
              <Text style={styles.text}> </Text>
            </View>
            <View style={[{ flexGrow: 1 }, styles.flexCol]}>
              <Text>INGRESO MENSUAL</Text>
              <Text style={styles.text}> $ </Text>
            </View>
          </View>
          {TitleGenerator('SITUACION PATRIMONIAL')}
          <View
            style={[
              styles.wfull,
              styles.flexCol,
              { fontSize: '8pt', marginTop: '5pt' },
            ]}
          >
            <View
              style={[
                styles.wfull,
                styles.flexRow,
                {
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  marginTop: '5pt',
                },
              ]}
            >
              <Text>BIENES INMUEBLES</Text>
              <View style={styles.flexRow}>
                {SelectHorizontal('NO POSEE')}
                {SelectHorizontal('CASA')}
                {SelectHorizontal('DEPTO.')}
                {SelectHorizontal('QUINTA')}
              </View>
              <View style={[{ width: '28%' }, styles.flexRow]}>
                <Text>VALOR ESTIMADO (1)</Text>
                <Text
                  style={[{ flexGrow: 1, marginLeft: '10pt' }, styles.text]}
                >
                  $
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.wfull,
                styles.flexRow,
                {
                  fontSize: '8pt',
                  justifyContent: 'space-between',
                  marginTop: '5pt',
                },
              ]}
            >
              <View style={[styles.wcuarto, styles.flexCol]}>
                <Text>VEHICULO/MARCA</Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[styles.wquinto, styles.flexCol]}>
                <Text>MODELO</Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[styles.wdecimo, styles.flexCol]}>
                <Text>AÑO</Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[{ width: '15%' }, styles.flexCol]}>
                <Text>VALOR ESTIMADO (2)</Text>
                <Text style={styles.text}> $ </Text>
              </View>
            </View>
            <View
              style={[
                styles.wfull,
                styles.flexRow,
                {
                  fontSize: '8pt',
                  justifyContent: 'space-between',
                  marginTop: '5pt',
                },
              ]}
            >
              <View style={[styles.wcuarto, styles.flexCol]}>
                <Text> </Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[styles.wquinto, styles.flexCol]}>
                <Text> </Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[styles.wdecimo, styles.flexCol]}>
                <Text> </Text>
                <Text style={styles.text}> </Text>
              </View>
              <View style={[{ width: '15%' }, styles.flexCol]}>
                <Text>VALOR ESTIMADO (3)</Text>
                <Text style={styles.text}> $ </Text>
              </View>
            </View>
            <View
              style={[
                styles.wfull,
                styles.flexRow,
                {
                  fontSize: '8pt',
                  justifyContent: 'space-between',
                  marginTop: '5pt',
                },
              ]}
            >
              <View style={[{ width: '50%' }, styles.flexRow]}>
                <Text>OTROS BIENES (DETALLE) (4) </Text>
                <Text
                  style={[{ minWidth: '20%', marginLeft: '20pt' }, styles.text]}
                >
                  $
                </Text>
              </View>
              <View style={[{ width: '50%' }, styles.flexRow]}>
                <Text>TOTAL VALOR ESTIMADO BIENES (1+2+3+4) </Text>
                <Text
                  style={[{ flexGrow: 1, marginLeft: '65pt' }, styles.text]}
                >
                  $
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                width: '100%',
                textAlign: 'justify',
                fontSize: '5pt',
                marginTop: '6pt',
              }}
            >
              DE ACUERDO A LO DISPUESTO EN LA LEY 25.328 E INFORMADO DEL
              CONTENIDO DE LA MISMA, Y EN ESPECIAL DE LOS ARTICULOS 5, 6, 11
              INC. 1 y DE LO ALCANCES Y EFECTOS DE ESTA DECLARACION, PRESTO
              CONSENTIMIENTO A SORAMUS S.A., CUIT 30-71487605-4, CON DOMICILIO
              EN CALLE LAMADRID 456 - PISO 8VO B SAN MIGUEL DE TUCUMAN,
              PROVINCIA DE TUCUMAN, PARA REQUERIR INFORMACION RELATIVA A MI
              SOLVENCIA ECONOMICA Y DE CREDITO, CON LA FINALIDAD DE QUE SE PUEDA
              EVALUAR Y DECIDIR EL OTORGAMIENTO DE LA OPERACION QUE ESTOY
              SLICITANDO. AUTORIZO TAMBIEN A QUE ESTOS DATOS PERSONALES
              PROPORCIONADOS VOLUNTARIAMENTE, ASI COMO LOS QUE REFIEREN AL GRADO
              DE CUMPLIMIENTO DE MIS OBLIGACIONES, SEAN REGISTRADOS EN SU CASO
              POR SORAMUS S.A E INFORAMDOS A LAS EMPRESAS DE INFORMES
              COMERCAILES. DECLARO QUE LOS DATOS SON FIDEDIGNOS Y QUE LA
              PRESENTE AUTORIZA LA TRANSFERENCIA DE ESTOS, PUDIENDO SER OBJETO
              DE TRATAMIENTO Y CESION CON OTRAS ENTIDADES SIMILARES DE SEGUNDO
              CARGO.
            </Text>
          </View>
          <View>
            <View
              style={[
                styles.flexRow,
                {
                  justifyContent: 'space-between',
                  height: '55pt',
                  alignItems: 'flex-end',
                  fontSize: '8pt',
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

export default Page1;
