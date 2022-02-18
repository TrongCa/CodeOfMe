import React, { Component } from 'react';

class Noteitem extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header" role="tab" id="note1id">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#noteid" href={"#note" + this.props.i} aria-expanded="true" aria-controls="notecontent1">
                                {this.props.noteTitle} <div className="btn btn-danger">Xóa</div><div className="btn btn-info">Sửa</div>

                            </a>
                        </h5>
                    </div>
                    <div id={"note" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1id">
                        <div className="card-body">
                           {this.props.noteContent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Noteitem;