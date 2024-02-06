import { Text, View } from "react-native";
import { Redirect } from "expo-router";

const Page = () => {
    return  (
        <Redirect href="/(tabs)/sets"></Redirect>
    )
}

export default Page;