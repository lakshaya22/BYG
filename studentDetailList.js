 import React, { Component } from 'react';
 import {
  AppRegistry,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert,
  ListView,
  AsyncStorage,
  ScrollView,
  TouchableHighlight
} from 'react-native';

var arr=[];
var data=[];
//This class is used to show the result that we have saved in the form.
class StudentDetailList extends Component {
  
  constructor() {
    super();
    this.state = {
     dataSource: new ListView.DataSource({
       rowHasChanged: (row1, row2) => row1 !== row2,
     }),
   };
  }

  //This function is called when the back button is clicked .
 navigate(routeName) {
    this.props.navigator.push({
      name: routeName,
    });
  }
renderRow(rowData, sectionID, rowID) {
  
  return (
    <TouchableHighlight 
        underlayColor='#dddddd'>
      <View>
        <View style={styles.rowContainer}>
          
          <View  style={styles.textContainer}>
            <Text style={styles.price}>Name: {rowData.studentname}</Text>
            <Text style={styles.title}
                  numberOfLines={2}>RollNo: {rowData.rollno}   Standard: {rowData.standard}</Text>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>
    </TouchableHighlight>
  );
}

//This is the function that is called after the reder runs,it is here used to fetch the data from props.
//Data needed by the dataSource to render the listview.

componentDidMount(){
   data = this.props.data;
  
  for(let i = 0; i < data.length; i=i+3){
    var name=data[i];
    var roll=data[i+1];
    var standard=data[i+2];
    var formData={"studentname": name,"rollno":roll,"standard":standard};
    arr.push(formData);
  }


   this.setState({
    dataSource: this.state.dataSource.cloneWithRows(arr),
   });
}
  render() {
   
    return (
   
      <ListView style={styles.listy}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}>

        
    </ListView>
    
    );
  }
}

//The Css part is written below.

var styles = StyleSheet.create({
  listy:{
    marginTop:60
  },
  textContainer: {
    flex: 1
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
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    marginTop:20,
  }
});
export default StudentDetailList