import * as React from 'react';
import {createDrawerNavigator} from '@react-navigator-drawer';
import TabNavigator from './TabNavigator';
import Tela from './screens/profile';

const Drawer = createDrawerNavigator ();
const drawerNavigator =()=> {
    return (
        <Drawer.Navigator>
           <Drawer.Screen name= 'Tela Inicial' component= {TabNavigator} />
           <Drawer.Screen name= 'Perfil' component= {Tela} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;