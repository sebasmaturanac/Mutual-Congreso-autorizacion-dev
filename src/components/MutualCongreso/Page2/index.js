import React from 'react';
import { Page, Image, View, Text } from '@react-pdf/renderer';
import HeaderPDF from '../HeaderPDF';
import styles from '../styles';
import { formatDate } from '../../../utils/date';
import { formatAddress } from '../../../utils/address';

const Page2 = ({ state, signature }) => {
  return (
    <Page size="A4" style={styles.page}>
      <HeaderPDF
        title={
          <>
            <Text style={{ fontSize: '13pt' }}>DECLARACION</Text>
            <Text style={{ fontSize: '13pt' }}>JURADA</Text>
            <Text style={{ fontSize: '13pt' }}>DEL ASOCIADO</Text>
          </>
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
        <View style={styles.row}>
          <Text style={styles.label}>Apellido y Nombre del Asociado </Text>
          <Text style={styles.text}>{`${state.nombre} ${state.apellido}`}</Text>
          <Text style={styles.label}>LC-LE-DNI Nº:</Text>
          <Text style={styles.text}> {state.dni}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Lugar de Nacimiento </Text>
          <Text style={styles.text}>{`${state.lugarNacimiento}`}</Text>
          <Text style={styles.label}>Fecha de Nacimiento</Text>
          <Text style={styles.text}>{formatDate(state.fechaNacimiento)}</Text>
          <Text style={styles.label}>Nacionalidad</Text>
          <Text style={styles.text}> {state.nacionalidad}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Estado Civil</Text>
          <Text style={styles.text}>{`${state.estadoCivil}`}</Text>
          <Text style={styles.label}>Dependencia donde presta servicios</Text>
          <Text style={styles.text}> {state.empresa}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Cargo que desempeña</Text>
          <Text style={styles.text}>{`${state.seccion}`}</Text>
          <Text style={styles.label}>Fecha de Ingreso</Text>
          <Text style={styles.text}>
            {formatDate(state.fechaEmpresaIngreso)}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Domicilio</Text>
          <Text style={[styles.text, { minWidth: '300pt' }]}>
            {formatAddress(state.domicilio)}
          </Text>
          <Text style={styles.label}>Mail</Text>
          <Text style={styles.text}> {state.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Numero Telefonico</Text>
          <Text style={styles.text}>{`${state.telefono1}`}</Text>
          <Text style={styles.label}>Numero Telefonico</Text>
          <Text style={styles.text}>.........................</Text>
          <Text style={styles.label}>Numero Fijo</Text>
          <Text>.........................</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Grupo familiar</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>1</Text>
          <Text style={{ marginRight: '10pt' }}>
            ...............................................................
          </Text>
          <Text style={styles.label}>2</Text>
          <Text>
            ..........................................................................................
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>3</Text>
          <Text style={{ marginRight: '10pt' }}>
            ...............................................................
          </Text>
          <Text style={styles.label}>4</Text>
          <Text>
            ..........................................................................................
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>5</Text>
          <Text>
            ....................................................................................................
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Domicilio Laboral</Text>
          <Text style={{ marginRight: '10pt' }}>
            ..............................................
          </Text>
          <Text style={styles.label}>telefono:</Text>
          <Text>
            ..................................................................
          </Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.flexCol, { minWidth: '255pt' }]}>
            <View style={[styles.row, { marginTop: '3pt' }]}>
              <Text style={styles.labelCheck}>PERMANENTE</Text>
              <Text
                style={{
                  border: '2pt solid black',
                  width: '60pt',
                  height: '14pt',
                }}
              ></Text>
            </View>
            <View style={[styles.row, { marginTop: '3pt' }]}>
              <Text style={styles.labelCheck}>TRANSITORIO</Text>
              <Text
                style={{
                  border: '2pt solid black',
                  width: '60pt',
                  height: '14pt',
                }}
              ></Text>
            </View>
            <View style={[styles.row, { marginTop: '3pt' }]}>
              <Text style={styles.labelCheck}>CONTRATADO</Text>
              <Text
                style={{
                  border: '2pt solid black',
                  width: '60pt',
                  height: '14pt',
                }}
              ></Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Cedula de identidad Nº</Text>
            <Text>...........................................</Text>
          </View>
        </View>
        <View style={[styles.row, { marginTop: '3pt' }]}>
          <Text style={[styles.textTitle, { fontSize: '10pt' }]}>
            Autorizacion de descuento por planilla y otros medios de cobro
          </Text>
          <Text style={{ fontSize: '8pt' }}>
            (Debito bancario, rapipago, pago facil, pim, todo pago, tarjetas de
            credito, etc)
          </Text>
        </View>
        <Text style={{ fontSize: '10pt' }}>
          Por la presente ……………………. DNI Nº ………………………… acepto pertenecer como
          asociado y manifiesta conocer todas las condiciones establecidas por
          el reglamento de la ASOCIACION MUTUAL PARA EL PERSONAL DEL PODER
          JUDICIAL Y TRABAJADORES INDEPENDIENTES CONGRESO DE TUCUMAN. Declara
          conocer y aceptar los puntos que le fuera informado al momento de la
          firma del legajo que le permite ingresar como asociado de la misma.
          Autoriza irrevocablemente a que ASOCIACION MUTUAL PARA EL PERSONAL DEL
          PODER JUDICIAL Y TRABAJADORES INDEPENDIENTES CONGRESO DE TUCUMAN
          descuente de su cuenta sueldo el monto correspondiente a la cuota
          social. Reconoe a su vez que la ASOCIACION MUTUAL PARA EL PERSONAL DEL
          PODER JUDICIAL Y TRABAJADORES INDEPENDIENTES CONGRESO DE TUCUMANa
          acepta como medio de pago de la cuota sindical el sistema de
          transferenci, pago en el domicilio y con tarjeta de crédito todo ello
          a fin de que no se encuentre con impedimentos al momento de la
          cancelación de la misma.
        </Text>
        <Text style={{ marginTop: '15pt' }}>
          San Miguel de Tucuman .............. de ....................... de
          20..........
        </Text>
        <View
          style={[
            styles.flexRow,
            {
              justifyContent: 'space-around',
              height: '55pt',
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
        </View>
        <View style={styles.flexCol}>
          <Text style={{ marginTop: '15pt', fontSize: '10pt' }}>
            *En caso de renunciar a la MUTUAL o retiro de empleo, autorizo a la
            misma a descontar toda deuda contraida de mis haberes.-
          </Text>
          <Text style={{ fontSize: '10pt' }}>
            *En caso de renuncia expresa, la MUTUAL me vere en la obligacion de
            firmar todos los formularios correspondientes, dando asi la baja a
            la institucion
          </Text>
        </View>
        <View
          style={[
            styles.flexRow,
            {
              justifyContent: 'space-around',
              height: '55pt',
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
            <Text>FIRMA DEL ASOCIADO</Text>
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
        </View>
        <View style={[styles.flexCol, { marginTop: '10pt' }]}>
          <View style={styles.flexRow}>
            <Text style={styles.label}>Certifico que el Sr</Text>
            <Text>
              .................................................................
            </Text>
            <Text style={styles.label}>DNI Nº</Text>
            <Text>............................................</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.label}>Se desempeña en</Text>
            <Text>
              .................................................................
            </Text>
          </View>
          <View style={[styles.flexRow, { marginTop: '10pt' }]}>
            <Text style={[styles.label, { minWidth: '200pt' }]}>
              Revisado como empleado
            </Text>
            <Text style={{ marginRight: '5pt', fontSize: '10pt' }}>
              PERMANENTE
            </Text>
            <Text
              style={{
                border: '2pt solid black',
                width: '40pt',
                height: '14pt',
                marginRight: '5pt',
              }}
            ></Text>
            <Text style={{ marginRight: '5pt', fontSize: '10pt' }}>
              TRANSITORIO
            </Text>
            <Text
              style={{
                border: '2pt solid black',
                width: '40pt',
                height: '14pt',
                marginRight: '5pt',
              }}
            ></Text>
            <Text style={{ marginRight: '5pt', fontSize: '10pt' }}>
              CONTRATADO
            </Text>
            <Text
              style={{
                border: '2pt solid black',
                width: '40pt',
                height: '14pt',
                marginRight: '5pt',
              }}
            ></Text>
          </View>
        </View>
        <View
          style={[
            styles.flexRow,
            { marginTop: '20pt', justifyContent: 'space-between' },
          ]}
        >
          {Box('ALTA', signature)}
          {Box('BAJA', signature)}
        </View>
      </View>
    </Page>
  );
};

const Box = (label, signature) => (
  <View
    style={{
      border: '1pt dashed black',
      backgroundColor: 'silver',
      padding: '6pt',
      width: '40%',
    }}
  >
    <View style={[styles.flexRow, { justifyContent: 'flex-end' }]}>
      <Text>{label}</Text>
    </View>
    <View style={styles.flexCol}>
      <Text style={{ fontSize: '8pt' }}>DOMICILIO ACTUAL DEL ASOCIADO</Text>
      <Text style={{ fontSize: '8pt' }}>
        {
          'CALLE                   Nº              Tel.:            Loc.         '
        }
      </Text>
      <Text style={{ fontSize: '8pt' }}>Provincia</Text>
      <Text style={{ fontSize: '8pt' }}>Lugar y fecha de la DECLARACION</Text>
      <Text style={{ fontSize: '8pt' }}>
        DNI N..........................................
      </Text>
    </View>
    <View
      style={[
        styles.flexRow,
        { justifyContent: 'flex-end', alignItems: 'center' },
      ]}
    >
      <View>
        <Image src={signature} style={{ height: '15pt', width: '30pt' }} />
        <Text style={{ fontSize: '8pt' }}>Firma del ASOCIADO</Text>
      </View>
    </View>
  </View>
);

export default Page2;
