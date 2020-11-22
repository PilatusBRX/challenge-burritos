import React from 'react';
import { Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import AccountScreen from './src/screens/AccountScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();

const  App = () => {

  let [fontsLoaded, error] = useFonts({
    "Lato_400": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato_300": require("./assets/fonts/Lato-Light.ttf"),
    "Lato_700": require("./assets/fonts/Lato-Bold.ttf"),
    "Rubik_300": require("./assets/fonts/Rubik-Italic-VariableFont_wght.ttf"),
    "Rubik_400": require("./assets/fonts/Rubik-VariableFont_wght.ttf"),
  });

  if(!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
      >
        <Tab.Screen
         name="Início"         
          component={HomeScreen}
          options={{           
            tabBarIcon: () => (
              <Image
                source={                 
                    require('./assets/images/home-alt-regular.png')         
                
                }
              />
            ),
          }}
        />
        <Tab.Screen  
         name="Entrega"      
          component={DeliveryScreen}
          options={{          
            tabBarIcon: () => (
              <Image
                source={                  
                   require('./assets/images/gift-regular.png')                   
                }               
              />
            ),
          }}
        />
        <Tab.Screen   
         name="Pagamento"       
          component={PaymentScreen}
          options={{            
            tabBarIcon: () => (
              <Image
                source={
                   require('./assets/images/receipt-regular.png')                   
                }
                style={{
                
                }}
              />
            ),
          }}
        />
        <Tab.Screen
        name="Usuário"        
          component={AccountScreen}
          options={{          
            tabBarIcon: () => (
              <Image
                source={                  
                    require('./assets/images/user-regular.png')                   
                }             
              />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
