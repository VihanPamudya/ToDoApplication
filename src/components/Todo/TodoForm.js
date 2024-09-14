import React, { useState, useContext, useEffect } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Form, Input, Button, message } from "antd";

const TodoForm = ({ closeModal, isEditing, currentTodo }) => {
  const { addTodo, editTodo } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isEditing && currentTodo) {
      setTitle(currentTodo.title);
      setDescription(currentTodo.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [isEditing, currentTodo]);

  const handleSubmit = () => {
    if (isEditing && currentTodo) {
      editTodo(currentTodo.id, { ...currentTodo, title, description });
      message.success(`Task successfully updated!`);
    } else {
      addTodo(title, description);
    }
    setTitle('');
    setDescription('');
    closeModal();
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="Title" required>
        <Input
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Description" required>
        <Input
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          {isEditing ? 'Save Task' : 'Add Task'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
