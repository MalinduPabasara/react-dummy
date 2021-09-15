import {Component} from "react";
import axios from "axios";
import './styles/formStyle.css';

class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
                // this.setState({
                //     posts: response.data
            })
    }

    render() {
        const {userId, title, body} = this.state
        return (
            <div className='main'>
                <h3 className='title'>Submit Form</h3>
                <form className='fm' onSubmit={this.handleSubmit}>
                    <div className='con-a'>
                        <label className='lbl'>User ID</label>
                        <input className='inp'
                               type="text"
                               name="userId"
                               value={userId}
                               onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className='con-a'>
                        <label className='lbl'>Title</label>
                        <input className='inp-t'
                               type="text"
                               name="title"
                               value={title}
                               onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className='con-a'>
                        <label className='lbl'>Body</label>
                        <input className='inp-b'
                               type="text"
                               name="body"
                               value={body}
                               onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <button className='con-a, btn' type='submit'>Submit</button>
                    </div>
                    {/* <div>
                        {
                            userId.map(post=><div key={post.userId}>{post.userId}{post.title}{post.body}</div>)
                        }
                    </div>*/}


                </form>
            </div>
        )
    }

}

export default PostForm
