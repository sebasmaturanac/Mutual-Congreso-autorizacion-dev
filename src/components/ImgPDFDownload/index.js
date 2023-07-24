import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
  },
});

const ImgPDFDownload = ({ fotos }) => (
  <Document>
    {fotos.map(({ label, src }) => (
      <Page size="A4" style={styles.page} key={label}>
        <View style={styles.section}>
          <Text>{label}</Text>
        </View>
        <Image
          src={{
            uri: src,
            method: 'GET',
            headers: {},
            body: '',
          }}
        />
      </Page>
    ))}
  </Document>
);

export default ImgPDFDownload;
