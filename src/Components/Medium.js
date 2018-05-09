import React from 'react'
        import axios from 'axios';
import moment from "moment";
import * as Scrivito from 'scrivito';

class Medium extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            title: ''
        }

    }

    componentDidMount() {
        axios.get('https://api.rss2json.com/v1/api.json', {
            params: {
                rss_url: 'https://medium.com/feed/tboxchain'
            }
        }).then(response => {
            var contentsIta = [];
            var contentsEn = [];
            var contents = [];

            response.data.items.forEach(function (obj, i) {
                var intCategories = obj.categories.length;
                for (var j = 0; j < obj.categories.length; j++) {
                    if (obj.categories[j] === 'italiano') {
                        return contentsIta.push(obj);
                    } else if (obj.categories[j] !== 'italiano' && intCategories === j + 1) {
                        contentsEn.push(obj);
                    }
                }
            })
            const currentPage = Scrivito.currentPage();
            const path = currentPage.path();


            if (path.includes('/lang/en')) {
                contents = contentsEn;
            } else if (path.includes('/lang/it')) {
                contents = contentsIta;
            }
            this.setState({
                posts: contents
            });

        })
                .catch(error => {
                    console.log(error);
                });
        ;
    }
    render() {
        const currentPage = Scrivito.currentPage();
        const path = currentPage.path();
        var title = '';
        if (path.includes('/lang/en')) {
            moment.locale('en');
            title = 'Go to the post';
        } else if (path.includes('/lang/it')) {
            moment.locale('it');
            title = 'Vai al post';
        }

        return (
                this.state.posts.map(function (obj, i) {
                    const data = moment(obj.pubDate).format("l");
                    const contentAll = obj.content.replace(/<(?:.|\n)*?>/gm, "");
                    var contentExtract = contentAll.split(/\s+/).slice(0, 20).join(" ");
                    const spanStyle = {
                        fontSize: '15px',
                        color: '#716f73'
                    };
                    const aStyle = {
                        textDecoration: 'none'
                    };

                    return <div className="col-lg-6" key={i}><a key={i} style={aStyle} href={obj.link} target="_blank" title={title}><div><img key={i} src={obj.thumbnail} kay={i}/></div><div><h2 key={i}><strong>{obj.title}</strong></h2> </div><div><p>{contentExtract}...</p></div><p key={i} className="text-color-verde">{obj.author}<br /><i key={i} className="fa fa-calendar fa-1x" ></i><span style={spanStyle}>&nbsp;{data}</span></p></a></div>

                })
                )


    }
}
export default Medium