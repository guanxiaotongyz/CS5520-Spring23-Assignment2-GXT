import { View, Text, TextInput, StyleSheet, Pressable,Alert } from "react-native";
import React from "react";
import { firestore } from "../firebase/firebase-setup";
import { addEntriesFunction , deleteEntriesFunction } from "../firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "../components/PressableButton";


const AddEntries = () => {
  const [calories, setCalories] = React.useState();
  const [description, setDescription] = React.useState("");
  const [isWarning, setIsWarning] = React.useState(false);
  const navigation = useNavigation();

  // invaild input check
  const checkInput = () => {
    // if calories is null or empty or less than 0
    if (calories == null || calories == "" || parseInt(calories) < 0) {
      invaildAlert();
      return false;
    }
    // if description is null or empty
    if (description == null || description == "") {
      invaildAlert();
      return false;
    }
    return true;
  };

  // create invaild alert function
  const invaildAlert = () => {
    Alert.alert("Invaild input",
    "Please enter correct calories and description",
    [
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
      }
    ]
    )
  };


  const submitFunction = () => {
    if (checkInput() == false) {
      return;
    }
    const data = {
      calories: calories,
      description: description,
      isWarning: isWarning,
    };
    addEntriesFunction(data);
    navigation.pop();
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

      {/* Reset Rressable with PressableButtom */}
      <PressableButton
        style={styles.button}
        pressHandler={() => {
          setCalories("");
          setDescription("");
        }}
      >
        <Text>Reset</Text>
      </PressableButton>


      {/* Submit Pressable with  PressableButtom*/}
      <PressableButton
        style={styles.button}
        pressHandler={submitFunction}
      >
        <Text>Submit</Text>
      </PressableButton>
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
