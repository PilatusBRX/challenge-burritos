import React from 'react';
import { StyleSheet, Text, View,  Image, TouchableOpacity } from 'react-native';


const AccountScreen = () => {
  return (
    <View style={styles.container}>       
          <View style={styles.userInfo}>
                <Image source = {require('../../assets/images/user-circle-light.png')}  style={styles.imageUser}/> 
                  <Text style={styles.nameUser}>João Silva</Text>
                  <Text style={styles.emailUser}>joaodasilva@gmail.com</Text>
                  <Text style={styles.phoneUser}>(41) 99999-9999</Text>

                  <TouchableOpacity  style={styles.buttonUser}>
                     <Text style={styles.buttonText}>EDITAR DADOS</Text>
                  </TouchableOpacity>
            </View>          
    </View>
  )
}

export default AccountScreen;

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor:'#f9f9f9',    
    padding: 30
  },  
  userInfo:{
    height: 400,
    width: '100%',    
    marginTop: 100,
    marginBottom: 20,
    borderRadius: 15,
    paddingVertical: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'    
  },
  imageUser:{    
    marginBottom: 20
  },
  nameUser:{
    fontFamily: "Rubik_400",
    fontSize: 20,
    color: '#999',
    marginBottom: 7
  },
  emailUser:{
    fontFamily: "Rubik_400",
    fontSize: 16,
    color: '#999',
    opacity: .9,
    marginBottom: 7
  },
  phoneUser:{
    fontFamily: "Rubik_400",
    fontSize: 16,
    color: '#999',   
    marginBottom: 20
  },

  buttonText:{
    fontFamily: "Rubik_400",
    fontSize: 14,
    color: '#0099FF' 
  },
 
})


