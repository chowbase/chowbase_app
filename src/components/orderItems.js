import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Card, Text, ButtonGroup, List, ListItem} from 'react-native-elements';

export default class OrderItems extends Component {
    render() {
        const buttons = ['Add', 'Minus']
        return (
            <ScrollView>
                <Card>
                    <Text>hey</Text>
                    <ButtonGroup buttons={buttons}/>
                </Card>
                <Card>
                    <List>
                        <ListItem title="Item name" rightIcon={{
                            name: 'cancel'
                        }}/>
                        <ListItem title="Item name" rightIcon={{
                            name: 'cancel'
                        }}/>
                        <ListItem title="Item name" rightIcon={{
                            name: 'cancel'
                        }}/>
                    </List>
                </Card>
            </ScrollView>
        );
    }
}
