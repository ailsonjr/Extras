import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        movie: data,
        loading: false,
      });
    });
  }

  handleDelete() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id).then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    // Change the condition to check the state
    const { movie: { title, storyline, imagePath, genre, rating, subtitle, id },
      loading, shouldRedirect } = this.state;
    if (loading) return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link onClick={ this.handleDelete } to="/">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
