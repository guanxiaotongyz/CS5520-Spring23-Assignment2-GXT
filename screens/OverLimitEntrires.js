import { View, Text, Pressable, Button, StyleSheet} from "react-native";
import React, { useEffect } from 'react'
import {collection, doc,  getDocs, getDoc, onSnapshot} from 'firebase/firestore'
import { firestore } from "../firebase/firebase-setup"
import EntriesList from '../components/EntriesList'
import colors from '../styles /colors'


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
                const isLimitWarning = [];
                docSnap.docs.forEach((docdata) => {
                  if(docdata.data().isWarning === true){
                    isLimitWarning.push({...docdata.data() , id: docdata.id})
                  }
                })
                setOverLimitEntrires(isLimitWarning)
            }
        })
        return unsubscribe
    }, [])


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"  ,  backgroundColor: colors.lightblueyellow  }}>
          <EntriesList entries={overLimitEntrires} />
        </View>
      );
}

export default OverLimitEntrires