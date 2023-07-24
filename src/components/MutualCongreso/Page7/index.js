import React from 'react';
import { Page, View, Text, Image } from '@react-pdf/renderer';
import logo from '../../../assets/logoBlack.png';
import styles from '../styles';

const Page6 = ({ state, signature }) => {
  return (
    <Page size="A4" style={[styles.page, { padding: '10pt' }]}>
      <View
        style={[
          styles.flexRow,
          {
            marginTop: '10pt',
            borderBottom: '4pt solid black',
            marginBottom: '10pt'
          }
        ]}
      >
        <View style={[styles.flexRow, { alignItems: 'center' }]}>
          <Image
            src={{
              uri: logo,
              method: 'GET',
              headers: {},
              body: ''
            }}
            alt="logo"
            style={{ width: '80pt' }}
          />
          <View style={[styles.flexCol, { marginLeft: '20pt' }]}>
            <Text>Mutual</Text>
            <Text>Congreso</Text>
            <Text>de Tucuman</Text>
          </View>
        </View>
        <View
          style={[
            styles.flexRow,
            {
              width: '50%',
              textAlign: 'right'
            }
          ]}
        >
          <View
            style={[
              styles.flexCol,
              { justifyContent: 'space-between', paddingVertical: '10pt' }
            ]}
          >
            <View>
              <Text style={{ fontSize: '17pt' }}>ORIGINAL</Text>
            </View>
            <View>
              <Text style={{ fontSize: '14pt' }}>
                Ley 25246 y sus modificatorias
              </Text>
              <Text style={{ fontSize: '10pt' }}>
                Res. U.I.F Nº 11/2011 RECTIFICADO RES. 52/2012
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.flexCol, { paddingHorizontal: '35pt' }]}>
        <Text style={{ fontSize: '15pt', textAlign: 'center' }}>
          Declaración Jurada sobre la condición de Persona Expuesta
          Políticamente
        </Text>
        <View
          style={[
            styles.flexCol,
            {
              marginLeft: '10pt',
              fontSize: '13pt',
              lineHeight: 1.5,
              marginTop: '20pt'
            }
          ]}
        >
          <Text style={{ marginBottom: '10pt' }}>
            IDENTIFICACIÓN DEL SUJETO OBLIGADO
          </Text>
          <Text>
            El/La (1) que suscribe, …………………………………..(2) declara bajo juramento
            que los datos consignados en la presente son correctos, completos y
            fiel expresión de la verdad y que SI/NO (1) se encuentra incluido
            y/o alcanzado dentro de la “Nomina de Funciones de Personas
            Expuestas Politicamente” aprobada por la Unidad de Información
            Financiera, que ha leído.
          </Text>
          <Text>
            En caso afirmativo indicar detalladamente el motivo ………………………………………
          </Text>
          <Text>
            Ademas, asume el compromiso de informar cualquier modificación que
            se produzca a este respecto, dentro de los treinta (30) días de
            ocurrida, mediante la presentación de una nueva declaración jurada.
          </Text>
          <View style={styles.flexCol}>
            <View style={[styles.flexRow, { marginTop: '5pt' }]}>
              <Text>Documento Tipo (3)</Text>
              <Text>{'  DNI  '}</Text>
              <Text>Nº</Text>
              <Text style={styles.text}> {state.dni}</Text>
            </View>
            <View style={[styles.flexRow, { marginTop: '5pt' }]}>
              <Text>País y Autoridad de Emisión</Text>
              <Text>
                ............................................................
              </Text>
            </View>
            <View style={[styles.row, { marginTop: '5pt' }]}>
              <Text>Caracter Invocado (4)</Text>
              <Text>
                ............................................................
              </Text>
            </View>
            <View style={[styles.row, { marginTop: '5pt' }]}>
              <Text>Denominacion de la persona juridica (5)</Text>
              <Text>
                ............................................................
              </Text>
            </View>
            <View style={[styles.row, { marginTop: '5pt' }]}>
              <Text>CUIT / CUIL / CDI (1) Nº</Text>
              <Text>
                ............................................................
              </Text>
            </View>
            <View style={[styles.row, { marginTop: '5pt' }]}>
              <Text>{'Lugar y fecha                                                                '}</Text>
              <Text>Firma:</Text>
              <Image src={signature} style={styles.signature} />
            </View>
            <View
              style={[styles.row, { marginTop: '30pt', alignSelf: 'flex-end' }]}
            >
              <Text>Aclaracion</Text>
              <Text style={styles.text}>{state.firmaAclaracion}</Text>
            </View>
            <View>
              <Image src={signature} style={styles.signature} />
              <Text style={{ fontSize: '10pt' }}>
                Firma y sello del Sujeto Obligado o de los funcionarios del
                Sujetos Obligado autorizados.
              </Text>
            </View>
            <View style={[styles.flexCol, { marginTop: '10pt' }]}>
              <View style={styles.flexRow}>
                <Text>Observaciones </Text>
                <Text>
                  ..............................................................................................................
                </Text>
              </View>
              <Text style={{ fontSize: '8pt' }}>
                (1) Tachar lo que no corresponda.
              </Text>
              <Text style={{ fontSize: '8pt' }}>
                (2) Integrar con el nombre y apellido del cliente, en el caso de
                personas fisicas, aun cuando en su representacion firme un
                apoderado.
              </Text>
              <Text style={{ fontSize: '8pt' }}>
                (3) Indicar DNU, LE o LC para argentinos nativos. Para
                extranjeros: DNI extranjeros, Carné internacional, Pasaporte,
                Certificado provisorio, Documento de identidad del respectivo
                país, segun corresponda.
              </Text>
              <Text style={{ fontSize: '8pt' }}>
                (4) Indicar titular, representante legal, apoderado. Cuando se
                trate de apoderado, el poder otorgado debe ser amplio y general
                y estar v igente a la fecha en que se suscriba la presente
                declaración.
              </Text>
              <Text style={{ fontSize: '8pt' }}>
                (5) Integrar sólo en los casos en que el firmante lo hace en
                carácter de apoderado o representante legal de una persona
                jurídica.
              </Text>
              <Text style={{ fontSize: '8pt' }}>
                Nota: Esta declaración deberá ser integrada por duplicado, el
                que intervenido por el sujeto obligado servirá como constancia
                de recepcion de la presente declaracion para el cliente. Esta
                declaracion podra ser integrada en los legajos o cualquier otro
                formulario que utilicen habitualmente los Sujetos Obligados para
                vincularse con sus clientes.
              </Text>
            </View>
            <View
              style={{
                marginTop: '5pt',
                paddingTop: '10pt',
                borderTop: '3pt solid black',
                fontSize: '15pt',
                alignItems: 'center'
              }}
            >
              <Text>
                Gral Lamadrid 456 3ºA San Miguel de Tucuman - Tucuman, Argentina
              </Text>
              <Text>
                www.mutualcongreso.com | Tel: 381 4849445 / 0810 5554286
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default Page6;
