var TopicList = React.createClass({displayName: "TopicList",
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
                React.createElement(TopicItem, {item: item, key: item.topicId})
            )
        });
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, 
                        React.createElement("label", null, "全部")
                    ), 
                        React.createElement("table", {className: "table table-hover"}, 
                            React.createElement("tbody", null, 
                            topicItem
                            )
                        )
                )
            )
        );
    }
});

var TopicItem = React.createClass({displayName: "TopicItem",
    render:function(){
        var data = this.props.item;
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, 
                    React.createElement("a", {href: "#"}, data.name)
                ), 
                React.createElement("td", null, 
                    data.content
                )
            )
        );
    }
});



//SideBar
var SideBar = React.createClass({displayName: "SideBar",
    render:function(){
        return (
            React.createElement("div", {className: "list-group-item"}, 
                React.createElement("a", {href: "/topic/post", className: "btn btn-success"}, "发布新帖")
            )
        );
    }
});

ReactDOM.render(
    React.createElement(SideBar, null),document.getElementById('post-topic')
);

var Hello = React.createClass({displayName: "Hello",
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
            React.createElement("div", {className: "list-group-item"}, 
                "hello world !!! ", user.name, " ", user.age
            )
        );
    }
});


ReactDOM.render(
    React.createElement(TopicList, null),
    document.getElementById('topic-list')
);

//ReactDOM.render(
//    <Hello url="http://localhost:8080/users/user" />,document.getElementById('hello')
//    );