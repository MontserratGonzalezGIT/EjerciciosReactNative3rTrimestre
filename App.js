import React, { cloneElement, Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  Button,
  TextInput,
} from 'react-native';
/*
const screenWidth = Dimensions.get('window').width;
const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];
*/

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      numero1 : 0,
      numero2 : 0,
      total : 0,
    }
  }

  setStateNumero1=(numero1)=>{
    this.setState({numero1:numero1});
  }
  setStateNumero2=(numero2)=>{
    this.setState({numero2:numero2});
  }
  setStateTotal=()=>{
    this.setState({total:parseInt(this.state.numA) * parseInt(this.state.numB)});
  }
  /*
  state={
      numA:0,
      numB:0,
    }
  handleTextA=(text)=>{
    this.setState({numA:text});
  }

  handleTextB=(text)=>{
    this.setState({numB:text});
  }

  handleStateNumbers=()=>{
    return parseInt(this.state.numA) * parseInt(this.state.numB);
  }
  */
  render() {
    return (

      <View>

        <TextInput
        onChangeText={(num) => this.setStateNumero1(num)}
        placeholder={"cum"}
        />
        <TextInput
        onChangeText={(num) => this.setStateNumero2(num)}
        placeholder={"cum2"}
        />

      </View>



      
      /*
      <View style={styles.container}>
       <View style={styles.containerInformacion}>
        <View style={styles.containerPfp}>
        <Image source={{uri: "https://i.pinimg.com/originals/ea/21/65/ea2165227063a57b70e8342b26bcf679.png"}}
              style={{width:100,height:100,}} />
        </View>
        <View style={{flex: 2,}}>

          <View style={styles.containerText}>
            <View style={{flex: 1,}}>
                <Text style={{color:"black"}}>Posts</Text>
                <Text>20</Text>
              </View>
              <View style={{flex: 1,}}>
                <Text style={{color:"black"}}>Followers</Text>
                <Text>110304</Text>
              </View>
              <View style={{flex: 1,}}>
                <Text style={{color:"black"}}>Following</Text>
                <Text>1103</Text>
              </View>
          </View>
          <View style={styles.containerBoton}>
              <Button title="Edit Profile" color="#d3d3d3"></Button>
          </View>
        </View>
        
        
        
       </View>
       <View style={styles.containerImages}>

       <FlatList
        data={(images)}
        numColumns={4}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item}) => {
          return(
            <View>
            <Image source={{uri:item}}
              style={{width:100,height:100,margin:2}}/>
            </View>
          )}
        } style={{}}
      />
       </View>
      </View>
      */
     /*
     <View>
      <TextInput
      onChangeText={(text) =>this.handleTextA(text)}
      placeholder="Introduce el primer numero"
      />
      <Text>
       Primer numero : {this.state.numA}
      </Text>
      <TextInput
      onChangeText={(text) =>this.handleTextB(text)}
      placeholder="Introduce el segundo numero"
      />
      <Text>
        Segundo numero : {this.state.numB}
      </Text>

        <Text> Resultado: {this.handleStateNumbers()} </Text>
      

     </View>
        */
       
      
    );
  }
}

const styles = StyleSheet.create({
  
});