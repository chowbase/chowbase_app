import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {
    Card,
    ButtonGroup,
    Text,
    List,
    ListItem,
    Icon
} from 'react-native-elements';
import {users} from '../config/data';

export default class Inventory extends Component {
    onOrderItem = () => {
        this.props.navigation.navigate('OrderItems');
    };
    render() {
        const buttons = ['Perishables', 'Hot kitchen', 'Equipment']
        return (
            <View>
                <Card>
                    <Text>Take inventory:</Text>
                </Card>
                <Text style={{
                    paddingLeft: 20
                }}>Filter by:</Text>
                <ButtonGroup buttons={buttons}/>
                <Card>
                    <ScrollView>
                        <List>
                            {users.map((user) => (<ListItem key={user.login.username} roundAvatar avatar={{
                                uri: user.picture.thumbnail
                            }} title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`} subtitle={user.email} onPress={() => this.onOrderItem()}/>))}
                        </List>
                    </ScrollView>
                </Card>
            </View>
        );
    }
}
