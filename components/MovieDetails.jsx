import { Button, Image, Text, View } from "react-native";

export default function MovieDetails({
	title,
	imageUrl,
	director,
	year,
	genre,
	durationMinutes,
	goBack,
}) {
	return (
		<View style={{ gap: 20, alignItems: "center" }}>
			<Text style={{ fontSize: 28, marginTop: 16 }}>Details</Text>
			<Image
				source={{
					uri: imageUrl,
					width: 150,
					height: 240,
				}}
				style={{ borderRadius: 8 }}
			></Image>
			<Text style={{ fontSize: 24, fontWeight: 800 }}>{title}</Text>
			<Text style={{ fontSize: 18, fontWeight: 300 }}>{year}</Text>
			<Text style={{ fontSize: 18, fontWeight: 500 }}>Genre: {genre}</Text>
			<Text style={{ fontSize: 18, fontWeight: 500 }}>
				Duration: {durationMinutes} minutes
			</Text>
			<Text style={{ fontSize: 18, fontWeight: 500 }}>
				Director: {director}
			</Text>

			<Button title="Go Back" onPress={goBack}></Button>
		</View>
	);
}
