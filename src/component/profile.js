import React, { Component } from "react";
import  { connect } from 'react-redux';
import { addProfile } from "../redux/profile/profileAction";

class Profile extends Component {
    render() {
        return (
            <div>
                <h3> Profile Test </h3>
                <h4> Number of Profile - { this.props.numberOfProfile } </h4>
                <div>
                    <button onClick={() => { this.props.addProfile() }}> Add Profile </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        numberOfProfile : state.numberOfProfile ,
        profile : state.profile
    }
}

const mapDisPatchToProps = dispatch => {
    return {
        addProfile : () => dispatch(addProfile()),
    }
}

export default connect(mapStateToProps,mapDisPatchToProps)(Profile);