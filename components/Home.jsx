import { useState } from "react";
import { ScrollView, Text } from "react-native";
import { movies } from "../data.json";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
export default function Home() {
	const [toggleDetails, setToggleDetails] = useState(null);
	const detailsHandler = (id) => {
		const movie = movies.find((m) => m.id === id);
		setToggleDetails(movie);
	};

	const goBackHandler = () => {
		setToggleDetails(null);
	};

	return toggleDetails ? (
		<MovieDetails {...toggleDetails} goBack={goBackHandler} />
	) : (
		<ScrollView>
			<Text style={{ alignSelf: "center", fontSize: 30, margin: 20 }}>
				Movie Catalog
			</Text>
			{movies.map((movie) => (
				<MovieCard key={movie.id} {...movie} onDetails={detailsHandler} />
			))}
		</ScrollView>
	);
}
