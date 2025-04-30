import { Animated, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect, useRef, useState} from 'react'
// import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'
import { SliderData } from '../../helper/DummyData';
import { AppText, BLACK, EIGHTEEN, FIFTEEN, GRY, MONTSERRAT_LIGHT, MONTSERRAT_SEMI_BOLD, TWELVE } from '../AppText';
const { width } = Dimensions.get('window');


const IntroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  useEffect(() => {
    const autoplay = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= SliderData.length) {
        nextIndex = 0;
      }
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); // 3 seconds interval

    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const onViewRef = React.useRef(({ changed }) => {
    setCurrentIndex(changed[0].index);
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8} style={{ width: width,marginVertical:"5%", borderRadius: 10, overflow: 'hidden' }}>
      <FastImage
        source={item.image}
        style={{ width: '100%', height: 300, borderRadius: 10 }}
        resizeMode='contain'
      />
      <View style={{ alignItems: "center"}}>
          <View style={{ width: "80%", marginVertical: 20 }}>
            <AppText
              color={BLACK}
              weight={MONTSERRAT_SEMI_BOLD}
              type={FIFTEEN}
              style={{textAlign: "center"}}
            >
              {item?.title}{" "}
            </AppText>
          </View>
          <View style={{ width: "80%" }}>
            <AppText color={GRY} weight={MONTSERRAT_LIGHT} type={TWELVE} style={{textAlign: "center"}}>
              {item?.desc}{" "}
            </AppText>
          </View>
        </View>
    </TouchableOpacity>
  );
  const Dots = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center',marginLeft:'-5%' }}>
        {SliderData.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <View
              key={index}
              style={{
                width: isActive ?8 : 8,
                height: 8,
                borderRadius: 5,
                backgroundColor: isActive ? '#1399FF' : '#D3D3D3',
                marginHorizontal: 3,
                transition: 'width 0.3s',
                borderWidth:1,
                borderColor:"#1399FF"
              }}
            />
          );
        })}
      </View>
    );
  };
  return (
    <View>
    <FlatList
      data={SliderData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
      ref={flatListRef}
    />
    <Dots />
  </View>
  )
}

export default IntroSlider

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
})