'use strict';

var VanOpenTicket = require('./studentDetailList');
 import React, { Component } from 'react';
 import {
  AppRegistry,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert,
  Navigator,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';


import StudentForm from './studentForm';
import StudentDetailList from './studentDetailList';
//This class is the main class and it provide the route to the application navigation of the page 
//is written here.
class Test extends Component {

constructor(props) {
        super(props);
    }
//This function is used to render the page whoes route has been set.
  renderScene(route, navigator) {
    
    if(route.name == 'studentform') {
      return <StudentForm navigator={navigator} />
    }
    if(route.name == 'studentDetailList') {
      console.log("My data"+route.data.length);
      return <StudentDetailList navigator={navigator} data={route.data}/>
    }
   
  }

// This function re-renders each time there is a change in state 
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'studentform'}}
          renderScene={this.renderScene.bind(this)}

           navigationBar={
     <Navigator.NavigationBar
       routeMapper={{
         LeftButton: (route, navigator, index, navState) =>
           {
    if (route.name == 'studentform') {
      return null;
    } else {
      return (
        <TouchableHighlight onPress={() => navigator.pop()}>
          <Text style={styles.title}>Back</Text>
        </TouchableHighlight>
      );
    }
  },
         RightButton: (route, navigator, index, navState) =>
           { return null;},
         Title: (route, navigator, index, navState) =>
           { return (<Text style={styles.title}>Student Management App</Text>); },
       }}
       style={{backgroundColor: '#1AB6A1'}}
     />
  }
        />
      </View>
    );
  }
}
//The Css part is written below.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },

});

AppRegistry.registerComponent('Test', () => Test);
module.exports = Test;