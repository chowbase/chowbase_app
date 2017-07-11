import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {
    Form,
    FormLabel,
    FormInput,
    Button,
    Tile,
    Header,
    Card,
    Icon
} from 'react-native-elements';
import {users} from '../config/data';

export default class Login extends Component {
    static navigationOptions = {
        title: "chowbase"
    };
    onLogin = () => {
        this.props.navigation.navigate('Me',);
    };
    onSignup = () => {
        this.props.navigation.navigate('Signup',);
    };
    render() {

        return (
            <View>
                <Card title='Login' containerStyle={{
                    backgroundColor: '#f2fbfc'
                }}>
                    <FormInput ref='name' placeholder='Email address' textInputRef='enter business name'/>
                    <FormInput ref='password' secureTextEntry={true} placeholder='password' textInputRef='enter password'/>
                    <Button rounded title="Login" buttonStyle={{
                        marginTop: 20,
                        backgroundColor: '#08AE9E'
                    }} onPress={() => this.onLogin()}/>
                    <Button rounded title="Register a business" buttonStyle={{
                        marginTop: 20,
                        backgroundColor: '#08AE9E'
                    }} onPress={() => this.onSignup()}/>
                </Card>
            </View>
        );
    }
}
