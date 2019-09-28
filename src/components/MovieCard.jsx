import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'reactstrap';
import Ratings from './Ratings';

class MovieCard extends Component {
  render() {
    const { title, description, ratings, price, image, id } = this.props;
    const { getMovieDetail } = this.props;
    return (
      <div>
        <Card style={{ margin: 10 }}>
          <Col >
            <img
              src={image}
              style={{ width: '100%', maxHeight: 400 }}
              alt="Movie"

            />
            <Row >
              <Col >
                <p style={{ fontWeight: 'bolder' }}>{title}</p>
              </Col>
              <Col >
                <div className="text-right" >
                  <Ratings
                    ratings={ratings}
                  />
                </div>
              </Col>
            </Row>
            <p >
              {description}
            </p>
            <Row >
              <Col >
                <h3 >N{parseFloat(price).toFixed(2)}</h3>
              </Col>
              <Col >
                <Button
                  className="float-right"
                  style={{ backgroundColor: 'red' }}
                  onClick={() => {
                    this.props.toggleModal()
                    return getMovieDetail(id)
                  }}
                >
                  Preview
                </Button>
              </Col>
            </Row>

          </Col>

        </Card>
      </div>
    )
  }
}

export default MovieCard;
