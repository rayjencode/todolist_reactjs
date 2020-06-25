import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
    state = {
        items: [],
        id: uuid(),
        item: '',
        editItem: false,
    };

    handleChange = (e) => {
        this.setState({
            item: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.item === '') {
            return;
        } else {
            const newItem = {
                id: this.state.id,
                title: this.state.item,
            };

            const updatedItems = [...this.state.items, newItem];

            this.setState(
                {
                    items: updatedItems,
                    item: '',
                    id: uuid(),
                    editItem: false,
                },
                () => {
                    console.log(this.state);
                }
            );
        }
    };
    clearList = () => {
        this.setState({
            items: [],
        });
    };
    handleEdit = (id) => {
        const filteredItems = this.state.items.filter((item) => item.id !== id);
        const selectedItem = this.state.items.find((item) => item.id === id);

        this.setState(
            {
                item: selectedItem.title,
                items: filteredItems,
                editItem: true,
                id: id,
            },
            () => console.log(this.state.item, this.state.items)
        );
    };
    handleDelete = (id) => {
        console.log(`handle delete ${id}`);

        this.setState({
            items: this.state.items.filter((item) => item.id !== id),
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5">
                        <h3 className="text-capitalize text-center">
                            todo input
                        </h3>
                        <TodoInput
                            item={this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            editItem={this.state.editItem}
                        />
                        <TodoList
                            items={this.state.items}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                            clearList={this.clearList}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
