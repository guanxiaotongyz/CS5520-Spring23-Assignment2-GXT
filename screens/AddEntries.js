import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";
import { firestore } from "../firebase/firebase-setup";
import { addEntriesFunction } from "../firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const AddEntries = () => {
  const [calories, setCalories] = React.useState();
  const [description, setDescription] = React.useState("");
  const [isWarning, setIsWarning] = React.useState(false);
  const navigation = useNavigation();

  async function isWarningFunction() {
    const caloriesInt = parseInt(calories);
    if (caloriesInt >= 500) {
      setIsWarning(true);
    } else {
      setIsWarning(false);
    }
  }
  const submitFunction = () => {
    // build aysnc isWarning function to check if calories is greater than 500
    // if calories is greater than 500, set isWarning to true
    // if calories is less than 500, set isWarning to false
    // add isWarning to the data object
    // add data object to firestore
    // navigate back to the home screen
  
    isWarningFunction();
    const data = {
      calories: calories,
      description: description,
      isWarning: isWarning,
    };
    addEntriesFunction(data);
    navigation.pop();

    // const caloriesInt = parseInt(calories);
    // if (caloriesInt >= 500) {
    //   setIsWarning(true);
    // } else {
    //   setIsWarning(false);
    // }

    // console.log(caloriesInt , "isWarning====== ==========", isWarning);

    // const data = {
    //   calories: calories,
    //   description: description,
    //   isWarning: isWarning,
    // };
    // addEntriesFunction(data);
    // navigation.pop();
  };

  return (
    <View>
      <Text>Calories</Text>
      <TextInput
        value={calories}
        style={styles.input}
        onChangeText={(newText) => {
          setCalories(newText);
        }}
      ></TextInput>

      <Text>Description</Text>
      <TextInput
        value={description}
        style={styles.input}
        onChangeText={(newText) => {
          setDescription(newText);
        }}
      ></TextInput>

      {/* Reset Rressable */}
      <Pressable
        style={styles.button}
        onPress={() => {
          setCalories("");
          setDescription("");
        }}
      >
        <Text>Reset</Text>
      </Pressable>

      {/* Submit Pressable */}
      <Pressable style={styles.button} onPress={submitFunction}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default AddEntries;
