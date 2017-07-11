import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Tile, List, ListItem, Button, Icon} from 'react-native-elements';
import {manager} from '../config/data';

class Me extends Component {
    static navigationOptions = {
        title: "chowbase",
        headerRight: <Icon name="inbox" iconStyle={{
                padding: 20
            }}/>
    };

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
                    uri: this.props.profilePicture
                }} featured title={`${this.props.business.name.toUpperCase()}, ${this.props.branch.location.toUpperCase()}`} caption={` Manager: ${this.props.name}, Staff(${this.props.branch._staffMeta.count})`}/>

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
    ...manager
};

export default Me;
