import { Stack } from "expo-router";
import Colors from "@/constants/Colors";


const Layout = () => {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: '#fff',
    }}
  >
    <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
  </Stack>
}

export default Layout