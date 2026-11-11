import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as nf from '../../lib/runtime';

export default function Header({ systemNav, systemInsets }) {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={[styles.container, { flexDirection: "row", alignItems: "center", gap: 4, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)', elevation: 0, backgroundColor: '#FFFFFF', paddingTop: systemInsets.top, paddingLeft: systemInsets.left + 8, paddingRight: systemInsets.right + 8, minHeight: 56 + systemInsets.top }]}>
      <View style={[styles.headerLeading, { flexDirection: "row", alignItems: "center", gap: 8, flexShrink: 0 }]}>
        {systemNav.canGoBack ? (<TouchableOpacity testID="Header_BackButton" onPress={systemNav.goBack} hitSlop={8} accessibilityRole="button" accessibilityLabel="Back" style={styles.backButton}><View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-left" size={24} color="#4F46E5" strokeWidth={2} /></View></TouchableOpacity>) : null}
      </View>
      <View style={[styles.headerTitle, { flex: 1, minWidth: 0, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 8 }]}>
        <Text style={styles.text} numberOfLines={1}>{nf.text(systemNav.pageTitle)}</Text>
      </View>
      <View style={[styles.headerTrailing, { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: 16, flexShrink: 0 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerLeading: {
    gap: 8,
  },
  headerTitle: {
    gap: 8,
  },
  text: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '600',
  },
  headerTrailing: {
    gap: 16,
  },
});

