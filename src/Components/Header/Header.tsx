import React, { type FC } from 'react';
import IHeaderProps from '../../Interfaces/IHeaderProps';
import { Text, View } from 'react-native';
import styles from './style';

const Header: React.FC<IHeaderProps> = ({ mainHeader, subHeader }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>{mainHeader}</Text>
      <Text style={styles.subHeader}>{subHeader}</Text>
    </View>
  );
};

export default Header;
