import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import FirstScreen from '../screens/first';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Me from '../components/me';
import ManageStaff from '../components/manageStaff';
import AddStaff from '../screens/addStaff';
import Inventory from '../components/inventory';
import OrderItems from '../components/orderItems';

export const StaffStack = StackNavigator({
    ManageStaff: {
        screen: ManageStaff
    },
    AddStaff: {
        screen: AddStaff
    }
}, {
    mode: 'modal',
    headerMode: 'none'
});

export const InventoryStack = StackNavigator({
    Inventory: {
        screen: Inventory
    },
    OrderItems: {
        screen: OrderItems
    }
}, {headerMode: 'none'});

export const ManageStack = TabNavigator({
    Me: {
        screen: Me
    },
    ManageStaff: {
        screen: StaffStack
    },
    Inventory: {
        screen: InventoryStack
    },
    OrderItems: {
        screen: OrderItems
    }
});

export const Root = StackNavigator({
    Login: {
        screen: Login
    },
    Signup: {
        screen: Signup
    },
    Me: {
        screen: ManageStack
    }
}, {headerMode: 'none'});

export const Tabs = StackNavigator({
    Chowbase: {
        screen: Root
    }
});
