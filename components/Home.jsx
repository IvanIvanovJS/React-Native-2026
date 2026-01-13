import { ScrollView, Text } from "react-native";
import { movies } from "../data.json";
import MovieCard from "./MovieCard";
export default function Home() {
	return (
		<ScrollView>
			<Text>Movie Catalog</Text>
			{movies.map((movie) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</ScrollView>
	);
}
