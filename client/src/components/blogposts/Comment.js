import React, {Component} from 'react';
import './Style.css';

class Comment extends Component{
    render() {
        return (
          <div className="comment">
          <h4>{this.props.comment.name}</h4>
          <p>{this.props.comment.response_content}</p>
          <small>{this.props.comment.created_at}</small>
        </div>
        );
      }
}


export default Comment;
