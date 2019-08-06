import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
export default  class Notes extends Component{
    render(){
        const NotesLine=this.props.Notes.map(item=>{
            return(
                <Text>{item}</Text>
            )
        })
           return(
               <View style={{alignItems:"center",width:"100%"}}>
                   <View style={{alignItems:"center",margin:30}}>
                   <Text style={{fontSize:20,fontStyle:"italic",fontWeight:"bold"}}> Notes</Text>
                   </View>
                  {NotesLine}
               </View>
           ) 
    }
    
    
}