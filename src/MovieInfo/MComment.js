import { tsConstructorType } from '@babel/types';
import { render } from '@testing-library/react';
import React from 'react';

function MComment () {
    render(){
        tsConstructorType(){
            super();
            this.state = {
                newReply : "",
                replies : [{text : ""}]
            };
        }

        // textChange

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