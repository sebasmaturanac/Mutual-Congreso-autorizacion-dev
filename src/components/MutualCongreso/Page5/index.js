import React from 'react';
import { Page, View, Text, Image } from '@react-pdf/renderer';
import HeaderPDF from '../HeaderPDF';
import styles from '../styles';

const Page5 = ({ state, signature }) => {
  return (
    <Page size="A4" style={styles.page}>
      <HeaderPDF
        title={
          <View style={{ width: '220pt' }}>
            <Text style={{ fontSize: '15pt' }}>SISTEMA</Text>
            <Text style={{ fontSize: '15pt' }}>DE DEBITO</Text>
            <Text style={{ fontSize: '15pt' }}>BANCARIO</Text>
          </View>
        }
      />
      <View style={styles.container}>
        <View style={[styles.flexCol, { marginLeft: '10pt', lineHeight: 1.5 }]}>
          <Text>Casa ................... Código Casa ..................</Text>
          <Text>CUENTA CORRIENTE / CAJA DE AHORRO</Text>
          <Text>Nº DE CUENTA ..........................................</Text>
        </View>
        <View
          style={[
            styles.flexCol,
            {
              marginLeft: '10pt',
              fontSize: '10pt',
              marginTop: '50pt',
              lineHeight: 1.5
            }
          ]}
        >
          <Text>
            En mi carácter de titular de la cuenta citada, solicito al
            …………………………. que considere la posibilidad de mi adhesión al sistema
            de titulo, para aplicar el pago del importe informado por la Mutual
            arriba mencionada, correspondiente a todos los gastos y consumos que
            realice a través de las mismas. Así mismo me notifico que en caso de
            acceder al Banco a la presente solicitud el sistema se regirá por
            las condiciones que se describen a continuación, que declaro
            conocer.
          </Text>
          <Text>
            · Los importes enviados mensualmente por la mutual sean debitados de
            mi cuenta al momento de registrarse la acreditación de mis haberes
            y/o forma inmediata cuando se corrobore la existencia de saldo de
            conformidad a la información que bajo su exclusiva responsabilidad a
            la mutual brinde al ……………………… los términos del convenio
            oportunamente celebrados entre ambas entidades.{' '}
          </Text>
          <Text>
            · Autorizo a ………………………… Para que se brinde al Empresa / Mutual /
            Asociación la información correspondiente a los datos
            identificatorios de la cuenta a través de la cual se llevará a cabo
            la operatoria que solicito, eximiendo de toda responsabilidad al
            respecto.
          </Text>
          <Text>
            · En caso de que el servicio no se halle a mi nombre debo acompañar
            a la presente una autorización de titular del mismo facultando a
            pagar dicha deuda. El banco podrá procesar las modificaciones del
            oficio del resumen de clientes generados por la mutual, a efectos de
            continuar vinculado al debito, sin otra autorización mas que la
            presente.
          </Text>
          <Text>
            · A partir de la firma presente tomo conocimiento que las cuotas
            serán debitadas de mi cuenta, considerando por ello la fecha en que
            la mutual haga entrega de esta carta de autorización al banco,
            considerado para ello.
          </Text>
          <Text style={{ marginLeft: '20pt' }}>
            1 - Solitud presentada hasta el día 15 del mes de cita los devotos
            comenzaran a efectuarse con el deposito del sueldo del mes en curso
            y/o el saldo a partir de la fecha de presentación.{' '}
          </Text>
          <Text style={{ marginLeft: '20pt' }}>
            2 - Si fuera presentado con posterioridad al día 15, los comenzaran
            a efectuarse sobre el deposito de los haberes del mes siguiente o
            sobre el saldo a partir de la fecha de presentación.
          </Text>
          <Text>
            · Será a mi exclusivo cargo y responsabilidad efectuar todos los
            reclamos y/o aclaraciones que pudiran suscitarse con la mutual por
            los debitos realizados en mi cuenta. El .................... podra
            dejar de prestar a este servicio pro las siguientes razones.
          </Text>
          <Text style={{ marginLeft: '20pt' }}>
            1 - Falta de fondos suficientes al momento de corresponder un debito
          </Text>
          <Text style={{ marginLeft: '20pt' }}>
            2 - Cierre de la cuenta bancaria debito a cualquiera de las causas
            previstas en la norma en vigencia
          </Text>
          <Text style={{ marginLeft: '20pt' }}>
            3 - Por voluntad del suscriptor, cursando fehaciente notificacion de
            su decision a la mutual, la cual tomando debida nota efectuará la
            pertinente notificacion de la baja al banco
          </Text>
          <Text style={{ marginLeft: '20pt' }}>
            4 - Por otras causas a criterio del banco
          </Text>
          <Text style={{ marginLeft: '20pt' }}>
            5 - Por decisión a la mutual.
          </Text>
          <Text>
            En mi carácter de titular de la cuenta auditado, autorizo a
            ……………………………….. a debitar el importe informado por la mutual
            correspondiente a al cuota social y por todos los gastos y consumos
            que allá realizado a través de la misma, careciendo de derecho a
            reclamo alguno al banco sobre los citados debito. En prueba de
            conformidad y declarando conocer y aceptar los términos del presente
            convenio, firmo este ejemplar en …………………..a los ………………….. días del
            mes de ……………………….. de 20………
          </Text>
          <View
            style={[
              styles.flexRow,
              {
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginTop: '50pt'
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
                alignItems: 'center'
              }}
            >
              <Text style={styles.text}>{state.firmaAclaracion}</Text>
              <Text>ACLARACION</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Text style={styles.text}>{state.dni}</Text>
              <Text>DNI</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default Page5;
