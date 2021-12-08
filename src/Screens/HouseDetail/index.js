import React from 'react';
import { ImageBackground, SafeAreaView, View, Text, FlatList, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../Constants/colors';
import style from './Style';


const HouseDetail = ({ navigation, route }) => {
  const house = route.params;

  const InteriorCard = ({ interior }) => {
    return <Image source={interior} style={style.interiorImage} />;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Imagem da Casa */}
        <View style={style.backgroundImageContainer}>
          <ImageBackground style={style.backgroundImage} source={house.image}>
            <View style={style.header}>
              <View style={style.headerBtn}>
                <Icon
                  name="arrow-back-ios"
                  size={20}
                  onPress={() => navigation.goBack()}
                />
              </View>
              <View style={style.headerBtn}>
                <Icon name="favorite" size={20} color={COLORS.red} />
              </View>
            </View>
          </ImageBackground>

          {/* View da VirtualTag  */}
          <View style={style.virtualTag}>
            <Text style={{ color: COLORS.white }}>Visita Virtual</Text>
          </View>
        </View>

        <View style={style.detailsContainer}>
          {/* Container de Nome e Avaliação */}
          <View style={{}}>
            <Text style={{ flexDirection: 'row', fontSize: 20, fontWeight: 'bold' }}>
              {house.title}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={style.ratingTag}>
                <Text style={{ color: COLORS.white }}>4.8</Text>
              </View>
              <Text style={{ fontSize: 13, marginLeft: 5 }}>155 Avaliações</Text>
            </View>
          </View>

          {/* Texto da Localização */}
          <Text style={{ fontSize: 16, color: COLORS.grey }}>
            {house.location}
          </Text>

          {/* Container Facilidades */}
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={style.facility}>
              <Icon name="hotel" size={18} />
              <Text style={style.facilityText}>2</Text>
            </View>
            <View style={style.facility}>
              <Icon name="bathtub" size={18} />
              <Text style={style.facilityText}>2</Text>
            </View>
            <View style={style.facility}>
              <Icon name="aspect-ratio" size={18} />
              <Text style={style.facilityText}>100m de espaço</Text>
            </View>
          </View>
          <Text style={{ marginTop: 20, color: COLORS.grey }}>
            {house.details}
          </Text>

          {/* Lista Iterior */}
          <FlatList
            contentContainerStyle={{ marginTop: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, key) => key.toString()}
            data={house.interiors}
            renderItem={({ item }) => <InteriorCard interior={item} />}
          />

          {/* Container Footer */}
          <View style={style.footer}>
            <View>
              <Text
                style={{ color: COLORS.blue, fontWeight: 'bold', fontSize: 18 }}>
                {house.price}
              </Text>
              <Text
                style={{ fontSize: 12, color: COLORS.grey, fontWeight: 'bold' }}>
                Valor Total
              </Text>
            </View>
            <View style={style.bookNowBtn}>
              <Text style={{ color: COLORS.white }}>Agendar Visita!</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HouseDetail;
