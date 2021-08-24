// import React from 'react';

// class MComment extends React.Component {
//     render(){
//         constructor(); {
//             super();
//             this.state = {
//                 newReply : "",
//                 replies : [{text : ""}]
//             };
//         }

//         textChange = (e) => {
//             this.setState({ newReply : e.target.value });
//         }

//         buttonClick = () =>{
//             let arr = this.state.replies;
//             arr = arr.concat({ text : this.state.newReply});

//             this.setState({ newReply : "" , replies : arr});
//         }

//         enterClick = (e) => {
//             if(e.key ==="Enter"){
//                 this.buttonClick;
//                 e.target.value = "";
//             };   
//         }

//         return (
//             <>
//                 <ul className = "textbox"> {this.state.replies.map( (e) => (<li>e.text</li>)) }
//                 </ul>
//                 <textarea
//                     className = "comment_textarea"
//                     placeholder = "댓글 달기"
//                     onChange = {textChange}
//                     onKeyPress = {enterClick}>
//                 </textarea>
//                 <button className = "comment_button" onClick = {this.buttonClick}>게시</button>
//             </>
//         );
//     }
// }

// export default MComment;