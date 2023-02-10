import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";

const AddEntries = () => {
  const [calories, setCalories] = React.useState();
  const [description, setDescription] = React.useState("");

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
        onChangeText={(newText)=>{
          setDescription(newText);
        }}></TextInput>

      {/* Reset Rressable */}
      <Pressable style={styles.button} onPress={()=>{
        setCalories("");
        setDescription("");
      }}>
        <Text>Reset</Text>
      </Pressable>

      {/* Submit Pressable */}

      <Pressable style={styles.button} onPress={()=>{
        console.log("calories = ", calories);
        console.log("description = ", description);
      }
      }>
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
