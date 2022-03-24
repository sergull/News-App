import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./NewsCard.style";


//(props) yerine ({news}) yazıp news.title yazılabilir
const NewsCard = (props)=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: props.news.imageUrl}}></Image>
            <View style = {styles.inner_container}>
                <Text style={styles.title}>{props.news.title}</Text>
                <Text style={styles.description}>{props.news.description}</Text>
                <Text style={styles.author}>{props.news.author}</Text>
            </View>
        </View>
    );
};

export default NewsCard;

