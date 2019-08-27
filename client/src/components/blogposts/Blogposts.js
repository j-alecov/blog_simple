import React, {Component} from 'react';
import './Blogposts.css';
import CommentBox from './CommentBox.js';
import Axios from 'axios';
import PostForm from './PostForm';

class Blogposts extends Component{
    constructor(){
        super();
        this.state = {
            blogposts: []
        }
    }
    addPost = (post) =>{
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy+ '-' + mm + '-' + dd;

        const newPost = {
            post_id: Math.floor(Math.random() * 1000),
            post_content: post.post_content,
            post_title: post.post_title,
            created_at: today
        }
        this.setState({blogposts: [...this.state.blogposts, newPost]});
    } 
    componentDidMount(){
        Axios.get('api/blogposts')
        .then(res => this.setState({blogposts:res.data}))
    }
    render() {
        return (
          <div>
            <PostForm addPost={this.addPost}/>
            <ul>
                {this.state.blogposts.map(blogpost =>
                    <li key={blogpost.post_id}>
                    <div>
                        <h3>{blogpost.post_title}</h3>
                        <p>{blogpost.post_content}</p>
                        <p className="date">Posted: {blogpost.created_at}</p>
                        <CommentBox post={blogpost.post_id}/>
                    </div>
                    </li>    
                )}
            </ul>
          </div>
        );
      }
}


export default Blogposts;
