import React, { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';

const MoreScreenTab: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingPosition}>
        <Header mainHeader="More Settings" />
      </View>
      <View style={styles.refillsHeadingProperties}>
        <Text style={styles.refillsText}>Refills</Text>
        <TouchableOpacity style={styles.viewAllPress}>
          <Text style={styles.viewAllText}>View All</Text>
          <AntDesign name="arrowright" size={14} color={colors.buttonBg} />
        </TouchableOpacity>
      </View>
      <View style={styles.medicineDoseComponentPosition}>
        <TouchableOpacity style={styles.chip}>
          <View style={styles.medicineDoseProperties}>
            <View style={styles.doseDetailsPosition}>
              <Text style={styles.pillsLeft}>Adflox</Text>
              <Text style={styles.pillsLeftDetailsText}>Took 5 pills</Text>
            </View>
            <View style={styles.pillsLeftPosition}>
              <Text style={styles.pillsLeft}>12 Pill(s) Left</Text>
              <TouchableOpacity style={styles.pillsLeftPress}>
                <Text style={styles.pillsLeftDetailsText}>Details</Text>
                <AntDesign name="arrowright" size={14} color={colors.typedText} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoreScreenTab;
