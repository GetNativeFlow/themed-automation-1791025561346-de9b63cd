import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { getThemeColors } from '../../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as nf from '../../lib/runtime';

export default function BottomBar({ systemNav, systemInsets }) {
  const colors = getThemeColors();
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={[styles.container, { flexDirection: "row", alignItems: "stretch", backgroundColor: colors.background, borderTopWidth: 1, borderTopColor: colors.alternate, paddingBottom: systemInsets.bottom, paddingLeft: systemInsets.left, paddingRight: systemInsets.right, minHeight: 50 + systemInsets.bottom }]}>
      {systemNav.items.map((navItem) => (
      <TouchableOpacity testID="BottomBar_NavItem" key={navItem.pageId} onPress={navItem.onPress} activeOpacity={0.7} accessibilityRole="tab" accessibilityState={{ selected: navItem.active }} style={[styles.navItem, { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }]}>
        <View accessible={true} accessibilityRole="image" style={[{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }, { "color": (String(navItem.active) === String("true") ? colors.primary : "rgba(0,0,0,0.4)") }]}><LucideDynamic name={navItem.icon} size={20} color={(((String(navItem.active) === String("true") ? colors.primary : "rgba(0,0,0,0.4)")) || '#9CA3AF')} strokeWidth={2} /></View>
        <Text style={[styles.text, { "color": (String(navItem.active) === String("true") ? colors.primary : "rgba(0,0,0,0.4)") }]} numberOfLines={1}>{nf.text(navItem.label)}</Text>
      </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = createStyles();

function createStyles() {
  const colors = getThemeColors();
  return StyleSheet.create({
  navItem: {
    flexDirection: 'column',
    gap: 2,
  },
  text: {
    fontSize: 10,
  },
  });
}
