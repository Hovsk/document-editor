import React, {Component} from 'react'
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../tools/editor.js'
import API from '../api'

class DocumentItem extends Component{

    state={

    };

    async handleSave(id) {

        const savedData = await this.editorInstance.save();
        console.log(savedData);

        API.put('/documents/' + id, {
            title: 'someTest',
            body: JSON.stringify(savedData.blocks)
        });

        this.props.history.push('/')
    }

    componentDidMount(){
        this.fetchItem(this.props.match.params.id)
    };

    fetchItem = (id) => {
        API.get('/documents/'+ id).then((res) => {
            const blocks = JSON.parse(res.data.body);
            this.setState({ blocks });
        })
    };

    render() {
        const style = {
            height: '700px',
            overflow:'scroll',
            marginBottom: '20px'
        };

        let {blocks} = this.state;

        return (
            <div className="container">
                <h4><i>Edit Document</i></h4>
                <div className="document" style={style}>
                    {
                        blocks && <EditorJs
                                            data={ this.state }
                                            instanceRef={instance => this.editorInstance = instance}
                                            tools = {EDITOR_JS_TOOLS}/>
                    }
                </div>
                <button onClick={()=> this.handleSave(this.props.match.params.id)} className="btn btn-lg btn-primary float-right">
                    save
                </button>
            </div>
        )
    }
}

export default DocumentItem;