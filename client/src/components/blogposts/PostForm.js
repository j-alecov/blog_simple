import React, {Component} from 'react';
import './PostForm.css';
import Axios from 'axios';

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            text:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    handleSubmit(e){
        e.preventDefault();

            var params = {
                //Yeah we're missing this, maybe we could update it someday
                responses_count:0,
                post_content: this.state.text,
                post_title: this.state.title
            }
            
            this.props.addPost(params);
            Axios.post('/api/blogposts', params)
            .then(res => console.log(res.data));
            
            this.setState({title : ''});
            this.setState({text : ''});
    }
    render() {
        return (
            <div id="newPost">
                <form onSubmit={this.handleSubmit}>
                    <input name="title" value={this.state.title} type="text" placeholder="Title" onChange={this.handleChange}/>
                    <br />
                    <textarea  name="text" value={this.state.text} rows="3" placeholder="Write a new post" onChange={this.handleChange}></textarea>
                    <br />
                    <button type="submit">Post this!</button>
                </form>
            </div>
        );
      }
}


export default PostForm;
