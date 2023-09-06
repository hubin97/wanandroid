import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Dimensions, Image, FlatList, Alert } from "react-native";
import { styles as commonStyles } from "../../styles";
import userImg from "../../images/user.png";
import nextImg from "../../images/next.png";

const { width: KW, height: KH } = Dimensions.get('window');

export function MinePage({ navigation }) {
   
  const listDatas = [
    { title:  '教程', index: 0 },
    { title:  '工具', index: 1 },
    { title:  '积分', index: 2 },
    { title:  '源码', index: 3, link: 'https://github.com/hubin97/wanandroid' },
    { title:  '关于', index: 4, link: 'https://hubin97.github.io' },
  ]

  const _renderHeader = () => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => {
        Alert.alert('一个简单的react-native demo!')
      }}>
        <View style={styles.headerWrapper}>
          <Image style={styles.avatarStyle} source={userImg}/>
          <Text style={styles.titleStyle}>{'一个简单的react-native demo'}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const _renderItem = ({ item }) => {
    const { title, index } = item;
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.itemWrapper} onPress={() => {
        if (index > 2) {
          navigation.push('DetailPage', item)
          return
        }
        navigation.push('ChapterPage', item)
      }}>
        <Text style={styles.itemText}>{title}</Text>
        <Image style={styles.itemImg} source={nextImg}/>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={[commonStyles.containers, ]}>
      <FlatList
        style={[styles.listStyle]}
        data={listDatas}
        renderItem={_renderItem}
        ListHeaderComponent={_renderHeader}
      />
    </SafeAreaView>
  );
}
  
const styles = StyleSheet.create({
  listStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerWrapper: {
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#fff',
    paddingBottom: 40, 
  },
  avatarStyle: {
    width: 100,
    height: 100, 
    borderRadius: 50, 
    borderColor: '#eee', 
    borderWidth: 1
  },
  titleStyle: {
    padding: 10, 
    color: '#666',
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44, 
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  itemText: {
    marginHorizontal: 15, 
    fontSize: 15, 
    color: '#333',
  },
  itemImg: {
    width: 15, 
    height: 15, 
    marginRight: 15, 
    opacity: 0.3
  },
});