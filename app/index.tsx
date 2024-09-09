import { Redirect } from "expo-router";

export default function HomeScreen() {
	//const isLogin = false;
	return <Redirect href={"/(auth)/welcome"} />;
}
