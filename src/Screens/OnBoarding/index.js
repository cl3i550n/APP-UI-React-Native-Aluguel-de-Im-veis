import React from 'react';
import { StatusBar, View, Text, SafeAreaView, Image, Pressable } from 'react-native';
import COLORS from '../../Constants/colors';
import style from './Style';

const OnBoarding = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar translucent backgroundColor={COLORS.tranparent} />
        {/* Onboarding Image */}
        <Image
          source={require('../../Assets/onboardImage.jpg')}
          style={style.image}
        />

        {/* Indicator container */}
        <View style={style.indicatorContainer}>
          <View style={style.indicator} />
          <View style={style.indicator} />
          <View style={[style.indicator, style.indicatorActive]} />
        </View>

        {/* Container Titulo e texto */}
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          {/* Container Titulo */}
          <View>
            <Text style={style.title}>Encontre o seu</Text>
            <Text style={style.title}>doce lar</Text>
          </View>

          {/* Container Texto  */}
          <View style={{ marginTop: 10 }}>
            <Text style={style.textStyle}>
              Agende visitas com apenas alguns cliques
            </Text>
            <Text style={style.textStyle}>visite em apenas alguns cliques</Text>
          </View>
        </View>

        {/* Container do Botão  */}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 40,
          }}>
          {/* Botão */}
          <Pressable onPress={() => navigation.navigate('Home')}>
            <View style={style.btn}>
              <Text style={{ color: 'white' }}>Vamos Lá!</Text>
            </View>
          </Pressable>
        </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
