import React from 'react';
import { StyleSheet, Text, View,  Image, TouchableOpacity } from 'react-native';
const HomeScreen = () => {
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
            <View style={styles.userMenu}>    
                    <TouchableOpacity style={styles.item}>
                          <Image source = {require('../../assets/images/map-marker-alt-blue.png')} style={styles.imageItem} /> 
                          <Text style={styles.itemText}>Meus endereços</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Image source = {require('../../assets/images/wallet-regular.png')}  style={styles.imageItem}/> 
                        <Text style={styles.itemText}>Pagamento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Image source = {require('../../assets/images/life-ring-light.png')}  style={styles.imageItem}/> 
                        <Text style={styles.itemText}>Ajuda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Image source = {require('../../assets/images/cog-light.png')}  style={styles.imageItem}/> 
                        <Text style={styles.itemText}>Sair</Text>
                    </TouchableOpacity>                
            </View>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f9f9f9',    
    padding: 30
  },  
  userInfo:{
    height: 232,    
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 15,
    paddingVertical: 30,
    backgroundColor: '#ffffff',
    alignItems: 'center'    
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
  userMenu:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'    
  },

  item:{    
    backgroundColor: '#ffffff',    
    height: 100,
    width: '44%',
    paddingVertical: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'   
  
  },
  itemText:{
    fontFamily: "Lato_300",
    paddingBottom: 10,
    color: '#999999',    
    fontSize: 14
  },
  imageItem: {
    marginVertical: 10,    

  }
})
