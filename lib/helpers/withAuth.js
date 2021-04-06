import React from 'react';
import router from 'next/router';
import { auth } from '../src/firebase/index';

const withAuth = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            status: 'LOADING', //the initial LOADING state
            }
        }
        //checking whether the user actually exists
        componentDidMount() {
            auth.onAuthStateChanged(authUser => {
                console.log(authUser);
                if(authUser) {
                    this.setState({
                    status: 'SIGNED_IN' //the SIGNED IN state
                    });
                }
                else { //redirecting the user to the route page if he doesn't exist
                    router.push('/');
                }
            });
        }

        renderContent() {
            const { status } = this.state;
            if(status == 'LOADING') {
                return <h1>Loading ......</h1>;
            }
            else if(status == 'SIGNED_IN') {
                return <Component { ...this.props } />
              }
        }

        render() {
            return (
                <React.Fragment>
                    {this.renderContent()}
                </React.Fragment>
            );
        }
    };
}

export default withAuth;