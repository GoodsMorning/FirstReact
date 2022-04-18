import React, { Component } from "react";
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import Grid from '../components/grid';
import Card from '../components/card'

import { addProfile } from "../redux/profile/profileAction";
import { setParameterData } from "../redux/parameter/parameterAction";
import { CardService } from "../service/cardService";

class Profile extends Component {

    render() {

        this.props.setParameterData(this.props.profile);

        return (
            <div style={{ textAlign: 'center', padding: '10px', }} >
                <h3 > Profile Test </h3>
                <h4> Number of Profile - {this.props.numberOfProfile} </h4>
                <div>
                    <Button variant="outline-dark" onClick={() => { this.onClick() }}> Add Card </Button>
                </div>
                <br />

                <Grid><Card/></Grid>

            </div>
        )
    }

    

    onClick = () => {
        const card = CardService.getCard()
        console.log('data : ' + card)
        this.props.addProfile(<Card/>);
    }
}


const mapStateToProps = state => {
    return {
        numberOfProfile: state.profile.numberOfProfile,
        profile: state.profile.profile,
    }
}

const mapDisPatchToProps = dispatch => {
    return {
        addProfile: (value) => dispatch(addProfile(value)),
        setParameterData: (value) => dispatch(setParameterData(value)),
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(Profile);