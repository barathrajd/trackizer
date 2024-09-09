import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import WelcomeImage from "@/components/welcomeImage";

export default function WelcomeScreen() {
	return (
		<SafeAreaView>
			<View className="flex text-black bg-grey-100 w-full h-full p-10">
				<Animated.View
					entering={FadeIn.springify().delay(500).duration(500)}
					exiting={FadeOut}
				>
					<Animated.Image
						source={require("../../assets/images/logo.png")}
						className="bg-grey-100 w-[178px] h-[29px] self-center p-1"
					/>
				</Animated.View>
				<Animated.View className={"flex gap-0"}>
					<WelcomeImage
						source={require("../../assets/images/welcome-youtube.png")}
						viewClassName="w-[130px] h-[130px] relative ml-[150px] mt-[10px]"
						bgClassName="w-[100%] h-[100%] rotate-[30.35deg]"
						sourceClassName="absolute left-[25%] top-[35%] w-[60px] rotate-[4deg] h-[45px] flex ustify-center items-center"
					/>
					<WelcomeImage
						source={require("../../assets/images/welcome-drive.png")}
						viewClassName="w-[130px] h-[130px] relative"
						bgClassName="w-[100%] h-[100%] rotate-[25.35deg]"
						sourceClassName="absolute left-[30%] top-[35%] w-[60px] h-[45px] p-3 flex ustify-center items-center"
					/>
					<WelcomeImage
						source={require("../../assets/images/spotify-welcome.png")}
						viewClassName="w-[170px] h-[170px] rotate-[-7.42deg] relative ml-[100px]"
						bgClassName="w-[100%] h-[100%] rotate-[7deg]"
						sourceClassName="absolute left-[30%] top-[30%] rotate-[-7deg] w-[70px] h-[70px] flex ustify-center items-center"
					/>
				</Animated.View>
			</View>
		</SafeAreaView>
	);
}
