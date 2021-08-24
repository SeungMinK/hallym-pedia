import { tsConstructorType } from '@babel/types';
import { render } from '@testing-library/react';
import React from 'react';

class MComment extends React.Component {
    render(){
        constructor() {
            super();
            this.state = {
                newReply : "",
                replies : [{text : ""}]
            };
        }

        textChange = (3) => {
            this.setState({ newReply : e.target.value });
        }

        buttonClick = () =>{
            let arr = this.state.replies;
            arr = arr.concat({ text : this.state.newReply});

            this.setState({ newReply : "" , replies : arr});
        }

        enterClick (e) = >{
            if(e.key ==="Enter"){
                this.buttonClick;
                e.target.value = "";
            };
            
        }
    }
    return (
        <>
            <ul className = "textbox"> {this.state.replies.map( (e) => (<li>e.text</li>)) }
            </ul>
            <textarea
                className = "comment_textarea"
                placeholder = "댓글 달기"
                onChange = {this.textChange}
                onKeyPress = {this.enterClick}>
            </textarea>
            <button className = "comment_button" onClick = {this.buttonClick}>게시</button>
        </>
    );
}

export default MComment;