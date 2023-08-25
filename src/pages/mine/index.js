import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles";

export function MinePage() {
    return (
      <SafeAreaView style={[styles.containers]}>
        <View style={{ flex: 1,  backgroundColor: 'yellow',  justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff',}}>Mine!</Text>
        </View>
      </SafeAreaView>
    );
}
  