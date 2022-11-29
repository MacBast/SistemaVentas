import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,TouchableOpacity,TextInput,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Principal from "./components/Principal.js"

  const Stack = createNativeStackNavigator();
  export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Principal"
                component={Principal}
                options={{ title: "SISTEMA DE VENTAS" }} />
            </Stack.Navigator>
          </NavigationContainer>
     );

  }


//   const Tab = createBottomTabNavigator();

//   function Principal() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="Vendedor" component={VendedorScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons
//                 name="people-outline"
//                 color={"#FFA1CF"}
//                 size={20}
//               ></Ionicons>
//               ),
//           }}
//           />
//         {/* <Tab.Screen
//           name="Ventas"
//           component={VentaScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons
//                 name="move-outline"
//                 color={"#FFA1CF"}
//                 size={20}
//               ></Ionicons>
//               ),
//             }}
//           /> */}
//       </Tab.Navigator>
//     );
//   }
  


//   function VendedorScreen( ) {
//     // const [idvendedor, setIdvendedor] = useState([]);
//     // const [nombre, setNombre] = useState('');
//     // const [email, setEmail] = useState('');
//     // const [comision, setComision] = useState('');
  
//     return(
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#AAEBD7' }}>
//         <Text style={{ color: "#4BA3DE", fontWeight: 700, fontSize: 35, textAlign: "center" }}>
            
//           </Text>
//          {/* <TextInput
//             style={styles.inputs}
//             placeholder="Id de vendedor"
//             secureTextEntry={true}
//             onChangeText={value => setIdvendedor(value)}
//             value={idvendedor}>           
//           </TextInput>
  
//           <TextInput
//             style={styles.inputs}
//             placeholder="Nombre"
//             secureTextEntry={true}
//             onChangeText={value => setNombre(value)}
//             value={nombre}>           
//           </TextInput>
  
//           <TextInput
//             style={styles.inputs}
//             placeholder="Correo electronico"
//             secureTextEntry={true}
//             onChangeText={value => setEmail(value)}
//             value={email}>           
//           </TextInput>
  
//           <TextInput
//             style={styles.inputs}
//             placeholder="Comision"
//             secureTextEntry={true}
//             onChangeText={value => setComision(value)}
//             value={comision}>           
//           </TextInput> */}
//       </View>
//     );
//   }


//  function VentaScreen() {

//     // const [idvendedor, setIdvendedor] = useState([]);
//     // const [nombre, setNombre] = useState('');
//     // const [email, setEmail] = useState('');
//     // const [comision, setComision] = useState('');
  
//     return(
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#AAEBD7' }}>
//         <Text style={{ color: "#4BA3DE", fontWeight: 700, fontSize: 35, textAlign: "center" }}>
//           Vendedor de la vendedora de soras
  
  
//         </Text>
//          {/* <TextInput
//             style={styles.inputs}
//             placeholder="Id de vendedor"
//             secureTextEntry={true}
//             onChangeText={value => setIdvendedor(value)}
//             value={idvendedor}>           
//           </TextInput>
  
//           <TextInput
//             style={styles.inputs}
//             placeholder="Nombre"
//             secureTextEntry={true}
//             onChangeText={value => setNombre(value)}
//             value={nombre}>           
//           </TextInput>
  
//           <TextInput
//             style={styles.inputs}
//             placeholder="Correo electronico"
//             secureTextEntry={true}
//             onChangeText={value => setEmail(value)}
//             value={email}>           
//           </TextInput>
  
//           <TextInput
//             style={styles.inputs}
//             placeholder="Comision"
//             secureTextEntry={true}
//             onChangeText={value => setComision(value)}
//             value={comision}>           
//           </TextInput> */}
//       </View>
//     );
//   }
  

  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputs: {
//     borderWidth: 1,
//     borderColor: '#11A88C',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 10,
//     textAlign: 'center',
//     marginBottom: 5,
    
//   },
//   formulario: {
//     fontSize: 18,
//     marginTop: 20,
//     marginLeft: 20,
//     marginRight: 20,
//     fontWeight: '600',
//     paddingLeft: 20,
//     borderWidth: 1,
//     borderRadius: 7,
//     paddingRight: 12,
//   }, 
//   colorBtn: {
//     borderWidth: 1,
//     borderColor: 'black',
//     backgroundColor: '#007BFF',
//     padding: 15,
//     marginLeft: 20,
//     marginRight: 20,
//     borderRadius: 10,
//   },
//   errorText: {
//     fontSize: 14,
//     color: 'red',
//     marginBottom: 20,
//     marginLeft: 20
//   },
//   picker:{
//     height: 50, 
//     width: 180, 
//     margin:5, 
//     borderWidth: 1,
//     borderColor: '#11A88C',
//     borderRadius: 10,
//   },
//   content: {
//     flexDirection: "column",
//     alignContent: "center",
//     justifyContent: "center",
//     marginTop: 5,
//   },
 
// });