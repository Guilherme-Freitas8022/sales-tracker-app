import {
  createBottomTabNavigator,
  BottomTabNavigationProp
}
  from "@react-navigation/bottom-tabs";

import MaterialIcons from
  '@expo/vector-icons/MaterialIcons';

import { Dashboard } from "../pages/Dashboard";
import { List } from "../pages/List";
import { Search } from "../pages/Search";
import { Totals } from "../pages/Totals";

type AppRoutes = {
  dashboard: undefined;
  list: undefined;
  search: undefined;
  totals: undefined;
}

export type AppNavigatorRoutesProps =
  BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } =
  createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'purple',
      tabBarStyle: {
        height: 100
      }
    }}>
      <Screen
        name='dashboard'
        component={Dashboard}
        options={{
          tabBarLabel: 'Incluir',
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='add'
              size={26}
              color={color}
            />
          )
        }}
      />

      <Screen
        name='list'
        component={List}
        options={{
          tabBarLabel: 'Listagem',
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='format-list-bulleted'
              size={26}
              color={color}
            />
          )
        }}
      />

      <Screen
        name='search'
        component={Search}
        options={{
          tabBarLabel: 'Pesquisa',
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='search'
              size={26}
              color={color}
            />
          )
        }}
      />
      <Screen
        name='totals'
        component={Totals}
        options={{
          tabBarLabel: 'Totais',
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='summarize'
              size={26}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}