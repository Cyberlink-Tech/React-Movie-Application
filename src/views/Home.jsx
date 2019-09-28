import React, { Component } from 'react';
import { Row, Col, Container, Modal, Button } from 'reactstrap';
import MovieCard from '../components/MovieCard';
import Axios from 'axios';
const MOVIE_ENDPOINT = "http://www.omdbapi.com/";
const API_KEY = "apikey=d08f6dbc";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isModalOpen: false,
      movieDetails: {},
      isMoviesLoading: false
    }
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = () => {
    Axios.get('http://www.omdbapi.com/?s=man&apikey=d08f6dbc')
      .then(res => {
        return this.setState({
          movies: res.data.Search,
          isMoviesLoading: false
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  getMovieDetail = (id) => {
    Axios.get(`${MOVIE_ENDPOINT}/?i=${id}&${API_KEY}`)
      .then(res => {
        return this.setState({
          movieDetails: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }


  render() {
    const { movies, isModalOpen, isMoviesLoading, movieDetails } = this.state;
    return (
      <Container>
        <Col className="jumbotron" style={{ backgroundColor: 'white' }}>
          <h1 className="title text-center display-4">A Movie App Gist</h1>
        </Col>
        <Modal
          isOpen={isModalOpen}
          toggle={this.toggleModal}
          size="lg"
        >
          <Container >
            <Row >
              <Col style={{display: 'flex', alignItems: 'center'}}>
                <img
                  src={movieDetails.Poster}
                  style={{ width: '100%', alignSelf: 'center'}}
                  alt="Movie"
                />
              </Col>
              <Col >
              <h3 className="title text-center" style={{ fontWeight: 'bolder' }}>{movieDetails.Title}</h3>
              <p style={{ }}><strong>Release Date: </strong> {movieDetails.Released}</p>
              <p style={{ }}><strong>Actors: </strong> {movieDetails.Actors}</p>
              <p style={{ }}><strong>Language: </strong> {movieDetails.Language}</p>
              <p style={{ }}><strong>Movie Plot: </strong> {movieDetails.Plot}</p>
              <p style={{ }}><strong>Production Company: </strong>Produced by: {movieDetails.Production}</p>
              <p style={{ }}><strong>Runtime: </strong> {movieDetails.Runtime}</p>
                
              </Col>
            </Row>
          </Container>
        </Modal>
        {
          !isMoviesLoading ? (
            <Row >
              {movies.map(movie => (
                <Col sm="6" key={movie.imdbID}>
                  <MovieCard
                    title={movie.Title}
                    image={movie.Poster}
                    description="While Satan has been around for a long time, the Satanic Temple, the primary focus of this sly documentary, was founded in 2013 by Malcolm Jerry and Lucien Greaves."
                    price={Math.floor(Math.random() * 3000)}
                    ratings={Math.floor(Math.random() * 5)}
                    getMovieDetail={this.getMovieDetail}
                    id={movie.imdbID}
                    toggleModal={this.toggleModal}
                  />
                </Col>
              ))}

            </Row>
          ) :
            'Loading ....'
        }
      </Container>
    )
  }
}

export default Home
