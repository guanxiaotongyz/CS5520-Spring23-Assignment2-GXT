import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import {collection, doc,  getDocs, getDoc, onSnapshot} from 'firebase/firestore'
import { firestore } from "../firebase/firebase-setup"
import EntriesList from '../components/EntriesList'

// Get all entries from firebase
// function getAllEntries() {
//     getDocs(collection(firestore, "entries")).then((docSnap) => {
//         let entries = []
//         docSnap.forEach((doc) => {
//             entries.push({...doc.data() , id: doc.id})
//         })
//         console.log("document" ,entries)
//         })
// }


const AllEntries = () => {
    const [entries, setEntries] = React.useState([])

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestore, "entries"), (docSnap) => {
             if (docSnap.empty) {
                console.log("No matching documents.");
                setEntries([]);
                return;
            }
            else {
                setEntries(docSnap.docs.map((docdata) => {
                  let data = docdata.data()
                  data= {...data, id: docdata.id}
                  return data
                }))
            }
        })
        return unsubscribe
    }, [])


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>All Entries information</Text>
          <Text>Firebase crud</Text>
          <EntriesList entries={entries} />
          {/*show all entries*/}
          {/* <Button title="Show all entries" onPress={getAllEntries}></Button> */}
        </View>
      );
}

export default AllEntries