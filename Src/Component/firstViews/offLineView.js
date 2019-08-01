import {View,Text,StyleSheet,Button} from 'react-native';
import { tsPropertySignature } from '@babel/types';
 const mainView=(props)=>(
     <View>
       <Text>{props.Label}</Text>  
       <Text>{props.date}</Text>
       <Terxt>{props.timeStart}</Terxt>
       <Text>{props.timeToString}</Text>
     </View>
 )

 const styles=StyleSheet.create({
     mainView:{
         
     }
 })