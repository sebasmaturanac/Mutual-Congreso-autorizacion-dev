import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import styles from './styles';

export const InlineField = (label) => (
  <View style={styles.flexRow}>
    <Text style={{ fontSize: '8pt', minWidth: '30pt' }}>{label}</Text>
    <Text style={[styles.text, { flexGrow: 1, minWidth: '50pt' }]}></Text>
  </View>
);

export const TitleGenerator = (title, subtitle) => (
  <View
    style={[
      styles.flexRow,
      {
        width: '100%',
        borderBottom: '2pt solid red',
        marginTop: '5pt',
        alignItems: 'flex-end',
      },
    ]}
  >
    <Text style={{ fontSize: '12pt' }}>{title}</Text>
    {subtitle && (
      <Text style={{ fontSize: '8pt', marginLeft: '5pt' }}>{subtitle}</Text>
    )}
  </View>
);

export const SelectVertical = (label) => (
  <View
    style={[
      styles.flexCol,
      { alignItems: 'center', marginTop: '1pt', marginLeft: '2pt' },
    ]}
  >
    <Text style={{ fontSize: '6pt', marginBottom: '3pt' }}>{label}</Text>
    <Text
      style={{ width: '12pt', height: '12pt', border: '1pt solid black' }}
    ></Text>
  </View>
);

export const SelectHorizontal = (label) => (
  <View
    style={[
      styles.flexRow,
      { alignItems: 'center', marginTop: '2pt', marginLeft: '5pt' },
    ]}
  >
    <Text style={{ fontSize: '6pt', marginRight: '1pt', minWidth: '20pt' }}>
      {label}
    </Text>
    <Text
      style={{ width: '12pt', height: '12pt', border: '1pt solid black' }}
    ></Text>
  </View>
);
