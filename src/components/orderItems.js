import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Card, Text, List, ListItem, Icon} from 'react-native-elements';
import {users} from '../config/data';

export default class OrderItems extends Component {
    static navigationOptions = {
        title: "Orders",
        headerLeft: <Icon name="menu" iconStyle={{
            padding: 20
        }}/>,
        headerRight: <Icon name="inbox" iconStyle={{
                padding: 20
            }}/>
    };
    render() {

        return (
            <ScrollView>
                <Card>
                    <Icon name="add"/>
                    <Text>make an order</Text>
                </Card>
                <Card>
                    <List>
                        {users.map((user) => (<ListItem key={user.login.username} roundAvatar avatar={{
                            uri: user.picture.thumbnail
                        }} title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`} subtitle={user.email} onPress={() => this.onOrderItem()}/>))}
                    </List>
                </Card>
            </ScrollView>
        );
    }
}
