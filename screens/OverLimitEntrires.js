import { View, Text, Pressable, Button, StyleSheet} from "react-native";
import React from 'react'

// onPress function
const onPressFunction = ({navigation}) => {
    console.log("I'm pressed!");
    // navigate to Settings
    navigation.navigate('Settings');
  };
  

const OverLimitEntrires = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Messages!</Text>
          <Pressable onPress={() => onPressFunction({navigation})}
                     style={() => [{ backgroundColor: 'gray'}]} >
            <Text>Switch to Settings</Text>
          </Pressable>
        </View>
      );
}

export default OverLimitEntrires