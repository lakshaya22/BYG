import React, { Component } from 'react';
 import {
  AppRegistry,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';

var dataArray=[];
var StudentForm = React.createClass(
{
  

// Sets the initial state of the variables.
  getInitialState: function() {
    return {
      studentName: '',
      rollNo: '',
      standard: '',
    }
  },
// This function is called as the cancel of alert promt is clicked
  cancelPress:function(fieldName1,fieldName2,fieldName3)
  {
    this.refs[fieldName1].setNativeProps({text: ''});
    this.refs[fieldName2].setNativeProps({text: ''});
    this.refs[fieldName3].setNativeProps({text: ''});
  },
  // This function is called upon the click of save button
  onSubmitClick:function(event)
  {

    var studentname = this.state.studentName;
    var rollNo = this.state.rollNo;
    var standard = this.state.standard;
    if(studentname!=""&&rollNo!=""||standard!="")
    {
       dataArray.push(studentname);
    dataArray.push(rollNo);
    dataArray.push(standard);
    studentname="";
    rollNo="";
    standard="";
     Alert.alert(
      'Success',
      'Student Added',
      [

      {text: 'Cancel', onPress: this.cancelPress('name','roll','standard'), style: 'cancel'},

      ]
      )
    }
    else{
       Alert.alert(
      'Failure',
      'Please Fill All the Fields and try again',
      [

      {text: 'Cancel', onPress: this.cancelPress('name','roll','standard'), style: 'cancel'},

      ]
      )
    }
  },

  //This function is used to navigated the page to the other file and class.
  navigate:function(routeName) {
    this.props.navigator.push({
      name: routeName,
      data: dataArray,
    });
    dataArray=[];
  },

// This function re-renders each time there is a change in state 
  render:function() {
    return (
<View style={styles.container}>


      <TextInput
      ref="name"
      style={styles.Input}
      placeholder= "Enter student name "
      autoCapitalize = "none"
      autoCorrect = {false}
      clearButtonMode = 'while-editing'
      onChangeText={(text) => {
        this.setState({studentName:text});}}
     />

     <TextInput
     ref="roll"
     style={styles.Input}
     placeholder= "Enter Roll No."
     autoCapitalize = "none"
     autoCorrect = {false}
     clearButtonMode = 'while-editing'
     onChangeText={(text) => {
      this.setState({rollNo:text});}}
    />

    <TextInput
     ref="standard"
     style={styles.Input}
     placeholder= "Enter Standard"
     autoCapitalize = "none"
     autoCorrect = {false}
     clearButtonMode = 'while-editing'
     onChangeText={(text) => {
      this.setState({standard:text});}}
    />

    <View style={styles.buttonContainer}>
    <TouchableHighlight
    style={styles.button}
    underlayColor={'#328FE6'}
    onPress={this.onSubmitClick}>
    <Text style={styles.buttonText}>Save</Text>
    </TouchableHighlight>

    

    <TouchableHighlight
    style={styles.button}
    underlayColor={'#328FE6'}
    onPress={ this.navigate.bind(this,'studentDetailList') }>
    <Text style={styles.buttonText}>View</Text>
    </TouchableHighlight>
    </View>
    </View>
    );
  }
}
);


//The Css part is written below.

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    width:20,
    flex: 1,
    marginRight:10,
    backgroundColor: '#FF8000',
    borderColor: '#FF8000',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    
    justifyContent: 'center'
  },

  Input:
  {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1 , 
    marginTop: 10 , 
    padding : 10 ,
    marginLeft : 5 , 
    marginRight : 5 
  }


});

export default StudentForm