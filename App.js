import * as React from "react";
import { View, Text, Pressable, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import EditEntries from "./screens/EditEntries";
import AddExpense from "./screens/AddEntries";
import colors from "./styles /colors";

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
        <Stack.Screen
          name="Add"
          component={AddExpense}
          options={{
            headerStyle: {
              backgroundColor: colors.rebecapurple,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontSize: 18,
            },
          }}
        />
        <Stack.Screen
          name="EditEntries"
          component={EditEntries}
          options={{
            headerStyle: {
              backgroundColor: colors.rebecapurple,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontSize: 18,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
