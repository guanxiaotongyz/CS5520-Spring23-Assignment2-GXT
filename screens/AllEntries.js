import { View, Text, Button } from 'react-native'
import React from 'react'
import {collection, doc,  getDocs, getDoc} from 'firebase/firestore'
import {db} from '../firebase/config'

// Get all entries from firebase
function getAllEntries() {
    getDocs(collection(db, "entries")).then((docSnap) => {
        let entries = []
        docSnap.forEach((doc) => {
            entries.push({...doc.data() , id: doc.id})
        })
        console.log("document" ,entries)
        })
}


const AllEntries = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>All Entries information</Text>
          <Text>Firebase crud</Text>
          {/*show all entries*/}
          <Button title="Show all entries" onPress={getAllEntries}></Button>
        </View>
      );
}

export default AllEntries