
var TopicList = React.createClass({
    getDefaultProps:function(){
        return {
            page:1
        }
    },

    getInitialState:function(){
        var tt = this.loadPageCountFromServer();
        return {
            list:[],
            pageNum:1,
            pageCount:tt.responseJSON
        }
    },

    loadPageCountFromServer:function(){
        //获取总页数
        return $.ajax({
            url:'/topic/pageCount',
            async:false,
            dataType:'json',
            success:function(result){
                return this;
            }
        });
    },

    componentWillMount:function(){
        console.log('----------- will mount --------');
        this.loadPageCountFromServer();
        console.log('----------- end mount ----------')
    },

    loadDataFromServer:function(){
        //实时获取总页数
        this.loadPageCountFromServer();
        //获取话题信息
        $.ajax({
            url:'/topic/list',
            type:'get',
            data:{pageNum:this.state.pageNum},
            dataType:'json',
            success:function(data){
                this.setState({list:data});
            }.bind(this)
        });
    },

    componentDidMount:function(){
        console.log('did mount ,total:',this.state.pageCount);
        $('#pagination').twbsPagination({
            first:'首页',
            prev:'上一页',
            next:'下一页',
            last:'尾页',
            totalPages: this.state.pageCount,
            visiblePages: 5,
            onPageClick:function(event,page){
                this.setState({pageNum:page});
                this.loadDataFromServer();

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
                        <TwbsPagination />
                    </div>
                </div>
            </div>
        );
    }
});

var TwbsPagination = React.createClass({

    render:function(){
       return (
           React.createElement('div',{id:'pagination'},'')
       )
    }
});


var Pagination = React.createClass({
    getDefaultProps:function(){
        return {
            page:1
        }
    },
    getInitialState:function(){
        return {
            pageCount:1,
            pageNum:this.props.page
        }
    },
    componentDidMount:function(){
        //获取总页数
        $.ajax({
            url:'/topic/pageCount',
            dataType:'json',
            success:function(result){
                console.log('did mount,get pageCount:',result);
                this.setState({pageCount:result})
            }.bind(this)
        });
    },
    handleClick:function(){

    },
    render:function(){
        var liItem = function(){
            //得到总页数,显示列表
        };
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