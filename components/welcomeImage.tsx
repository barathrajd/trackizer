import type { ImageSourcePropType } from "react-native";
import Animated from "react-native-reanimated";

type IWelcomeImageProps = {
	source?: ImageSourcePropType;
	sourceClassName?: string;
	viewClassName?: string;
	bgClassName?: string;
};

export default function WelcomeImage({
	source,
	viewClassName,
	bgClassName,
	sourceClassName,
}: IWelcomeImageProps) {
	return (
		<Animated.View className={`${viewClassName}`}>
			<Animated.Image
				source={require("../assets/images/group-bg.png")}
				className={`w-[200px] h-[250px] bg-transparent ${bgClassName}`}
			/>
			{source && (
				<Animated.Image
					source={source}
					className={`w-[50px] h-[50px] ${sourceClassName}`}
				/>
			)}
		</Animated.View>
	);
}
