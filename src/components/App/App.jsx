// imports
import React from 'react';
import Layout from './../Layout/Layout';


export default class App extends React.Component {
    render() {
        return (
        <Layout>
            {this.props.children}
        </Layout>
        );
    }
}
