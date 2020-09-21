import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator, } from 'react-navigation-stack'
import {createAppContainer } from 'react-navigation'
import {createBottomTabNavigator } from 'react-navigation-tabs'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetails'
import Favorites from '../Components/Favorites'
import Test from '../Components/Test'
import Test2 from '../Components/Test2'



const SearchStackNavigator = createStackNavigator({
   Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

const Test2StackNavigator = createStackNavigator({
  Test2: {
   screen: Test2,
   navigationOptions: {
     title: 'SQLite ?'
   }
 },
 FilmDetail: {
   screen: FilmDetail
 }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})


const MoviesTabNavigator = createBottomTabNavigator(
  {
    Test: {
      screen: Test,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_test.png')}
            style={styles.icon}/>
        }
      }
    },
    Test2: {
      screen: Test2StackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_test.png')}
            style={styles.icon}/>
        }
      }
    },
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_search.png')}
            style={styles.icon}/>
        }
      }
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_favorite.png.png')}
            style={styles.icon}/>
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(MoviesTabNavigator)