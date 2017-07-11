import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {users} from '../config/data';

import {Card, FormInput, Button, List, ListItem} from 'react-native-elements'

export default class AddInventory extends Component {
    onAdd = () => {
        this.props.navigation.navigate('ManageStaff');
    };
    render() {

        return (
            <View>
                <Card title='Add staff'>
                    <FormInput ref='name' placeholder='Employee name' textInputRef='enter business name'/>
                    <FormInput ref='employeeID' placeholder='Employee ID' textInputRef='enter staff id'/>
                    <FormInput ref='email' placeholder='Email' textInputRef='enter email address'/>
                    <Button rounded iconRight icon={{
                        name: 'lock'
                    }} title='Register' buttonStyle={{
                        marginTop: 20,
                        backgroundColor: '#08AE9E'
                    }} onPress={() => this.onAdd()}/>
                </Card>
            </View>
        );
    }
}
