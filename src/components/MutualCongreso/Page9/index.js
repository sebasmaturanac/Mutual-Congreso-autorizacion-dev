/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Page, View, Text, Image } from '@react-pdf/renderer';
import styles from '../styles';
import bancoNacion from '../../../assets/banconacion.png';
import * as moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const Page9 = ({ state, signature }) => {
  return (
    <Page size="A4" style={[styles.page]}>
      <Text
        style={{ fontSize: '10pt', alignSelf: 'flex-end', marginTop: '10pt' }}
      >
        {'FORMULARIO Nº:                                    '}
      </Text>
      <View
        style={{
          flexGrow: 1,
          width: '97%',
          border: '2pt solid black',
          marginVertical: '3pt',
        }}
      >
        <View
          style={[
            styles.flexRow,
            { borderBottom: '2pt solid black', height: '60pt' },
          ]}
        >
          <View style={{ width: '30%', borderRight: '2pt solid black' }}>
            <Image
              src={{
                uri: bancoNacion,
                method: 'GET',
                headers: {},
                body: '',
              }}
              alt="logo"
              style={styles.logo}
            />
          </View>
          <View
            style={[
              styles.flexCol,
              { width: '70%', justifyContent: 'center', alignItems: 'center' },
            ]}
          >
            <Text>DEBITO AUTOMATICO</Text>
            <Text>CARTA AUTORIZACION</Text>
          </View>
        </View>
        <View style={[styles.flexCol, { fontSize: '10pt', padding: '3pt' }]}>
          <View style={styles.flexRow}>
            <Text>Sucursal:</Text>
            <Text>
              _______________________________________________________________
            </Text>
            <Text>Codigo:</Text>
            <Text>_________________________</Text>
          </View>
          <View style={styles.flexRow}>
            <Text>Domicilio:</Text>
            <Text>
              ______________________________________________________________________________________________
            </Text>
          </View>
          <View style={[styles.flexRow, { marginTop: '5pt' }]}>
            <Text style={{ width: '30%' }}>EMPRESA/MUTUAL/ASOCIACION:</Text>
            <View>
              <Text style={{ fontSize: '10pt', width: '70%' }}>
                ASOCIACION MUTUAL PARA EL PERSONAL DEL PODER JUDICIAL Y
                TRABAJADORES INDEPENDIENTES CONGRESO DE TUCUMAN
              </Text>
            </View>
          </View>
          <View style={[styles.flexRow, { marginTop: '5pt' }]}>
            <Text>Tipo y nº de Cuenta: </Text>
            <Text>{`${state.cuenta} - ${state.numeroCuenta}                         `}</Text>
            <Text>Nº de cl/socio p/la empresa:</Text>
            <Text>______________________________</Text>
          </View>
          <View
            style={[
              styles.flexRow,
              { marginTop: '15pt', marginRight: '60pt', alignSelf: 'flex-end' },
            ]}
          >
            <Text>{`${state.provincia}`}, {`${moment(state.createdAt).format('DD')}`} de {`${moment(state.createdAt).format('MMMM')}`} de {`${moment(state.createdAt).format('YYYY')}`} </Text>
          </View>
          <View
            style={{
              marginTop: '10pt',
              paddingHorizontal: '10pt',
              textAlign: 'justify',
            }}
          >
            <Text>
              En mi/nuestro carácter de titular/es de la cuenta citada,
              solicito/amos al Banco de la Nación Argentina que considere la
              posibilidad de mi/nuestra adhesión al sistema del título, para
              aplicar al pago del importe informado por la
              Empresa/Mutual/Asociación arriba mencionada, correspondiente a
              todos los gastos y consumos que realice a través de la misma.
              Asimismo me/nos notifico/amos que, en caso de acceder el Banco a
              la presente solicitud, el sistema se regirá por las condiciones
              que se describen a continuación, que declaro/amos conocer:
            </Text>
            <Text style={{ marginTop: '10pt' }}>
              Los importes enviados mensualmente por la
              Empresa/Mutual/Asociación serán debitados de mi/nuestra cuenta al
              momento de registrarse la acreditación de mis/nuestros haberes y/o
              en forma inmediata cuando se corrobore la existencia de saldo de
              conformidad a la información que bajo su exclusiva responsabilidad
              la Empresa/Mutual/Asociación brinde al Banco, en los términos del
              convenio oportunamente celebrado entre ambas entidades.
            </Text>
            <Text style={{ marginTop: '10pt' }}>
              Autorizo/amos al BANCO DE LA NACIÓN ARGENTINA para que brinde a la
              Empresa/Mutual/Asociación la información correspondiente a los
              datos identificatorios de la cuenta a trav
            </Text>
            <Text style={{ marginTop: '10pt' }}>
              En caso que el servicio no se halle a mi/nuestro nombre,
              debo/eremos acompañar a la presente una autorización del titular
              del mismo facultándome a pagar dicha deuda.
            </Text>
            <Text style={{ marginTop: '10pt' }}>
              El Banco podrá procesar las modificaciones de oficio del número de
              clientes generados por la Empresa /Mutual/Asociación, a efectos de
              continuar vinculado al débito, sin otra autorización más que la
              presente.
            </Text>
            <Text style={{ marginTop: '10pt' }}>
              Se podrá ordenar la suspensión de un débito hasta el día hábil
              anterior -inclusive- a la fecha de vencimiento y la alternativa de
              revertir débitos por el total de cada operación, ante una
              instrucción expresa mediante la suscripción del F.63010 "Solicitud
              de Reversión" dentro de los 30 (treinta) días corridos contados
              desde la fecha del débito. La devolución será efectuada dentro de
              las 72 (setenta y dos) horas hábiles siguientes a la fecha en que
              el BANCO reciba la instrucción del cliente, siempre que la
              Empresa/Mutual/Asociación no se oponga a la reversión por haberse
              hecho efectiva la diferencia de facturación en forma directa,
              conforme lo prevé la normativa vigente del BCRA sobre
              Reglamentación de Cuentas de Depósito- Reversión de Débitos
              Automáticos.
            </Text>
            <Text>
              A partir de la firma de la presente tomo conocimiento que las
              cuotas serán debitadas de mi/nuestra cuenta, considerando para
              ello la fecha en que la Empresa/Mutual/Asociación haga entrega de
              esta carta autorización al Banco, considerando para ello:
            </Text>
            <Text style={{ marginTop: '10pt' }}>
              1- Solicitud presentada hasta el día 15 del mes de cita, los
              débitos comenzarán a efectuarse con el depósito del sueldo del mes
              en curso y/o el saldo a partir de la fecha de presentación.
            </Text>
            <Text>
              2- Si fuera presentado con posterioridad al día 15, los débitos
              comenzarán a efectuarse sobre el depósito de los haberes del mes
              siguiente o sobre el saldo a partir de la fecha de presentación.
              Será a mi/nuestro exclusivo cargo y responsabilidad efectuar todos
              los reclamos y/o aclaraciones que pudieran suscitarse con la
              Empresa/Mutual/Asociación por los débitos realizados en mi cuenta.
            </Text>
            <Text style={{ marginTop: '10pt' }}>
              El BANCO DE LA NACIÓN ARGENTINA podrá dejar de prestar este
              servicio por las siguientes razones:
            </Text>
            <Text>
              1. Falta de fondos suficientes al momento de corresponder un
              débito.
            </Text>
            <Text>
              2. Cierre de la cuenta bancaria debido a cualquiera de las causas
              previstas en las normas en vigencia.
            </Text>
            <Text>3. Por voluntad del suscripto</Text>
            <Text>4. Por otras causas a criterio del Banco.</Text>
            <Text>5. Por decisión de la Empresa.</Text>
            <Text style={{ marginTop: '10pt' }}>
              En mi/nuestro carácter de titular/es de la cuenta arriba aludida,
              autorizo/amos al Banco de la Nación Argentina a debitar el importe
              informado por la Empresa/Mutual/asociación correspondiente a
              ____________________________ y por todos los gastos y consumos que
              haya realizado a través de la misma, careciendo de derecho a
              reclamo alguno al Banco sobre los citados débitos.
            </Text>
            <Text>
              En prueba de conformidad, y declarando conocer los términos de la
              presente, firmo/amos este ejemplar en
              ______________________________________________________________________________________________
              a los
            </Text>
            <Text>
              _______________________ día del mes _____________________ de
              _________________________________________
            </Text>
            <View style={[styles.flexRow, { justifyContent: 'space-around' }]}>
              <View style={[styles.flexCol, { marginTop: '20pt' }]}>
                <Image src={signature} style={styles.signature} />
                <View style={[styles.flexRow, { marginTop: '10pt' }]}>
                  <Text>Aclaracion</Text>
                  <Text style={styles.text}>{state.firmaAclaracion}</Text>
                </View>
              </View>
              <View style={[styles.flexCol, { marginTop: '20pt' }]}>
                <Image src={signature} style={styles.signature} />
                <View style={[styles.flexRow, { marginTop: '10pt' }]}>
                  <Text>Aclaracion</Text>
                  <Text style={styles.text}>{state.firmaAclaracion}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default Page9;
