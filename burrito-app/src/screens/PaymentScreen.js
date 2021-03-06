import React from 'react';
import { StyleSheet, Text, View,  Image, TouchableOpacity } from 'react-native';


const PaymentScreen = () => {
  return (
    <View style={styles.container}>   
      
            <View style={styles.userMenu}>    
                    <TouchableOpacity style={styles.item}>
                    <Image source = {require('../../assets/images/wallet-regular.png')}  style={styles.imageItem}/> 
                          <Text style={styles.itemText}>Detalhes de pagamento</Text>
                    </TouchableOpacity>                   
            </View>
    </View>
  )
}

export default PaymentScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f9f9f9',    
    padding: 30
  },  
  userMenu:{
    marginTop: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'    
  },

  item:{    
    backgroundColor: '#fff',    
    height: 400,
    width: '100%', 
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'   
  
  },
  itemText:{
    fontFamily: "Lato_400",
    paddingBottom: 10,
    color: '#999999',    
    fontSize: 20
  },
  imageItem: {
    marginVertical: 30,    

  }
})

