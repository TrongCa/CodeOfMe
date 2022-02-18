import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            noteTitle: '',
            noteContent: ''
        }
        
    }
    isChange=(event) =>{
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]:value
        })
    }
    //hàm lấy thông tin khi click vào nút
    addData=(noteTitle, noteContent) =>{
        var item={};
        item.noteTitle=noteTitle;
        item.noteContent=noteContent
        // console.log(item);
        this.props.getData(item)
    }
    render() {
        return (
            <div className="col-4">
                <form>
                <h3>Quản lý note</h3>
                <div className="form-group">
                    <label htmlFor>Tiêu đề Note</label>
                    <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="noteTitle" aria-describedby="helpId" placeholder />
                    <div className="form-group">
                        <label htmlFor>Nội dung Note</label>
                        <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="noteContent" aria-describedby="helpId" placeholder />
                    </div>
                    <input type="reset" onClick={() =>this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary btn-block" value="Lưu"/>
                </div>
                </form>
            </div>

        );
    }
}

export default Form;