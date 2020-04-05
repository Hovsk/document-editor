import React, {Component, useState, useEffect} from 'react'
import DocumentListItem from './document.list.item';
import {Link} from "react-router-dom";
import API from '../api'

class Documents extends Component{

    state = {
        documents : []
    };

    componentDidMount() {
        this.fetchItems()
    };

    componentDidUpdate() {
        this.fetchItems()
    }

    fetchItems = () => {
        API.get('/documents').then((res) => {
            this.setState({ documents: res.data});
        })
    };

    render(){
        return (
            <div className="container">
                <div className="row my-5">
                    <Link to={'/add'} className="btn btn-primary ">
                        Add Document
                    </Link>
                </div>
                {this.state.documents.map((item) => <DocumentListItem key={item.id} item = {item}/>)}

            </div>
        )
    }
}

export default Documents;