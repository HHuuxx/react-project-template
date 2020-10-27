import React from 'react';
import { connect } from 'react-redux';
import { homeActions } from '../../../redux/actions/home';
import "./index.scss"


const JSON_META = {
    Author: "Allen Raven Antipuesto",
}
class Home extends React.Component {
    render() {
        return <div className="container">
            Result: <code>{JSON.stringify(this.props.Home)}</code><br></br>
            <i className="fad fa-address-card"></i>
            <button onClick={() => this.props.TestAction(JSON_META)}> Get Author</button>
        </div>
    }
}


const mapStateToProps = state => ({
    ...state
})
const mapDispatchToProps = dispatch => ({
    TestAction: (data) => dispatch(homeActions.TestAction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
