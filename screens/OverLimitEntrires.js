import { View, Text, Pressable, Button, StyleSheet} from "react-native";
import React, { useEffect } from 'react'
import {collection, doc,  getDocs, getDoc, onSnapshot} from 'firebase/firestore'
import { firestore } from "../firebase/firebase-setup"
import EntriesList from '../components/EntriesList'


const OverLimitEntrires = ({navigation}) => {
    const [overLimitEntrires, setOverLimitEntrires] = React.useState([])

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestore, "entries"), (docSnap) => {
              if (docSnap.empty) {
                console.log("No matching documents.");
                setOverLimitEntrires([]);
                return;
            }
            else {
                const moreThan500 = [];
                docSnap.docs.forEach((docdata) => {
                  if(docdata.data().calories >= 500){
                    moreThan500.push({...docdata.data() , id: docdata.id})
                  }
                })
                setOverLimitEntrires(moreThan500)
            }
        })
        return unsubscribe
    }, [])


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>OverLimitEntrires</Text>
          <Text>Firebase crud</Text>
          <EntriesList entries={overLimitEntrires} />
        </View>
      );
}

export default OverLimitEntrires