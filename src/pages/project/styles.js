import { Dimensions, StyleSheet } from "react-native";
const {width: kW, height: kH} = Dimensions.get('window');

export const styles = StyleSheet.create({
    listStyle: {
      flex: 1, 
      backgroundColor: '#fff',
    },
    // naviWrapper: {
    //   position: 'absolute', 
    //   zIndex: 1000, 
    //   width: kW, 
    //   backgroundColor: '#fff'
    // },
    // naviItemStyle: {
    //   justifyContent: 'center', 
    //   alignItems: 'center',
    // },
    // naviTextStyle: {
    //   fontSize: 17, 
    //   fontWeight: '700', 
    //   color: '#333', 
    //   lineHeight: 44
    // },
    itemWrapper: {
      flexDirection: 'row-reverse', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      borderBottomColor: '#eee', 
      borderBottomWidth: 1, 
      minHeight: 60, 
    },
    nextStyle: {
      width: 15, 
      height: 15, 
      marginRight: 15, 
      opacity: 0.5
    },
    contentStyle: {
      flex: 1, 
      flexDirection: 'row-reverse', 
      justifyContent: 'space-between'
    },
    rightItemStyle: {
      flex: 1, 
      justifyContent: 'space-between',
      margin: 10, 
      marginLeft: 0,
      backgroundColor: '#fff'
    },
    titleStyle: {
      fontSize: 15, 
      fontWeight: '600', 
      color: '#333'
    },
    bottomStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    authorStyle: {
      fontSize: 12, 
      color: '#666'
    },
    dateStyle: {
      fontSize: 12, 
      color: '#999'
    },
  });