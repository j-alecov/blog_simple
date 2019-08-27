import React, {Component} from 'react';
import Comment from './Comment';
import './Style.css';

class CommentList extends Component{
    comments(){
        return this.props.comments.map(function(comment) {
            return <Comment key={comment.response_id} comment={comment}/>
        });
    }
    render() {
        return (
        <div className="comment-list">
            {this.comments()}
        </div>
        );
      }
}


export default CommentList;
