import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {
    Form,
    FormLabel,
    FormInput,
    Button,
    Card,
    Icon
} from 'react-native-elements'

export default class Signup extends Component {
    static navigationOptions = {
        title: "Register",
        headerRight: <Icon name="info" iconStyle={{
                padding: 20
            }}/>
    };
    onRegister = () => {
        this.props.navigation.navigate('Me',);
    };
    render() {

        return (
            <ScrollView>
                <Card title="Register your business" containerStyle={{
                    backgroundColor: '#F5FCFF'
                }}>
                    <FormInput ref='name' placeholder='Business name' textInputRef='enter business name'/>
                    <FormInput ref='location' placeholder='branch name' textInputRef='enter your branch location'/>
                    <FormInput ref='phoneNumber' placeholder='Phone number' textInputRef='enter phone number'/>
                    <FormInput ref='email' placeholder='Email address' textInputRef='enter email address'/>
                    <FormInput ref='password' secureTextEntry={true} placeholder='Password' textInputRef='enter password'/>
                    <FormInput ref='password' secureTextEntry={true} placeholder='Confirm password' textInputRef='confirm password'/>
                    <Button rounded title="Register a business" buttonStyle={{
                        marginTop: 20,
                        backgroundColor: '#08AE9E'
                    }} onPress={() => this.onRegister()}/>
                </Card>
            </ScrollView>
        );
    }
}
