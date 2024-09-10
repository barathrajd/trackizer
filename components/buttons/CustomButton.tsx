import { useMemo, PropsWithChildren } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Color = "primary" | "secondary";
type ButtonThemeProps = {
	color?: Color;
	className?: string;
	text: string;
};
type CustomButtonProps = ButtonThemeProps;

export default function CustomButton({
	color = "primary",
	className,
	text = "",
	...props
}: CustomButtonProps) {
	return (
		<View className="justify-center items-center w-full">
			<TouchableOpacity
				{...props}
				className={`rounded-full bg-white w-11/12 h-[48px] py-[14px] px-[24px] ${className} `}
			>
				<Text className="text-center font-medium text-white">{text}</Text>
			</TouchableOpacity>
		</View>
	);
}
