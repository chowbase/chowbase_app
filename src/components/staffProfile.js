import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Tile, List, ListItem, Button, Icon} from 'react-native-elements';

class Profile extends Component {
    constructor() {
        super();
    };

    render() {

        return (
            <Card title='Name'>
                <Text style={{
                    marginBottom: 10
                }}>
                    Name
                </Text>
                <Button icon={{
                    name: 'code'
                }} backgroundColor='#03A9F4' fontFamily='Lato' buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0
                }} title='VIEW NOW'/>
            </Card>
        );
    }
}

export default Profile;
