import { Button, Image, Text, View } from "react-native";

export default function MovieCard({
	id,
	title,
	year,
	imageUrl,
	genre,
	onDetails,
}) {
	return (
		<View
			style={{
				flexDirection: "row",
				gap: "10",
				borderRadius: 15,
				backgroundColor: "#d2c7b5ff",
				padding: 10,
				margin: 12,
				marginTop: 20,
			}}
		>
			<Image
				source={{
					uri: imageUrl,
					width: 150,
					height: 240,
				}}
				style={{ borderRadius: 8 }}
			></Image>
			<View style={{ gap: 10 }}>
				<View style={{ flexDirection: "row", width: 160 }}>
					<Text style={{ fontSize: 22, flexShrink: 1 }}>{title}</Text>
				</View>
				<Text style={{ opacity: 0.6 }}>{year}</Text>
				<Text style={{ fontWeight: 500 }}>{genre}</Text>
				<View style={{ width: 100 }}>
					<Button title="Details" onPress={() => onDetails(id)}></Button>
				</View>
			</View>
		</View>
	);
}
