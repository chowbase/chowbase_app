import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import App from './src/app';

export default class chow extends Component {
    render() {
        return (<App/>);
    }
}

AppRegistry.registerComponent('chow', () => chow);
