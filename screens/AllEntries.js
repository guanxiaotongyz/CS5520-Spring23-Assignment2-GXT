import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import {collection, doc,  getDocs, getDoc, onSnapshot, QuerySnapshot} from 'firebase/firestore'
import { firestore } from "../firebase/firebase-setup"
import EntriesList from '../components/EntriesList'
import colors from '../styles /colors'

const AllEntries = () => {
    const [entries, setEntries] = React.useState([])

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestore, "entries"), (docSnap) => {
             if (docSnap.empty) {
                // no data 
                console.log("No data.");
                setEntries([]);
                return;
            }
            else{
                let docs = []
                docSnap.forEach((snap) => {
                     //console.log("ID====" , snap.id);
                    docs.push({...snap.data(), id: snap.id})
                }
                )
                // console.log("docs====", docs)
                setEntries(docs)
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