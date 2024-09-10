import CustomButton from "../../components/buttons/CustomButton";
import WelcomeImage from "../../components/welcomeImage";
import { View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
	return (
		<SafeAreaView>
			<View className="flex text-black bg-grey-100 w-full h-full gap-y-4">
				<Animated.View
					entering={FadeIn.springify().delay(500).duration(500)}
					exiting={FadeOut}
					className={"mb-8"}
				>
					<Animated.Image
						source={require("../../assets/images/logo.png")}
						className="bg-grey-100 w-[178px] h-[29px] self-center p-1"
					/>
				</Animated.View>
				<Animated.View className={"flex self-center"}>
					<WelcomeImage
						source={require("../../assets/images/welcome-youtube.png")}
						viewClassName="w-[130px] h-[130px] relative ml-[150px]"
						bgClassName="w-[100%] h-[100%] rotate-[30.35deg]"
						sourceClassName="absolute left-[25%] top-[35%] w-[60px] rotate-[4deg] h-[45px] flex ustify-center items-center"
					/>
					<WelcomeImage
						source={require("../../assets/images/welcome-drive.png")}
						viewClassName="w-[130px] h-[130px] relative"
						bgClassName="w-[100%] h-[100%] rotate-[25.35deg]"
						sourceClassName="absolute left-[28%] top-[30%] w-[60px] h-[45px] p-3 flex ustify-center items-center"
					/>
					<WelcomeImage
						source={require("../../assets/images/spotify-welcome.png")}
						viewClassName="w-[170px] h-[170px] rotate-[-7.42deg] relative ml-[100px]"
						bgClassName="w-[100%] h-[100%] rotate-[7deg]"
						sourceClassName="absolute left-[30%] top-[30%] rotate-[-7deg] w-[70px] h-[70px] flex ustify-center items-center"
					/>
				</Animated.View>
				<Animated.View className={"w-full flex justify-center items-center"}>
					<Animated.Text
						className={
							"text-center text-white w-11/12 font-medium text-[16px] mt-4"
						}
					>
						Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo
						urna risus.
					</Animated.Text>
				</Animated.View>
				<CustomButton className="bg-accent-100" text="Get Started" />
				<CustomButton className="bg-grey-80" text="I have an account" />
			</View>
		</SafeAreaView>
	);
}
