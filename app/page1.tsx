import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import { default as StudioCarousel } from '../components/StudioCarousel';
import { default as StudioVideo } from '../components/StudioVideo';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as nfDynamicUi from '../lib/dynamicUi';

export default function Page1() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [askAnythingDynamicUI, setAskAnythingDynamicUI] = useState({ isBusy: false });

  return (
    <SafeAreaView edges={["bottom","left","right"]} style={styles.screenRoot}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.askAnythingDynamicUI}><nfDynamicUi.DynamicUI id={""} nodeId={"d534d495-10fd-432e-bd87-1a14153a5cdb"} placeholder={"Ask anything…"} questionWidth={"fit"} answerWidth={"full"} questionAlign={"right"} onBusyChange={(b) => setAskAnythingDynamicUI((s) => ({ ...s, isBusy: b }))} /></View>
        <StudioCarousel style={styles.carousel} direction="horizontal" mode="default" loop={false} autoPlay={false} autoPlayInterval={3000} snapEnabled={true} gesturesEnabled={true} defaultIndex={0} itemWidthPct={100} slideGap={0} slideHeight={200} slideStyle={{ overflow: 'hidden', borderRadius: 8, backgroundColor: '#E5E7EB' }} pagination="dots" paginationPosition="inside" dotColor="rgba(0,0,0,0.25)" activeDotColor="#0077E6" dotSize={8} dotSpacing={6} showArrows={false} arrowColor="#FFFFFF" arrowSize={20} inactiveScale={1} inactiveOpacity={1}>
          <Image accessible={true} accessibilityRole="image" source={{ uri: "https://nativeflow.lovable.app/__l5e/assets-v1/ba47c0d1-e338-401b-8de6-874566fda65e/starter-1.jpg" }} accessibilityLabel="Slide 1" resizeMode="cover" style={[styles.slide1Image, { width: '100%', height: '100%', alignSelf: 'center', borderRadius: 8 }]} />
          <Image accessible={true} accessibilityRole="image" source={{ uri: "https://nativeflow.lovable.app/__l5e/assets-v1/f82ab717-12ea-459e-b15c-8d0638f01649/starter-2.jpg" }} accessibilityLabel="Slide 2" resizeMode="cover" style={[styles.slide2Image, { width: '100%', height: '100%', alignSelf: 'center', borderRadius: 8 }]} />
          <Image accessible={true} accessibilityRole="image" source={{ uri: "https://nativeflow.lovable.app/__l5e/assets-v1/deadc9be-0ce7-4698-819e-45259e80cca4/starter-3.jpg" }} accessibilityLabel="Slide 3" resizeMode="cover" style={[styles.slide3Image, { width: '100%', height: '100%', alignSelf: 'center', borderRadius: 8 }]} />
        </StudioCarousel>
        <StudioVideo source={null} contentFit="cover" objectFit="cover" controls={true} autoplay={false} loop={false} muted={true} borderRadius={0} style={[styles.video, { width: '100%', aspectRatio: 1.7777777777777777, alignSelf: 'center', borderRadius: 0, overflow: 'hidden' }]} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
  },
  containerContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%',
    alignSelf: 'stretch',
    flexGrow: 1,
    minHeight: '100%',
  },
  askAnythingDynamicUI: {
    minHeight: 320,
    flexGrow: 1,
    flexShrink: 0,
  },
  slide1Image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
  },
  slide2Image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
  },
  slide3Image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
  },
});

