import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
import news_data from "./news_data.json";
import NewsCard from './components/NewsCard';
import news_banner_data from "./news_banner_data.json";


export default function App() {

  //arrow functionı altta sıfırdan çok kez oluşturmaktansa burada 1 kez oluşrup çok kez kullanırsın
  const renderNews=({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style= {styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList 
        //hiyeraşiden dolayı sayfa alta inse de üstteki component flatlist ile birlikte alta inmesin
        ListHeaderComponent={()=>(<ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {
            //image to array
            news_banner_data.map(bannerNews => 
            <Image style={styles.bannerImage} source={{uri:bannerNews.imageUrl}} />)
          }
        </ScrollView>)}
        //id ye çevirme
        keyExtractor={(item)=>item.u_id.toString()}
        data={news_data}
        //bir json objesi varsa onu parçalayıp içinden veriyi çekmek için {} kullanılır
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"#eceff1"
  },
  bannerImage:{
    height:Dimensions.get("window").height / 5,
    width:Dimensions.get("window").width / 2,
  },
  headerText:{
    fontWeight:"bold",
    fontSize:50,
    textAlign:"center",
  }
});
