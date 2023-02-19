import * as React from "react";
import { View, Text, Pressable, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./AllEntries";
import OverLimitEntrires from "./OverLimitEntrires";
import PressableButton from "../components/PressableButton";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {

  let addPrssableSign = (
    <PressableButton
      pressHandler={() => {
        navigation.navigate("Add");
      }}
    >
      <Text  style={Styles.button}> + </Text>
    </PressableButton>
  );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="All Entries"
        component={AllEntries}
        options={() => {
          return {
            headerRight: () => (
              // <Button
              //   onPress={() => {
              //     navigation.navigate("Add");
              //   }}
              //   title="+"
              // ></Button>
              addPrssableSign
            ),
          };
        }}
      />
      <Tab.Screen
        name="Over-limit Entries"
        component={OverLimitEntrires}
        options={() => {
          return {
            headerRight: () => (
              // <Button
              //   onPress={() => {
              //     navigation.navigate("Add");
              //   }}
              //   title="+"
              // ></Button>
              addPrssableSign
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
};

const Styles = StyleSheet.create({
  plusSign: {
    color: "black",
    marginRight: 20,
    fontSize: 100,
    fontWeight: "300",
  },
});

export default Home;
