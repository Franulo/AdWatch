import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";

const ButtonItem = (props) => {

   const { country, image } = props.button;

   return (
      <View style={styles.container}>
            <Pressable 
               style={styles.button}
               onPress={() => {console.warn({country})}}
            >
                  <Image style={styles.image} source={image} />
                  <Text style={styles.text}>{country}</Text>
            </Pressable>
      </View>
   );
};

export default ButtonItem;