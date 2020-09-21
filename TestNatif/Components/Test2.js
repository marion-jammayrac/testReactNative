// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import FilmList from './FilmList'



class Test2 extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = ""
    this.state = {
      structures: [],
      isLoading: false
    }
   // this._loadDATA = this._loadDATA.bind(this)
  }



  /*
  _loadDATA() {
    if (this.searchedText.length > 0) { //on cherche un truc
      this.setState({ isLoading: true })
      /*
      getFilmsFromApiWithSearchedText(this.searchedText, this.page+1)
      .then(data => {
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({
            films: [ ...this.state.films, ...data.results ],
            isLoading: false
          })
      })
      // VIRER AU DESSUS
      getDataFromDB(this.searchedText).then(data => {
        this.setState({
          structures: [...this.state.structures, ... data.results],
          isLoading: false
        })
      })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text
  }

  _searchDATA() {
    this.setState({
      structures: [],
    }, () => {
        this._loadDATA()
    })
  }

  _displayDetailForDATA = (idStructure) => {
    console.log("Display structure with id " + idStructure)
    this.props.navigation.navigate("StructureDetail", { idStructure: idStructure })
  }

    */

   _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }
  _displayTEST() {
        <Text style={styles.titleText}>COUCOU</Text>
  }

  render() {
    var Affichage = ""
    var Ballec =""
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Structure :'
         // onChangeText={(text) => this._searchTextInputChanged(text)}
         // onSubmitEditing={() => this._searchDATA()}
         onChangeText={(text) => (Affichage=this.text) }
        />
        <Button title='Rechercher' onPress={ // () => this._searchDATA() 
        () => this._displayTEST
        }/>
        <Text style={styles.titleText}>{Affichage}</Text>
        <Text style={styles.titleText}>Marre</Text>
        <FilmList
         // structures={this.state.structures}
         // navigation={this.props.navigation}
         // _loadDATA={this._loadDATA}
          favoriteList={false} // Ici j'ai simplement ajouté un booléen à false pour indiquer qu'on n'est pas dans le cas de l'affichage de la liste des films favoris. Et ainsi pouvoir déclencher le chargement de plus de films lorsque l'utilisateur scrolle.
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Test2