// imports
import React, { useEffect } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import { styles } from '../../app.styles';
import { useReportsStore } from './reports.store';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import  { AnimatedCard } from '../components/elements/card';
import TomateLogo from '../components/images/logo';
import { Link } from 'expo-router';

export default function Main() {
  const reports = useReportsStore((state) => state.reports);
  const getReports = useReportsStore((state) => state.getReports);
  const insets = useSafeAreaInsets();

 console.log(reports);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, width: '100%',flex: 1, flexDirection: "column" , justifyContent: 'center'} }>
        <View style={styles.headerLogo}>
            <TomateLogo  />
        </View>
      {reports.length === 0 ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />    
        </View>
      ) : (
        <FlatList
          data={reports}
          keyExtractor={(item, index) => item.id} 
          renderItem={({ item, index }) => <AnimatedCard item={item}  index={index}/>}
        />
      )}
      <Link href={"/about"}>ABOUT</Link>
    </View>
  );
}
3