import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {List, ListItem, Card, Text} from 'react-native-elements';
import {users} from '../config/data';

class ManageStaff extends Component {
    onAddStaff = () => {
        this.props.navigation.navigate('AddStaff');
    };
    render() {
        return (
            <View>
                <Card>
                    <ListItem title="Add Staff" onPress={() => this.onAddStaff()}/>
                    <ListItem title="See staff schedule"/>
                </Card>
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

export default ManageStaff;
