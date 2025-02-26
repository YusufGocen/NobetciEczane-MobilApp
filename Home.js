import React, { useState } from "react";
import { View, Text, TextInput, FlatList,StyleSheet, Pressable } from "react-native";
import { GetPharmacies } from "./Api";

const Home = () => {
  const [city, setCity] = useState(""); // Kullanıcının girdiği şehir
  const [district, setDistrict] = useState(""); // Kullanıcının girdiği ilçe
  const [pharmacies, setPharmacies] = useState([]);

  const handleSearch = async () => {
    if (city.trim() === "" || district.trim() === "") {
      alert("Lütfen şehir ve ilçe adı girin!");
      return;
    }

    const formattedCity = city.trim(); 
    const formattedDistrict = district.trim();

    const data = await GetPharmacies(formattedCity, formattedDistrict);
    setPharmacies(data?.data || []);
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
          <Text style={styles.Text}>Nöbetçi Eczane Ara</Text>
          <TextInput
            placeholder="Şehir adı girin..."
            placeholderTextColor='#ccc'
            value={city}
            onChangeText={setCity}
            style={styles.TextInput}
          />
          <TextInput
            placeholder="İlçe adı girin..."
            placeholderTextColor='#ccc'
            value={district}
            onChangeText={setDistrict}
            style={styles.TextInput}
          />
          <Pressable onPress={handleSearch}>
            <Text style={styles.Button}>Ara</Text>
          </Pressable>
      </View> 

      <View style={{flex:4,padding:10}}>
      <FlatList
        data={pharmacies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{padding: 10, borderBottomWidth: 1, borderColor: "#ddd" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold",color:'white'}}>{item.pharmacyName}</Text>
            <Text style={{paddingTop:10 ,color:'#ccc'}}>{item.address}</Text>
            <Text style={{paddingTop:10 ,color:'#ccc'}}>{item.phone}</Text>
          </View>
        )}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed313e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search:{
    flex:3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text:{
   color:'white',
   fontSize:25,
   padding:20
  },
  TextInput:{
    borderBottomWidth:1,
    borderBottomColor:'white',
    paddingTop:20,
    width:200,
    marginVertical:10,
    color:'white'
  },
  Button:{
    backgroundColor:'#2196f2',
    color:'white',
    width:180,
    height:30,
    textAlign:'center',
    padding:5,
    borderRadius:5,
    marginTop:20,
    fontSize:18
  }
});

export default Home;
