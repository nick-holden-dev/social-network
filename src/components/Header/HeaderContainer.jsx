import React from 'react';
import Header from './Header'; 
import { connect } from 'react-redux';
import { auth } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth();
    }
    render() {
        return (
            <Header {...this.props}></Header>
        )
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

});  
export default connect(mapStateToProps, {auth})(HeaderContainer);
