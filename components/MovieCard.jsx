import { Image, Text, View } from "react-native";

export default function MovieCard({ id, title, year, imageUrl }) {
	return (
		<View>
			<View>
				<Text>{title}</Text>
				<Text>{year}</Text>
			</View>
			<Image
				source={{
					uri: imageUrl,
					width: 184,
					height: 250,
				}}
			></Image>
		</View>
	);
}
