import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Expenses from "./screens/Expenses";
import { MaterialIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import RecentExpenses from "./screens/RecentExpenses";
import Settings from "./screens/Settings";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="RecentExpenses"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#02494D",
            },
            headerTintColor: "white",
            headerRight: (color, size) => (
              <MaterialIcons name="add" size={24} color={"white"} style={{padding: 10}} />
            ),
            tabBarStyle: {
              backgroundColor: "#02494D",
            },
            tabBarActiveTintColor: "white",
          }}
        >
          <Tab.Screen
            name="RecentExpenses"
            component={RecentExpenses}
            options={{
              title: "Recent Expenses",
              tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="timer-sand"
                    size={size}
                    color={color}
                  />
              ),
            }}
          />

          <Tab.Screen
            name="AllExpenses"
            component={Expenses}
            options={{
              title: "All Expenses",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="finance"
                  size={size}
                  color={color}
                />
              ),
            }}
          />

        <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              title: "Settings",
              tabBarIcon: ({ color, size }) => (
                <Feather name="settings" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>

      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
