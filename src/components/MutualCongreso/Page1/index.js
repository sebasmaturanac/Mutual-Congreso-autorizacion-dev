import React from 'react';
import { Page, View, Text, Image } from '@react-pdf/renderer';
import HeaderPDF from '../HeaderPDF';
import styles from '../styles';
import { formatDate } from '../../../utils/date';
import { formatAddress } from '../../../utils/address';

const Page1Mutual = ({ state, signature }) => {
  return (
    <Page size="A4" style={styles.page}>
      <HeaderPDF
        title={<Text style={{ fontSize: '13pt' }}>NOTA DE PEDIDO</Text>}
        subItem={
          <View style={styles.notePageOne}>
            <Text style={styles.textBold}>
              Vdor:..............................Autz:........................
            </Text>
          </View>
        }
      />
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.textTitle}>DATOS DEL CLIENTE:</Text>
          <Text style={styles.label}>Apellido y Nombre: </Text>
          <Text style={styles.text}>{`${state.nombre} ${state.apellido}`}</Text>
          <Text style={styles.label}>DNI:</Text>
          <Text style={styles.text}> {state.dni}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email: </Text>
          <Text style={styles.text}>{`${state.email}`}</Text>
          <Text style={styles.label}>Fecha de nacimiento:</Text>
          <Text style={styles.text}>{formatDate(state.fechaNacimiento)}</Text>
          <Text style={styles.label}>Provincia:</Text>
          <Text style={styles.text}> {state.provincia}</Text>
        </View>
        <View style={styles.flexRow}>
          <View
            style={{ display: 'flex', flexDirection: 'column', width: '50%' }}
          >
            <View style={styles.flexRow}>
              <Text style={styles.label}>Localidad: </Text>
              <Text style={styles.text}>{state.localidad}</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.label}>Barrio: </Text>
              <Text style={styles.text}>{state.barrio}</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.label}>Domicilio: </Text>
              <Text style={styles.text}>{formatAddress(state.domicilio)}</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.label}>Referencia: </Text>
              <Text style={styles.text}>{state.referencia}</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View style={styles.flexRow}>
              <Text style={styles.label}>CP: </Text>
              <Text style={styles.text}>{state.codigoPostal}</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.label}>Tel: </Text>
              <Text style={styles.text}>{state.telefono1}</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.label}>Cel: </Text>
              <Text style={styles.text}>{state.celular1}</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.label}>Verificacion de Datos: </Text>
              <Text>..........</Text>
              <Text style={styles.label}>hs </Text>
              <Text>..........</Text>
              <Text style={styles.label}>hs </Text>
              <Text>..........</Text>
            </View>
          </View>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.textTitle}>DATOS DE LA CUENTA</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.label}>Suc.</Text>
          <Text>........................</Text>
          <Text style={styles.label}>CA</Text>
          <Text>......................</Text>
          <Text style={styles.label}>CBU</Text>
          <Text>..............................</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.textTitle}>DATOS LABORALES</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Empresa </Text>
          <Text style={styles.text}>{`${state.empresa}`}</Text>
          <Text style={styles.label}>Tel</Text>
          <Text style={styles.text}> {state.telefonoEmpresa}</Text>
          <Text style={styles.label}>(interno):</Text>
          <Text style={styles.text}> {state.internoEmpresa}</Text>
        </View>
        <View style={[styles.row, { marginTop: '2pt' }]}>
          <Text style={styles.label}>Seccion / Cargo </Text>
          <Text style={styles.text}>{`${state.seccion}`}</Text>
          <Text style={styles.label}>Antigüedad</Text>
          <Text style={styles.text}> {state.antiguedad}</Text>
          <Text style={styles.label}>Turno</Text>
          <Text>.............................</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.textTitle}>PRODUCTO SELECCIONADO</Text>
        </View>
        <View style={[styles.table, { marginTop: '5pt' }]}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>CANTIDAD</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>CODIGO</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>ARTICULO / PRODUCTO</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>USO INTERNO</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}> </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}> </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}> </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
        </View>
        <View style={[styles.flexRow, { justifyContent: 'center' }]}>
          <Text>NO SE ADMITEN ANULACIONES</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.textTitle}>PLAN DE ADHESION</Text>
        </View>
        <View style={styles.flexRow}>
          <Text>
            Entrega de Articulos .........Dias habiles............Debitos Fijos
            .......... Pesos (......................)
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Text>
            1º Descuento sueldo de ....................... (20....) TOTAL $
            .....................................................
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.textTitle}>CONTRATO</Text>
        </View>
        <View style={[styles.flexCol, { fontSize: '10pt' }]}>
          <Text>
            En caso de que por razones ajenas a ……………… el cliente desistiera o
            se viera imposibilitado de poder continuar con la operación ya se
            por motivos laborales, crediticios o de Indole personal: podrá
            rescindir el contrato, informado a la empresa con la debida
            anticipación tomando en cuenta los tiempos necesarios para dar de
            baja el crédito en todos los sistemas intervinientes.
          </Text>
          <Text>En caso de hacerlo aceptara la siguiente penalidad:</Text>
          <Text>
            Rescisión dentro de los 60 días firmado el presente convenio deberá
            abonar el importe equivalente a tres cuotas del plan acordado. El a
            bajo firmante ……………………………………….. DNI/LE/LC Nº………………………………………… en
            adelante EL COMPRADOR manifiesta conocer las condiciones de su
            compra a ………………………… en adelante EL VENDEDOR a través de la
            ASOCIACION MUTUAL PARA EL PERSONAL DEL PODER JUDICIAL Y TRABAJADORES
            INDEPENDIENTES CONGRESO DE TUCUMAN en adelante EL VENDEDOR.
          </Text>
          <Text>
            1º COMPRADOR AUTORIZA y OTORGA mandato irrevocable a EL COBRADOR
            para el descuento mensual de su cuota de financiación y se
            compromete a no solicitar la baja como afiliado de la ASOCIACION
            MUTUAL PARA EL PERSONAL DEL PODER JUDICIAL Y TRABAJADORES
            INDEPENDIENTES CONGRESO DE TUCUMAN por el periodo que dure la
            operación.
          </Text>
          <Text>
            2º EL VENDEDOR vende los artículos solicitados por el COMPRADOR en
            la correspondiente NOTA de PEDIDO en la siguiente forma de pago -
            plan especial - Contado diferido una vez recibido el/los artículos /
            productos EL COMPRADOR estara obligado a cancelar ante EL COBRADOR
            las cuotas mensualmente por el debito bancario o pago en efectivo
            hasta cumplir con la cancelación total del plan de financiación.{' '}
          </Text>
          <Text>
            3º El importe total de la operación es la suma de
            ($……………………………)………………………………….. que será abonado en ( ) cuotas de
            …………………………… c/u mensuales y consecutivos y a partir del sueldo del
            mes de ……………………… de ………(20…….)
          </Text>
          <Text>
            4º La falta de pago de dos periodos consecutivos o 3 alternados
            producirá la caducidad de los plazos acordados y autorizara a EL
            COBRADOR ASOCIACION MUTUAL PARA EL PERSONAL DEL PODER JUDICIAL Y
            TRABAJADORES INDEPENDIENTES CONGRESO DE TUCUMAN a exigir el saldo
            adeudado mediante la ejecución del pagare que suscribe como garantía
            de esta operación y agregar al mismo un cargo del 3% mensual en
            concepto de gastos administrativos. 5º El servicio de cobranza
            siempre lo realizara la ASOCIACION MUTUAL PARA ELP ERSONAL DEL PODER
            JUDICIAL Y TRABAJADORES INDEPENDIENTES CONGRESO DE TUCUMAN y en el
            caso que por cualquier causa no se efectivice el debito EL COMPRADOR
            tiene la obligación de abonar la cuota correspondiente a MUTUAL
            CONGRESO DE TUCUMAN.
          </Text>
          <Text>
            6º EL COMPRADOR da conformidad de los datos aportados y a la
            recepción de los productos / artículos en los tiempos estipulados.
          </Text>
          <Text>
            7º Las partes acuerdan la jurisdicción de los tribunales ordinarios
            en lo comercial de la ciudad de San Miguel de Tucumán, a todo
            evento, renunciando en forma expresa a todo otro fuera de la
            jurisdicción.
          </Text>
        </View>
        <View
          style={[
            styles.flexRow,
            {
              justifyContent: 'space-between',
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
    </Page>
  );
};

export default Page1Mutual;
