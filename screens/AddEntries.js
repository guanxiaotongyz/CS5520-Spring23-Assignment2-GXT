import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import React from "react";
import {
  addEntriesFunction,
} from "../firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "../components/PressableButton";
import colors from "../styles /colors";

const AddEntries = () => {
  const [calories, setCalories] = React.useState();
  const [description, setDescription] = React.useState("");
  const [isWarning, setIsWarning] = React.useState(false);
  const navigation = useNavigation();

  // invaild input check
  const checkInput = () => {
    // if calories is null or empty or less than 0
    if (calories == null || calories == "" || parseInt(calories) < 0 || isNaN(calories)) {
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
    Alert.alert(
      "Invaild input",
      "Please enter correct calories and description",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]
    );
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
    <View style={styles.container}>
      <View style={styles.caloriesInputContainer}>
        <Text style={styles.text}>Calories: </Text>
        <TextInput
          value={calories}
          style={styles.input}
          onChangeText={(newText) => {
            setCalories(newText);
          }}
        ></TextInput>
      </View>

      <View style={styles.descriptionInputContainer}>
        <Text style={styles.text}>Description:</Text>
        <TextInput
          value={description}
          style={styles.inputDescription}
          onChangeText={(newText) => {
            setDescription(newText);
          }}
        ></TextInput>
      </View>

      {/* Reset Rressable with PressableButtom */}

      <View style={styles.twoButtonContainer}>
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
      <PressableButton style={styles.button} pressHandler={submitFunction}>
        <Text>Submit</Text>
      </PressableButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    radius: 10,
  },
  inputDescription: {
    height: 80,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    radius: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.lightpurple,
    padding: 10,
    height: 40,
    width: 90,
    borderRadius: 10,
  },
  caloriesInputContainer: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: "row",
  },
  descriptionInputContainer: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  twoButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 80,
    marginRight: 80,
  },
  container: {
    flex: 1,
    backgroundColor: colors.lightgreenblue,
  },
});

export default AddEntries;
