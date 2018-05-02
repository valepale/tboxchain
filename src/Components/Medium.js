import React from 'react'
import axios from 'axios';

class Medium extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }


    }

    componentDidMount() {
        const getWord = async () => {
            const textBlock = document.getElementById("random-text-p")
            try {
                const response = await fetch('/.netlify/functions/text')
                if (!response.ok) {
                    throw new Error("The request failed")
                }
                const resObj = await response.json()
                console.log(resObj)
                textBlock.innerHTML = `Your random text is: <br /> <strong>${resObj.body}</strong>`
            } catch (err) {
                textBlock.innerHTML = "Sorry the request failed"
            }
        }
//        axios.get('/functions/medium').then(response => {
//            console.log('response.data', response);
//            const prefix = `])}while(1);</x>`
//            const strip = payload => payload.replace(prefix, ``)
//            this.setState({
//                posts: JSON.parse(strip(response.data))
//            });
//        })
//                .catch(error => {
//                    console.log(error);
//                });
//        ;
    }
    render() {
        return (
                <div>
                    Medium is where I ramble and rant and tell stories. I orginally was going to use it as a coding blog, I don't like having to use Gist for all my code snippets. So I created this site.
                    <br /><br />
                    <a className="button is-inverted is-outlined" href="https://medium.com/@aaron.klaser" target="_blank">
                        View My Medium
                        <span className="icon" >
                            <i className="fab fa-lg fa-medium"></i>
                        </span>
                    </a>
                
                    <pre>{JSON.stringify(this.state.posts, null, 2)}</pre>
                
                </div>
                )
    }

}
export default Medium