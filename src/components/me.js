import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Tile, List, ListItem, Button} from 'react-native-elements';
import {me} from '../config/data';

class Me extends Component {
    handleSettingsPress = () => {
        this.props.navigation.navigate('ManageStaff')
    };
    onManageStaff = () => {
        this.props.navigation.navigate('ManageStaff');
    };
    onCheckInventory = () => {
        this.props.navigation.navigate('Inventory');
    };
    onCheckOrders = () => {
        this.props.navigation.navigate('OrderItems');
    };

    render() {
        return (
            <ScrollView>
                <Tile imageSrc={{
                    uri: this.props.picture.medium
                }} featured title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`} caption={this.props.email}/>

                <Button rounded title="Add branch" buttonStyle={{
                    marginTop: 20,
                    backgroundColor: '#08AE9E'
                }} onPress={this.handleSettingsPress}/>

                <List>
                    <ListItem title="Manage staff" rightTitle="This branch" hideChevron onPress={() => this.onManageStaff()}/>
                    <ListItem title="Staff schedule" rightTitle="today" hideChevron/>
                </List>

                <List>
                    <ListItem title="Check Inventory" rightTitle="now" hideChevron onPress={() => this.onCheckInventory()}/>
                    <ListItem title="Check orders" rightTitle="now" hideChevron onPress={() => this.onCheckOrders()}/>
                </List>

                <List>
                    <ListItem title="Manage something" rightTitle="blah" hideChevron/>
                </List>
            </ScrollView>
        );
    }
}

Me.defaultProps = {
    ...me
};

export default Me;
