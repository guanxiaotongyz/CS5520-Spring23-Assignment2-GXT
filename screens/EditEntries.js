import { View, Text, FlatList, StyleSheet, Pressable } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import {deleteEntriesFunction, updateEntriesFunction } from "../firebase/firestore";

const EditEntries = (props) => {

  const navigation = useNavigation()
  
  return (
    <View>
      <Text>EditEntries Test</Text>

      {/* Update pressable if params.calories more than 500 */}
      {props.route.params.calories > 500 ? (
        <Pressable
          style={styles.button}
          onPress={() => {
            updateEntriesFunction(props.route.params.id , {
              calories: props.route.params.calories,
              description: props.route.params.description,
              isWarning: false,
            });
            navigation.pop();
          }}
        >
          <Text>Update</Text>
        </Pressable>
      ) : (
        null
      )}
     


      {/* Delete pressable */}
      <Pressable
        style={styles.button}
        onPress={() => {
          deleteEntriesFunction(props.route.params.id);
          navigation.pop();
        }}
      >
        <Text>Delete</Text>
      </Pressable>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
})

export default EditEntries