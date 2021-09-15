import {Component} from "react";
import axios from "axios";

class getForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
                console.log(response.data)
            })
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                <h1>Post List</h1>
                {
                    posts.map(post => <div key={post.id}>{post.id}{post.title}</div>)
                }
            </div>
        )
    }
}

export default getForm
