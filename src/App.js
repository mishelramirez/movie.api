import Card from "./component/Card";
import { useFetch } from "./component/useFetch";


const App = () => {
  const { data } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=b6247a3272129a1a56aa5b9fcd55bdc1"
  );
 console.log(data)
  return (
    <div>
      <h1>hola peliculas</h1>
      <div>
        {data?.results?.map((movie) => (
          <div key={movie.id}>
            <Card img= {movie.poster_path}
               title={movie.title}
               overview={movie.overview}
                />
               
          </div>
        ))}
      </div>

    </div>);
}


export default App;