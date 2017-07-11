import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

import {LoginStack, Tabs, Root, TabsNavigator} from './config/routes';

export default class App extends Component {

    render() {
        return (<Tabs/>);
    }
}
