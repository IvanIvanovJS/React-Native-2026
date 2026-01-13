import { Button, Image, Text, View } from "react-native";

export default function MovieCard({ id, title, year, imageUrl }) {
	return (
		<View style={{ flexDirection: "row", gap: "10", marginTop: 20 }}>
			<Image
				source={{
					uri: imageUrl,
					width: 184,
					height: 280,
				}}
			></Image>
			<View style={{ gap: 10 }}>
				<Text>{title}</Text>
				<Text>{year}</Text>
				<View style={{ width: 100 }}>
					<Button title="Details"></Button>
				</View>
			</View>
		</View>
	);
}
