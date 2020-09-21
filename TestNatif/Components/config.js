/*
import firebase from 'react-native-firebase'

export function addData(Data, addDatas){
firebase.firestore()
.collection('Datas')
.add({
    name: Data.name,
    description: Data.description
}).then((snapshot) => snapshot.get())
.then((Datadata) => addComplete.Datadata.data())
.catch((error) => console.log(error))
}

export async function getData(DataRetreived){
    
    var DataList = []
    var snapshot = await firebase.firestore()
    .collection('Data1').get()

    snapshot.forEach((doc) => {
        DataList.push(doc.data());
    });

    DataRetreived(DataList)
}
<script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>


var firebaseConfig = {
  apiKey: "AIzaSyAv8TZMuYduZn1qacuiuHcr062sP_wwvko",
  authDomain: "testbmpm-193cb.firebaseapp.com",
  databaseURL: "https://testbmpm-193cb.firebaseio.com",
  projectId: "testbmpm-193cb",
  storageBucket: "testbmpm-193cb.appspot.com",
  messagingSenderId: "283655634117",
  appId: "1:283655634117:web:0081e751e0bc94d40c04ac"
};

firebase.initializeApp(firebaseConfig);

/*

export default {
    apiKey: "AIzaSyAv8TZMuYduZn1qacuiuHcr062sP_wwvko",
    authDomain: "testbmpm-193cb.firebaseapp.com",
    databaseURL: "https://testbmpm-193cb.firebaseio.com",
    projectId: "testbmpm-193cb",
     }; 

     */

    