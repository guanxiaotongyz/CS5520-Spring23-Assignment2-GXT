import * as React from "react";
import { View, Text, Pressable, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import EditEntries from "./screens/EditEntries";
import AddExpense from "./screens/AddEntries";



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add" component={AddExpense} />
        <Stack.Screen name="EditEntries" component={EditEntries} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
