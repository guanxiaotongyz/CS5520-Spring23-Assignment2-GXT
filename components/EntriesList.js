import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import EditEntries from "../screens/EditEntries";
import PressableButton from "./PressableButton";

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
            {item.isWarning == true ? (
              <Entypo name="warning" size={24} color="black" />
            ) : null}
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.calories}>{item.calories}</Text>
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
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  description: {
    fontSize: 32,
  },
  calories: {
    fontSize: 32,
  },
});
