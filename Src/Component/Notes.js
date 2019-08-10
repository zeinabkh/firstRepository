import React, { Component } from 'react'
import { Alert, View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import { Header, Right, Left, Icon, Body, Title } from 'native-base'
import moment from 'moment-jalaali'
import { FlatList } from 'react-native-gesture-handler';
const NotesLine = props => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", padding: 10, margin: 10, height: 40, width: "100%", borderRadius: 20, borderColor: "blue",/* borderWidth: 1*/ }}>
            <TouchableOpacity style={{ flexDirection: "column", justifyContent: "flex-start", alignItems: "center", padding: 10, margin: 10, height: 40, width: "100%", borderRadius: 20, borderColor: "blue", borderWidth: 1 }}
                onPress={() => props.deleteNote(props.notes.key)}     >

                <Text style={{ margin: 10 }}>{props.notes.note}</Text>
                <Text>{moment(props.notes.date).format('jYY/jMM/jDD')}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default class Notes extends Component {

    renderSeparator = () => {

        return (
    
          <View
    
            style={{
    
              height: 1,
    
              width: "86%",
    
              backgroundColor: "#CED0CE",
    
              marginLeft: "14%"
    
            }}
    
          />
    
        );
    
      };

    state = {
        status: true,
        notelist: this.props.Notes
    }
    render() {

        return (
            <Modal visible={this.props.seeNotes}
                onRequestClose={() => this.setState({ status: !this.state.status })} >
                <Header style={{ backgroundColor: "#fa8072" }}>
                   

                    <Left>
                    
                       
                             <TouchableOpacity onPress={this.props.close} style={{ width: "100%",justifyContent:"center", alignItems: "center", height: 50, backgroundColor: "#fa8072" }} onPressOut={this.props.close}>
                            <Text style={{fontSize:15,fontWeight:"bold"}}>بازگشت</Text>
                        </TouchableOpacity>
                    </Left>
                    <Right>
                      
                        <TouchableOpacity style={{ width: "100%", alignItems: "center", height: 50, backgroundColor: "#fa8072" }} onPress={this.props.close
                        }>
                            <Text>{"      "}</Text>
                        </TouchableOpacity>
                       
                    </Right>


                </Header>

                <View style={{ alignItems: "center", width: "100%" }}>
                    <View style={{ alignItems: "center", margin: 30 }}>
                        <Text style={{ fontSize: 20, fontStyle: "italic", fontWeight: "bold" }}> یادداشت ها</Text>
                    </View>
                    {/* <NotesLine color={this.state.status} Notes={this.state.notelist} deletNote={key => this.setState({
                        notelist: this.state.notelist.filter(item => {
                            return item.key !== key
                        })
                    })} /> */}
                    <FlatList
                        data={this.props.Notes}
                        extraData={this.props}
                        keyExtractor={item => item.key}
                        ItemSeparatorComponent={this.renderSeparator}
                        renderItem={
                            (list) => {
                                return (
                                    <View>
                                        <NotesLine notes={list.item} deleteNote={key => {
                                            Alert.alert('', "یادداشت حذف شود ؟", [
                                                { Text: "بازگشت" },
                                                { Text: "حذف", onPress: this.props.delete(key) }
                                            ])
                                        }} />
                                    </View>

                                )
                            }
                        }
                    />


                </View>
            </Modal>

        )
    }


}