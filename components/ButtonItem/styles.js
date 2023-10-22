import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      width: '100%',
      padding: 5,
   },
   button: {
      height: 120,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#666',
   },
   text: {
      fontSize: 12,
      fontWeight: '500',
      color: '#FFF',
   },
   image: {
      resizeMode: 'stretch',
      height: '100%',
      width: '100%',
      borderRadius: 20,
      position: 'absolute',
   }
});

export default styles;