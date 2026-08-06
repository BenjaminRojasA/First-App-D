import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#ff0000',  
            headerStyle: {
                backgroundColor: '#2f007a',
            },
            headerShadowVisible: false,
            headerTitleStyle: {
                color: '#fff',
            },
            tabBarStyle: {
                backgroundColor: '#2f007a',
            },
        }}
    >
      <Tabs.Screen 
      name="index" 
        options ={{ 
          headerTitle: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
                name={focused ? 'home-sharp' : 'home-outline'}
                size={30}
                color={color}
            />
),
        }}

      />
      <Tabs.Screen name="about" 
        options ={{ 
            headerTitle: "About" ,
            tabBarIcon: ({ focused, color }) => (
            <Ionicons
                name={focused ? 'information-circle' : 'information-circle-outline'}
                size={30}
                color={color}
            />
),
        }}
      />
    </Tabs>
  );
}