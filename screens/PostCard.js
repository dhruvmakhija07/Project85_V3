import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends Component {
    render(){
        return(
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                            source={require("../assetss/profile_img.png")}
                            style={styles.profileImage}
                            />
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={require("../assetss/post.jpeg")} style={styles.postImage}/>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>{this.props.post.caption}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                            <Text style={styles.likeText}>12K</Text>
                        </View>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
    },
    cardContainer: {
      marginTop: -20,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: "#21345D",
      borderRadius: 20,
      height: undefined,
      padding: 10,
    },
    authorContainer: {
      flexDirection: 'row',
    },
    authorImageContainer: {
      flex: 1
    },
    authorNameContainer: {
      fontSize: 25,
      color: 'white'
    },
    authorNameText:{
      fontSize: 15,
      color: 'white'
    },
    captionContainer: {
      marginTop: 5
    },
    captionText: {
      fontSize: 13,
      color: 'white',
      paddingTop: RFValue(10)
     }, 
    actionContainer: { 
      justifyContent: "center",
      alignItems: "center", 
      padding: RFValue(10) 
    }, 
    likeButton: { 
      width: RFValue(160), 
      height: RFValue(40), 
      justifyContent: "center", 
      alignItems: "center", 
      flexDirection: "row", 
      backgroundColor: "#eb3948", 
      borderRadius: RFValue(30) 
    }, 
    likeText: { 
      color: "white", 
      fontSize: RFValue(25), 
      marginLeft: RFValue(5) 
    } 
  });