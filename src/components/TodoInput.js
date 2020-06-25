import React, { Component } from 'react';
// hello world
export default class TodoInput extends Component {
    render() {
        const { item, handleChange, editItem, handleSubmit } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="add todo item"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className={`btn btn-block ${
                            editItem ? 'btn-success' : 'btn-primary'
                        } mt-3 text-uppercase`}
                        disabled={item ? false : true}
                    >
                        {editItem ? 'Edit Item' : 'Add Item'}
                    </button>
                </form>
            </div>
        );
    }
}
