import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import {collection, doc,  getDocs, getDoc, onSnapshot} from 'firebase/firestore'
import { firestore } from "../firebase/firebase-setup"
import EntriesList from '../components/EntriesList'
import colors from '../styles /colors'

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
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor: colors.lightblueyellow }}>
          <EntriesList entries={entries} />
        </View>
      );
}

export default AllEntries