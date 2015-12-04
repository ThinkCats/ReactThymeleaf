/**
 * Created by wanglei on 15/11/22.
 */

//Topic Editor
var Topic = React.createClass({
    render:function(){
        return (
            <div className="list-group-item">
                <h5>发布新话题:</h5>
                <TopicForm />
            </div>
        );
    }
});

var TopicForm = React.createClass({
    componentDidMount:function(){
        $('#editor').wysihtml5({locale:'zh-CN'});
    },
    render:function(){
        return (
            <div>
                <form className="form-horizontal top-form-offset" action="/topic/doPost" method="post">
                    <div className="form-group">
                        <input type="text" className="form-control" name="name" placeholder="话题名称" />
                    </div>
                    <div className="form-group ">
                        <textarea id="editor" className="form-control"  className="form-control"  name="content"  placeholder="内容...." rows="10"/>
                    </div>
                    <input type="submit" className="btn btn-success" />
                </form>
            </div>
        )
    }
});

ReactDOM.render(
    <Topic />,document.getElementById('post-area')
);


//Side bar
var SideBar = React.createClass({
    render:function(){
        return (
            <div className="list-group-item">
                发布指南
            </div>
        )
    }
});

ReactDOM.render(
    <SideBar />,document.getElementById('side-bar')
);