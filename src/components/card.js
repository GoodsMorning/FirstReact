import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Card, Button } from 'react-bootstrap';

import { CardService } from '../service/cardService';

class card extends Component {
  render() {
    const data = CardService.getCard()

    // const data = this.props.items;
    console.log('data in card : ' + data)
    

    return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>
          {data.title}
        </Card.Title>
        <Card.Text>
          {data.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
  }
}

const mapStateToProps = state => {
  return {
      parameterItems: state.parameter.items,
  }
}

export default connect(mapStateToProps,)(card);
