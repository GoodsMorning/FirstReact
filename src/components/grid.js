import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import '../css/grid.css';

import { setParameterItems } from "../redux/parameter/parameterAction";

class Grid extends Component {

    render() {

        const data = this.props.parameterData;

        return (<Container fluid><Row>{
            data.map(function (i, id){
                const send = { ...i };
                console.log('send id :' + id);
                console.log('oo :' + send);
                this.props.setParameterItems(send);
                return (
                    <Col key={id}>{this.props.children}</Col>
                );
            }, this)
        }</Row>
        </Container>
        )
    }

}

const mapStateToProps = state => {
    return {
        parameterData: state.parameter.data,
    }
}

const mapDisPatchToProps = dispatch => {
    return {
        setParameterItems: (value) => dispatch(setParameterItems(value)),
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(Grid);
