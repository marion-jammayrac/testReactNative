import React from 'react'
import { StyleSheet, View,  PanResponder, Dimensions, Button } from 'react-native'
import {getData, addData} from './config'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

class Test extends React.Component {

  state = {
      DataList: [],
      currentDataItem: null
    }

  onDataAdded = (Data) => {
     this.setState(prevState => ({
      DataList:[...prevState.DataList, Data]
    }))
  }

  onDataReceived = (DataList) => {
    this.setState(prevState => ({
      DataList: prevState.DataList = DataList
    }))
  }
  
  componentDidMount(){
    getData(onDataReceived);
  }

  render() {
    return (
      <SafeAreaView>
      <View style={styles.row}>
        <TextInput
        style={styles.input}
        placeholder="Add Data"
        value={this.state.currentDataItem}
        onChangeText={(text) => this.setState(prevState => ({
          currentDataItem:prevState.currentDataItem = text
        }))} />
        <Button
        title='Submit'
        style={style.Button}
        onPress={() => { }}
        />
       <FlatList
       style={styles.list}
       data={this.state.DataList}
       extraData={this.props.favoritesFilm}
       keyExtractor={(item) => item.id.toString()}
       renderItem={({item}) => {
         return (
           <ListItem
           title={item.name}
           subtitle={item.description}
           onPress={() => addData({
              name: this.state.currentDataItem,
              //AUTRES TRUC A COMPLETER ? 
           },
           this.onDataAdded)
          }
           />
         )
       }}
       ></FlatList>
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default Test 

//    "@react-native-firebase/app": "^7.2.1",


