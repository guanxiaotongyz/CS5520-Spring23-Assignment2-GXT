import { View, Text, FlatList, StyleSheet, Pressable } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"

export default function EntriesList({ entries }) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
        <FlatList
            data={entries}
            renderItem={({ item }) => (
            //console.log("item", item),
            //console.log("item", item.amount),
            <Pressable
                style={styles.item}
                onPress={() => navigation.navigate("Add", { entry: item })}
            >
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.calories}>{item.calories}</Text>
            </Pressable>
            )}
            keyExtractor={(item) => item.id}
        />
        </View>
    )
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
    name: {
        fontSize: 32,
    },
    calories: {
        fontSize: 32,
    },
})

