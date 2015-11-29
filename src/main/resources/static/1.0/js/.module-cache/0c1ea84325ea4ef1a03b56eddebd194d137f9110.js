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
                        React.createElement("span", {className: "label label-primary"}, "全部")
                    ), 

                        React.createElement("table", {className: "table table-hover"}, 
                            React.createElement("tbody", null, 
                            topicItem
                            )
                        ), 
                    React.createElement("div", {className: "panel-footer"}, 
                        React.createElement(Pagination, null)
                    )
                )
            )
        );
    }
});

var Pagination = React.createClass({displayName: "Pagination",
    render:function(){
        return (
            React.createElement("nav", null, 
                React.createElement("ul", {className: "pagination pagination-offset"}, 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#", "aria-label": "Previous"}, 
                            React.createElement("span", {"aria-hidden": "true"}, "«")
                        )
                    ), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "1")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "2")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "3")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "4")), 
                    React.createElement("li", null, React.createElement("a", {href: "#"}, "5")), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#", "aria-label": "Next"}, 
                            React.createElement("span", {"aria-hidden": "true"}, "»")
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