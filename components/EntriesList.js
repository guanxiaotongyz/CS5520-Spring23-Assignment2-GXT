import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import EditEntries from "../screens/EditEntries";
import PressableButton from "./PressableButton";
import colors from "../styles /colors";

export default function EntriesList({ entries }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        renderItem={({ item }) => (
          // console.log("item", item),
          // console.log("item", item.isWarning),

          <PressableButton
            style={styles.item}
            pressHandler={() =>
              navigation.navigate("EditEntries", {
                calories: item.calories,
                description: item.description,
                isWarning: item.isWarning,
                id: item.id,
              })
            }
          >
            <View style={styles.information}>
              <Text style={styles.description}>{item.description}</Text>

              <View style={styles.warmingContainer}>
                {item.isWarning == true ? (
                  <Entypo name="warning" size={22} color={colors.yellow} />
                ) : null}

                <View style={styles.caloriesContainer}>
                  <Text style={styles.calories}>{item.calories}</Text>
                </View>
              </View>
            </View>
          </PressableButton>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: colors.rebecapurple,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  description: {
    marginTop: 5,
    fontSize: 18,
    color: colors.white,
    fontWeight: "bold",
  },
  calories: {
    fontSize: 18,
    color: colors.darkblue,
    fontWeight: "bold",
    alignSelf: "center",
  },
  caloriesContainer: {
    marginTop: 5,
    marginLeft: 3,
    backgroundColor: colors.white,
    borderRadius: 5,
    height: 22,
    width: 70,
  },
  information: {
    marginHorizontal: 10,
    height: 35,
    width: 300,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  warmingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
