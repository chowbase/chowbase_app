import React, {Component} from 'react';
import {ScrollView, View, TextInput} from 'react-native';
import {
    Card,
    ButtonGroup,
    Text,
    List,
    ListItem,
    Icon
} from 'react-native-elements';
import {items} from '../config/data';

export default class Inventory extends Component {
    static navigationOptions = {
        title: "Inventory",
        headerLeft: <Icon name="menu" iconStyle={{
            padding: 20
        }}/>,
        headerRight: <Icon name="inbox" iconStyle={{
                padding: 20
            }}/>
    };
    onOrderItem = () => {
        this.props.navigation.navigate('OrderItems');
    };
    render() {
        const buttons = ['Perishables', 'Hot kitchen', 'Equipment']
        return (
            <View>
                <Card>
                    <TextInput placeholder="search for item"/>
                </Card>
                <Text style={{
                    paddingLeft: 20
                }}>Filter by:</Text>
                <ButtonGroup buttons={buttons}/>
                <Card>
                    <ScrollView>
                        <List>
                            {items.map((item) => (<ListItem key={item.id} title={`${item.name.toUpperCase()}`} subtitle={item.unitPrice} onPress={() => this.onOrderItem()}/>))}
                        </List>
                    </ScrollView>
                </Card>
            </View>
        );
    }
}
