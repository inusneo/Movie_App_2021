import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'

class Home extends Component {
  state = {
    isLoading : true,
    movies : []
  };

  // 데이터를 불러올 때까지 기다려라.
  getMovies = async() => {
    const { data:{ data:{movies} } } = await axios.get('https://yts.mx/api/v2/list_movies.json?genre=animation&sort_by=like_count');
    this.setState( {movies: movies, isLoading: false} );
    // key: key값이 동일하면 key값 생략 가능하다.
    console.log(movies);
  }
  
  componentDidMount() {
    //setTimeout(
    //  () => {this.setState({isLoading: false})}, 6000
    //);
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state; // 구조 분해 할당

    return (
      <section className="container">
        { isLoading? 
          (<div className="loader">
            <span className="loader_text">Loading...</span>
          </div>) : 
          (<div className="movies">
            {movies.map(movie => (
              <Movie 
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>)  
        }
      </section>
    )
  }
}

export default Home;
