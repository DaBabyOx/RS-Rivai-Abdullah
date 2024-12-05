import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function IconAwesome(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={28} style={{ marginBottom: -3 }} {...props} />;
}

function IconOcticons(props: {
  name: React.ComponentProps<typeof Octicons>['name'];
  color: string;
}) {
  return <Octicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

function IconMats(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function IconMatCom(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          backgroundColor: '#0BAF9A', height: 95, 
        },
        tabBarIconStyle:{
          marginBottom: -5,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconOcticons name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="rencana"
        options={{
          title: 'Rencana',
          tabBarIcon: ({ color }) => <IconMats name="list-alt" color={color} />,
        }}
      />
      <Tabs.Screen
      name="jadwal"
      options={{
        title: 'Jadwal',
        tabBarIcon: ({ color }) => <IconMatCom name="calendar-month-outline" color={color} />,
      }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconAwesome name="user" color={color} />,
        }}
        />
    </Tabs>
  );
}
