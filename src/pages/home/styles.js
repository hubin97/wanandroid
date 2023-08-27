import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listStyle: {
      flex: 1, 
      backgroundColor: '#fff'
    },
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
      padding: 10, 
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