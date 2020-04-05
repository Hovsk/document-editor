import React, {Component, useState, useEffect} from 'react'
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../tools/editor.js'
import API from '../api'

class DocumentAdd extends Component{

    state = {
    };

    async handleSave() {
        //console.log(this.editorInstance);
        const savedData = await this.editorInstance.save();
        console.log(savedData);

        API.post('/documents', {
            body: JSON.stringify(savedData.blocks)
        });

        this.props.history.push('/')
    }

    render(){
        const style = {
            height: '700px',
            overflow:'scroll',
            marginBottom: '20px'
        };

        return (
            <div className="container">
                <h4><i>New Document</i></h4>
                <div className="document" style={style}>
                    <EditorJs instanceRef={instance => this.editorInstance = instance} tools = {EDITOR_JS_TOOLS}/>
                </div>
                <button onClick={()=>this.handleSave()} className="btn btn-lg btn-primary float-right">
                    save
                </button>
            </div>
        )
    }
}

export default DocumentAdd;