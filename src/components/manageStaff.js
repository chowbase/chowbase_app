import React, {Component} from 'react';
import {ScrollView, View, Modal, TouchableHighlight, Text} from 'react-native';
import {
    List,
    ListItem,
    Card,
    Button,
    Icon,
    FormInput
} from 'react-native-elements';
import {employees} from '../config/data';
import Profile from './staffProfile';
import AddStaff from '../screens/addStaff';

class ManageStaff extends Component {
    static navigationOptions = {
        title: "Staff",
        headerLeft: <Icon name="menu" iconStyle={{
            padding: 20
        }}/>,
        headerRight: <Icon name="inbox" iconStyle={{
                padding: 20
            }}/>
    };
    state = {
        modalVisible: false
    };
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    };
    onProfile = () => {
        this.setModalVisible(true)
        return (
            <Modal animationType={"fade"} transparent={true} visible={this.state.modalVisible} onRequestClose={() => {
                this.setModalVisible(false)
            }}>
                <Profile/>
            </Modal>
        )
    };
    render() {

        return (
            <View>
                <Button rounded small title="Add employee" buttonStyle={{
                    marginTop: 20,
                    backgroundColor: '#08AE9E',
                    borderColor: '#08AE9E',
                    width: 150
                }} onPress={() => {
                    this.setModalVisible(true)
                }} iconLeft="add"/>
                <Modal animationType={"fade"} transparent={true} visible={this.state.modalVisible} onRequestClose={() => {
                    this.setModalVisible(false)
                }}>
                    <View style={{
                        marginTop: 75
                    }}>
                        <Card title='Add staff'>
                            <FormInput ref='name' placeholder='Employee name' textInputRef='enter business name'/>
                            <FormInput ref='employeeID' placeholder='Employee ID' textInputRef='enter staff id'/>
                            <FormInput ref='email' placeholder='Email' textInputRef='enter email address'/>
                            <Button rounded iconLeft icon={{
                                name: 'add'
                            }} title='Add' buttonStyle={{
                                marginTop: 20,
                                backgroundColor: '#08AE9E'
                            }} onPress={() => this.onAdd()}/>
                        </Card>
                    </View>
                </Modal>

                <Card>
                    <ScrollView>
                        <List>
                            {employees.map((employee) => (<ListItem key={employee.id} roundAvatar avatar={{
                                uri: employee.profilePicture
                            }} title={`${employee.name}`} subtitle={`${employee.email} - ${employee.phoneNumber}`} onPress={() => this.onProfile()}/>))}
                        </List>
                    </ScrollView>
                </Card>
            </View>
        );
    }
}

export default ManageStaff;
