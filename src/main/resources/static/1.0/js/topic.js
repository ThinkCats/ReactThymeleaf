/**
 * Created by wanglei on 15/11/22.
 */

//Topic Editor
var Topic = React.createClass({displayName: "Topic",
    render:function(){
        return (
            React.createElement("div", {className: "list-group-item"}, 
                React.createElement("h5", null, "发布新话题:"), 
                React.createElement(TopicForm, null)
            )
        );
    }
});

var TopicForm = React.createClass({displayName: "TopicForm",
    componentDidMount:function(){
        $('#editor').wysihtml5({locale:'zh-CN'});
    },
    render:function(){
        return (
            React.createElement("div", null, 
                React.createElement("form", {className: "form-horizontal top-form-offset", action: "/topic/doPost", method: "post"}, 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("input", {type: "text", className: "form-control", name: "name", placeholder: "话题名称"})
                    ), 
                    React.createElement("div", {className: "form-group "}, 
                        React.createElement("textarea", {id: "editor", className: "form-control", className: "form-control", name: "content", placeholder: "内容....", rows: "10"})
                    ), 
                    React.createElement("input", {type: "submit", className: "btn btn-success"})
                )
            )
        )
    }
});

ReactDOM.render(
    React.createElement(Topic, null),document.getElementById('post-area')
);


//Side bar
var SideBar = React.createClass({displayName: "SideBar",
    render:function(){
        return (
            React.createElement("div", {className: "list-group-item"}, 
                "发布指南"
            )
        )
    }
});

ReactDOM.render(
    React.createElement(SideBar, null),document.getElementById('side-bar')
);