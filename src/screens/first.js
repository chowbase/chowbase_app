import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {Tile, List, ListItem, Button, Header} from 'react-native-elements';
import {me} from '../config/data';

class FirstScreen extends Component {
    handleSettingsPress = () => {};

    render() {
        return (
            <ScrollView>
                <Header leftComponent={{
                    icon: 'menu',
                    color: '#fff'
                }} centerComponent={{
                    text: 'MY TITLE',
                    style: {
                        color: '#fff'
                    }
                }} rightComponent={{
                    icon: 'home',
                    color: '#fff'
                }}/>

            </ScrollView>
        );
    }
}

FirstScreen.defaultProps = {
    ...me
};

export default FirstScreen;
