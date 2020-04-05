import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class DocumentListItem extends Component{

    render(){
        const {item} = this.props;
        return (
            <React.Fragment>
                <div className="row">
                    <h3>{item && item.created_at}</h3>
                    <div className="text-right col-md-10">
                        <Link  className="btn btn-primary" to={`/documents/${item.id}`}>
                            Edit Document
                        </Link>
                    </div>
                </div>
                <hr/>
            </React.Fragment>
        )
    }
}

export default DocumentListItem;