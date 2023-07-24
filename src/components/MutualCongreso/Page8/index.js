import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import styles from '../styles';

const Page8 = () => {
  return (
    <Page size="A4" style={[styles.page, { padding: '5pt' }]}>
      <View
        style={[
          styles.flexRow,
          {
            fontSize: '9pt',
            justifyContent: 'space-around',
            textAlign: 'justify'
          }
        ]}
      >
        <View
          style={[styles.flexCol, { width: '50%', paddingHorizontal: '20pt' }]}
        >
          <Text>
            Articulo 1º - Son Personas Expuestas Politicamente las siguiente
          </Text>
          <Text>
            a) Los funcionarios públicos extranjeros: quedan comprendidas las
            personas que desempeñen o hayan desempeñado dichas funciones hasta
            dos años anteriores a la fecha en que fue realizada la operatoria,
            ocupando alguno de los siguientes cargos:
          </Text>
          <Text style={{ marginTop: '5pt' }}>
            1 - Jefes de Estado, jefes de Gobierno, gobernadores, intendentes,
            ministros, secretarios y subsecretarios de Estado y otros cargos
            gubernamentales equivalentes;
          </Text>
          <Text style={{ marginTop: '10pt' }}>
            2 - Miembros del Parlamento/Poder Legislativo;
          </Text>
          <Text style={{ marginTop: '10pt' }}>
            3 - Jueces, miembros superiores de tribunales y otras altas
            instancias judiciales y administrativas de ese ámbito del Poder
            Judicial;
          </Text>
          <Text style={{ marginTop: '10pt' }}>4 - Embajadores y cónsules.</Text>
          <Text style={{ marginTop: '10pt' }}>
            5 - Oficiales de alto rango de las fuerzas armadas (a partir de
            coronel o grado equivalente en la fuerza y/o país de que se trate) y
            de las fuerzas de seguridad pública (a partir de comisario o rango
            equivalente según la fuerza y/o país de que se trate);
          </Text>
          <Text style={{ marginTop: '10pt' }}>
            6 - Miembros de los órganos de dirección y control de empresas de
            propiedad estatal;
          </Text>
          <Text style={{ marginTop: '10pt' }}>
            7 - Directores, gobernadores, consejeros, síndicos o autoridades
            equivalentes de bancos centrales y otros organismos estatales de
            regulación y/o supervisión;
          </Text>
          <Text style={{ marginTop: '5pt' }}>
            b) Los cónyuges, o convivientes reconocidos legalmente, familiares
            en línea ascendiente o descendiente hasta el primer grado de
            consanguinidad y allegados cercanos de las personas a que se
            refieren los puntos 1 a 7 del artículo 1o, inciso a), durante el
            plazo indicado. A estos efectos, debe entenderse como allegado
            cercano a aquella persona pública y comúnmente conocida por su
            íntima asociación a la persona definida como Persona Expuesta
            Políticamente en los puntos precedentes, incluyendo a quienes están
            en posición de realizar operaciones por grandes sumas de dinero en
            nombre de la referida persona.
          </Text>
          <Text style={{ marginTop: '5pt' }}>
            c) Los funcionarios públicos nacionales que a continuación se
            señalan que se desempeñen o hayan desempeñado hasta dos años
            anteriores a la fecha en que fue realizada la operatoria:
          </Text>
          <Text>1 - El Presidente y Vicepresidente de la Nación;</Text>
          <Text> 2 - Los Senadores y Diputados de la Nación; </Text>
          <Text>3 - Los magistrados del Poder Judicial de la Nación; </Text>
          <Text>4 - Los magistrados del Ministerio Público de la Nación;</Text>
          <Text>
            5 - El Defensor del Pueblo de la Nación y los adjuntos del Defensor
            del Pueblo;
          </Text>
          <Text>
            6- El Jefe de Gabinete de Ministros, los Ministros, Secretarios y
            Subsecretarios del Poder Ejecutivo Nacional;
          </Text>
          <Text> 7- Los interventores federales;</Text>
          <Text>
            8- El Síndico General de la Nación y los Síndicos Generales Adjuntos
            de la Sindicatura General de la Nación, el presidente y los
            auditores generales de la Auditoría General de la Nación, las
            autoridades superiores de los entes reguladores y los demás órganos
            que integran los sistemas de control del sector público nacional, y
            los miembros de organismos jurisdiccionales administrativos;
          </Text>
          <Text>
            9- Los miembros del Consejo de la Magistratura y del Jurado de
            Enjuiciamiento;
          </Text>
          <Text>10- Los Embajadores y Cónsules;</Text>
          <Text>
            11- El personal de las Fuerzas Armadas, de la Policía Federal
            Argentina, de Gendarmería Nacional, de la Prefectura Naval
            Argentina, del Servicio Penitenciario Federal y de la Policía de
            Seguridad Aeroportuaria con jerarquía no menor de coronel o grado
            equivalente según la fuerza;
          </Text>
          <Text>
            12- Los Rectores, Decanos y Secretarios de las Universidades
            Nacionales;
          </Text>
          <Text>
            13- Los funcionarios o empleados con categoría o función no inferior
            a la de director general o nacional, que presten servicio en la
            Administración Pública Nacional, centralizada o descentralizada, las
            entidades autárquicas, los bancos y entidades financieras del
            sistema oficial, las obras sociales administradas por el Estado, las
            empresas del Estado, las sociedades del Estado y el personal con
            similar categoría o función, designado a propuesta del Estado en las
            sociedades de economía mixta, en las sociedades anónimas con
            participación estatal y en otros entes del sector público;
          </Text>
        </View>
        <View
          style={[styles.flexCol, { width: '50%', paddingHorizontal: '20pt' }]}
        >
          <Text>
            14- Todo funcionario o empleado público encargado de otorgar
            habilitaciones administrativas para el ejercicio de cualquier
            actividad, como también todo funcionario o empleado público
            encargado de controlar el funcionamiento de dichas actividades o de
            ejercer cualquier otro control en virtud de un poder de policía;
          </Text>
          <Text>
            15- Los funcionarios que integran los organismos de control de los
            servicios públicos privatizados, con categoría no inferior a la de
            director general o nacional;
          </Text>
          <Text>
            16- El personal que se desempeña en el Poder Legislativo de la
            Nación, con categoría no inferior a la de director;
          </Text>
          <Text>
            17- El personal que cumpla servicios en el Poder Judicial de la
            Nación y en el Ministerio Público de la Nación, con categoría no
            inferior a Secretario;
          </Text>
          <Text>
            18- Todo funcionario o empleado público que integre comisiones de
            adjudicación de licitaciones, de compra o de recepción de bienes, o
            participe en la toma de decisiones de licitaciones o compras;{' '}
          </Text>
          <Text>
            19- Todo funcionario público que tenga por función administrar un
            patrimonio público o privado, o controlar o fiscalizar los ingresos
            públicos cualquiera fuera su naturaleza;
          </Text>
          <Text>
            20- Los directores y administradores de las entidades sometidas al
            control externo del Honorable Congreso de la Nación, de conformidad
            con lo dispuesto en el artículo 120 de la Ley No 24.156.
          </Text>
          <Text style={{ marginTop: '5pt' }}>
            d) Los funcionarios públicos provinciales, municipales y de la
            Ciudad Autónoma de Buenos Aires que a continuación se señalan, que
            se desempeñen o hayan desempeñado hasta dos años anteriores a la
            fecha en que fue realizada la operatoria:
          </Text>
          <Text>
            1- Gobernadores, Intendentes y Jefe de Gobierno de la Ciudad
            Autónoma de Buenos Aires;
          </Text>
          <Text>
            2- Ministros de Gobierno, Secretarios y Subsecretarios; Ministros de
            los Tribunales Superiores de Justicia de las provincias y de la
            Ciudad Autónoma de Buenos Aires;
          </Text>
          <Text>
            3- Jueces y Secretarios de los Poderes Judiciales Provinciales y de
            la Ciudad Autónoma de Buenos Aires.
          </Text>
          <Text>
            4- Legisladores provinciales, municipales y de la Ciudad Autónoma de
            Buenos Aires;
          </Text>
          <Text>
            5- Los miembros del Consejo de la Magistratura y del Jurado de
            Enjuiciamiento;
          </Text>
          <Text>
            6- Máxima autoridad de los Organismos de Control y de los entes
            autárquicos provinciales, municipales y de la Ciudad Autónoma de
            Buenos Aires;
          </Text>
          <Text>
            7- Máxima autoridad de las sociedades de propiedad de los estados
            provinciales, municipales y de la Ciudad Autónoma de Buenos Aires;
          </Text>
          <Text style={{ marginTop: '5pt' }}>
            e) Las autoridades y apoderados de partidos políticos a nivel
            nacional, provincial y de la Ciudad Autónoma de Buenos Aires, que se
            desempeñen o hayan desempeñado hasta dos años anteriores a la fecha
            en que fue realizada la operatoria.
          </Text>
          <Text style={{ marginTop: '5pt' }}>
            f) Las autoridades y representantes legales de organizaciones
            sindicales y empresariales (cámaras, asociaciones y otras formas de
            agrupación corporativa con excepción de aquéllas que únicamente
            administren las contribuciones o participaciones efectuadas por sus
            socios, asociados, miembros asociados, miembros adherentes y/o las
            que surgen de acuerdos destinados a cumplir con sus objetivos
            estatutarios) que desempeñen o hayan desempeñado dichas funciones
            hasta dos años anteriores a la fecha en que fue realizada la
            operatoria.
          </Text>
          <Text>
            El alcance establecido se limita a aquellos rangos, jerarquías o
            categorías con facultades de decisión resolutiva, por lo tanto se
            excluye a los funcionarios de niveles intermedios o inferiores.
          </Text>
          <Text style={{ marginTop: '5pt' }}>
            g) Las autoridades y representantes legales de las obras sociales
            contempladas en la Ley No 23.660, que desempeñen o hayan desempeñado
            dichas funciones hasta dos años anteriores a la fecha en que fue
            realizada la operatoria. El alcance establecido se limita a aquellos
            rangos, jerarquías o categorías con facultades de decisión
            resolutiva, por lo tanto se excluye a los funcionarios de niveles
            intermedios o inferiores.
          </Text>
          <Text style={{ marginTop: '5pt' }}>
            h) Las personas que desempeñen o que hayan desempeñado hasta dos
            años anteriores a la fecha en que fue realizada la operatoria,
            funciones superiores en una organización internacional y sean
            miembros de la alta gerencia, es decir, directores, subdirectores y
            miembros de la Junta o funciones equivalentes excluyéndose a los
            funcionarios de niveles intermedios o inferiores. i) Los cónyuges, o
            convivientes reconocidos legalmente, y familiares en línea
            ascendiente o descendiente hasta el primer grado de consanguinidad,
            de las personas a que se refieren los puntos c), d), e), f), g), y
            h) durante los plazos que para ellas se indican.
          </Text>
        </View>
      </View>
    </Page>
  );
};

export default Page8;
