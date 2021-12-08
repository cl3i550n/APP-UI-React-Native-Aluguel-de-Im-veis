import React from 'react';
import { SafeAreaView, View, StatusBar, Text, TextInput, FlatList, Image, Pressable, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import houses from '../../Mock/houses';
import COLORS from '../../Constants/colors';
import style from './Style';
const { width } = Dimensions.get('screen');

const Home = ({ navigation }) => {
  const optionsList = [
    { title: 'Comprar Casa', img: require('../../Assets/house1.jpg') },
    { title: 'Alugar', img: require('../../Assets/house2.jpg') },
  ];
  const categoryList = ['Popular', 'Recomendado', 'Mais Próximo'];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const ListOptions = () => {
    return (
      <View style={style.optionListsContainer}>
        {optionsList.map((option, index) => (
          <View style={style.optionsCard} key={index}>

            {/* Imagem da Casa */}
            <Image source={option.img} style={style.optionsCardImage} />

            {/* Titulo */}
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
              {option.title}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const Card = ({ house }) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate('HouseDetail', house)}>
        <View style={style.card}>
          {/* Imagem da Casa */}
          <Image source={house.image} style={style.cardImage} />
          <View style={{ marginTop: 10 }}>
            {/* Container de Titulo e Preço */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {house.title}
              </Text>
              <Text
                style={{ fontWeight: 'bold', color: COLORS.blue, fontSize: 16 }}>
                {house.price}
              </Text>
            </View>

            {/* Texto da Localização */}
            <Text style={{ color: COLORS.grey, fontSize: 14, marginTop: 5 }}>
              {house.location}
            </Text>

            {/* Container Facilidades */}
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
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
                <Text style={style.facilityText}>100m</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      {/* StatusBar Customizado */}
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      {/* Container do Header */}
      <View style={style.header}>
        <View>
          <Text style={{ color: COLORS.grey }}>Localização</Text>
          <Text style={{ color: COLORS.dark, fontSize: 20, fontWeight: 'bold' }}>
            Brasil
          </Text>
        </View>
        <Image
          style={style.profileImage}
          source={require('../../Assets/person.jpg')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Container Input e Avaliação */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={style.searchInputContainer}>
            <Icon name="search" color={COLORS.grey} size={25} />
            <TextInput placeholder="Pesquise por endereço, cidade ou local" />
          </View>

          <View style={style.sortBtn}>
            <Icon name="tune" color={COLORS.white} size={25} />
          </View>
        </View>

        {/* Renderizando Lista de Opções */}
          <ListOptions />

        {/* Renderizando Categorias */}
        <ListCategories />

        {/* Renderizando Card */}
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
          horizontal
          data={houses}
          renderItem={({ item }) => <Card house={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;