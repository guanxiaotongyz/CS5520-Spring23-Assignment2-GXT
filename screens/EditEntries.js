import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  deleteEntriesFunction,
  updateEntriesFunction,
} from "../firebase/firestore";
import PressableButton from "../components/PressableButton";
import CardEditPage from "../components/CardEditPage";
import colors from "../styles /colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EditEntries = (props) => {
  const navigation = useNavigation();

  const pressUpdateHandler = () => {
    updateEntriesFunction(props.route.params.id, {
      calories: props.route.params.calories,
      description: props.route.params.description,
      isWarning: false,
    });
    navigation.pop();
  };

  const pressDeleteHandler = () => {
    deleteEntriesFunction(props.route.params.id);
    navigation.pop();
  };

  const createTwoButtonAlertUpdate = () =>
    Alert.alert(
      "Important",
      "Are you sure you want to make this item reviewed ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => pressUpdateHandler() },
      ],
      { cancelable: false }
    );

  const createTwoButtonAlertDelete = () =>
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this item ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },

        { text: "OK", onPress: () => pressDeleteHandler() },
      ],
      { cancelable: false }
    );



  return (
  
    <View style={styles.container}>
    <CardEditPage>
      {/* show the information */}
      <View style={styles.info}>
        <Text style={styles.text}>Calories: {props.route.params.calories}</Text>
        <Text style={styles.text}>
          Description: {props.route.params.description}
        </Text>
      </View>

      {/* Update pressable if params.calories more than 500 */}

      <View
        style={
          (props.route.params.calories > 500) &
          (props.route.params.isWarning == true)
            ? styles.twoButtom
            : styles.oneButtom
        }
      >
        {(props.route.params.calories > 500) &
        (props.route.params.isWarning == true) ? (
          <PressableButton
            style={styles.button}

            pressHandler={createTwoButtonAlertUpdate}
          >
            <AntDesign name="check" size={24} color={colors.white} />
          </PressableButton>
        ) : null}

        {/* Delete pressable */}

        <PressableButton
          style={styles.button}
          pressHandler={createTwoButtonAlertDelete}
        >
          <MaterialCommunityIcons
            name="delete-outline"
            size={24}
            color={colors.white}
          />
        </PressableButton>
      </View>
    </CardEditPage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgreenblue,
  },
  button: {
    backgroundColor: colors.darkblue,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkblue,
  },
  twoButtom: {
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  oneButtom: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default EditEntries;
