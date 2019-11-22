import React, { Component } from 'react';
import Axios from 'axios';

const API = process.env.API_PORT;

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            dataList: []
        }
    }

    componentDidMount = async() => {
        await this.reload();
    }

    reload = () => {
        Axios.get(API)
        .then(result => {
            this.setState({dataList:result.data});
        }).catch(err => {
            alert(err);
        });
    }

    render() {
        return (
            <div>
                <h3>Client Home Page !</h3>
                <ul>
                    {this.state.dataList.map((value, index) => 
                        <li key={index}>number: {index+1}, name : {value.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}