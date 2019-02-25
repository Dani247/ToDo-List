import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Icon, List, Divider, message, Button } from 'antd'

export class ToDo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: [],
      todo: ''
    }

    this.addTodo = this.addTodo.bind(this)
    this.onTodoChange = this.onTodoChange.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  // * Mostrar el numero de ToDos en el titulo de la pag
  componentDidMount () {
    window.document.title = `ToDos [${this.state.todos.length}]`
  }

  componentDidUpdate () {
    window.document.title = `ToDos [${this.state.todos.length}]`
  }

  // * Handler del valor del input del to do
  onTodoChange (e) {
    this.setState({ todo: e.target.value })
  }

  // * handler del submit del form
  addTodo (e) {
    e.preventDefault()

    this.setState({
      todos: [...this.state.todos, { title: this.state.todo }],
      todo: ''
    })

    message.success('ToDo added')
  }

  // * borrar todo
  deleteTodo (index) {
    const newTodos = this.state.todos
    newTodos.splice(index, 1)
    this.setState({
      todos: newTodos
    })
    message.error('ToDo Deleted')
  }

  // * jsx
  render () {
    return (
      <div>
        <h1>Todo App</h1>

        <Form onSubmit={this.addTodo}>
          <Input onChange={this.onTodoChange} value={this.state.todo} placeholder='Add ToDo' prefix={<Icon type='right-circle' />} />
        </Form>

        <Divider>ToDo list</Divider>

        <List
          bordered
          dataSource={this.state.todos}
          renderItem={(todo, index) => (
            <List.Item
              actions={[
                <Button
                  onClick={() => this.deleteTodo(index)}
                  type='danger' icon='delete'
                  size='small' />
              ]}
            >
              {todo.title}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default ToDo
