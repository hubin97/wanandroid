import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles";

export function ProjectPage() {
    return (
      <SafeAreaView style={[styles.containers]}>
        <View style={{ flex: 1,  backgroundColor: 'gray',  justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff',}}>ProjectPage!</Text>
        </View>
      </SafeAreaView>
    );
  }
  