var TopicList = React.createClass({
    getInitialState:function(){
        return {list:[]}
    },
    componentDidMount:function(){
        $.ajax({
            url:'/topic/list',
            dataType:'json',
            success:function(data){
                this.setState({list:data});
            }.bind(this)
        });
    },
    render:function(){
        var topicItem = this.state.list.map(function(item){
            return (
                <TopicItem item={item} key={item.topicId} ></TopicItem>
            )
        });
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span className="label label-primary">全部</span>
                    </div>

                        <table className="table table-hover">
                            <tbody>
                            {topicItem}
                            </tbody>
                        </table>
                    <div className="panel-footer">
                        <Pagination />
                    </div>
                </div>
            </div>
        );
    }
});

var Pagination = React.createClass({
    render:function(){
        return (
            <nav>
                <ul className="pagination pagination-offset">
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
});

var TopicItem = React.createClass({
    render:function(){
        var data = this.props.item;
        return (
            <tr>
                <td>
                    <a href="#">{data.name}</a>
                </td>
                <td>
                    {data.content}
                </td>
            </tr>
        );
    }
});



//SideBar
var SideBar = React.createClass({
    render:function(){
        return (
            <div className="list-group-item">
                <a href="/topic/post" className="btn btn-success">发布新帖</a>
            </div>
        );
    }
});

ReactDOM.render(
    <SideBar />,document.getElementById('post-topic')
);

var Hello = React.createClass({
    getInitialState:function(){
        return ({user:{}});
    },
    componentDidMount:function(){
        $.ajax({
            //url:this.props.url,
            dataType:'json',
            success:function(data){
                this.setState({user:data});
            }.bind(this)
        }) ;
    },
    render:function(){
        var user = this.state.user;
        return (
            <div className="list-group-item">
                hello world !!! {user.name} {user.age}
            </div>
        );
    }
});


ReactDOM.render(
    <TopicList />,
    document.getElementById('topic-list')
);

//ReactDOM.render(
//    <Hello url="http://localhost:8080/users/user" />,document.getElementById('hello')
//    );