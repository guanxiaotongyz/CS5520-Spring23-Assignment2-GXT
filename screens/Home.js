import * as React from "react";
import { View, Text, Pressable, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./AllEntries";
import OverLimitEntrires from "./OverLimitEntrires";
import PressableButton from "../components/PressableButton";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import colors from "../styles /colors";

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
    // add icon to the two button tab
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "All Entries") {
            return <Feather name="info" size={23} color={color} />;
          } else if (route.name === "Over-limit Entries") {
            return <Ionicons name="warning-outline" size={23} color={color} />
          }
        },
        tabBarStyle: { backgroundColor: colors.lightgreenblue },
        tabBarActiveTintColor: colors.darkblue,
        tabBarInactiveTintColor: colors.grey,
        headerStyle: { backgroundColor: colors.lightgreenblue },
        headerTintColor: colors.darkblue,
        


      }
      
      )

      
     } 
    >
      <Tab.Screen
        // backgroundColor={colors.lightgreenblue}

        name="All Entries"
        component={AllEntries}
        options={() => {
          return {
            headerRight: () => (
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
              addPrssableSign
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
};

const Styles = StyleSheet.create({
  button: {
    color: colors.darkblue,
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default Home;
