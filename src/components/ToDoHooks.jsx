import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Icon, List, Divider, message, Button } from 'antd'

function ToDoHooks () {
  // * estados
  const [ todo, setTodo ] = useState('')
  const [ todos, setTodos ] = useState([])

  // * Mostrar el numero de ToDos en el titulo de la pag
  useEffect(() => {
    window.document.title = `ToDos [${todos.length}]`
  })

  // * handlers
  const onTodoChange = e => {
    setTodo(e.target.value)
  }

  // * handler del submit del form
  const addTodo = e => {
    e.preventDefault()
    setTodos([...todos, { title: todo }])
    setTodo('')
    message.success('ToDo Added')
  }

  // * borrar todo
  const deleteTodo = index => {
    const newTodos = todos
    newTodos.splice(index, 1)
    setTodos([...newTodos])
    message.error('Todo Deleted')
  }

  // * jsx
  return (
    <div>
      <h1>Todo App</h1>

      <Form onSubmit={addTodo}>
        <Input value={todo} onChange={onTodoChange} placeholder='Add ToDo' prefix={<Icon type='right-circle' />} />
      </Form>

      <Divider>ToDo list</Divider>

      <List
        bordered
        dataSource={todos}
        renderItem={(todo, index) => (
          <List.Item
            actions={[
              <Button
                onClick={() => deleteTodo(index)}
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

export default ToDoHooks
