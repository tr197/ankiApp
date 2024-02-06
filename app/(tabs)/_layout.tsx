import { Link, Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "#fff",
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="sets"
        options={{
          title: "My Sets",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerRight: () => (
            <Link href="/" asChild>
              <TouchableOpacity style={{marginRight: 10}}>
                <Ionicons name="add-outline" size={24} color={'#fff'}></Ionicons>
              </TouchableOpacity>
            </Link>
          )
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default Layout;
