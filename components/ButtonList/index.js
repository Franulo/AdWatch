import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import buttons from "./buttons";
import ButtonItem from "../ButtonItem";

const ButtonList = () => {
   return (
      <View style={styles.container}>
         <FlatList 
            data={buttons}
            renderItem={({item}) => <ButtonItem button={item}/>}
            showsVerticalScrollIndicator={true}
         />
      </View>
   );
};

export default ButtonList;