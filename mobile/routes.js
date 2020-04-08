import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import TasksList from './src/pages/tasks/list';
import TaskDetails from './src/pages/tasks/details';


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="TasksList" component={TasksList} />
                <AppStack.Screen name="ProductDetails" component={TaskDetails} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}