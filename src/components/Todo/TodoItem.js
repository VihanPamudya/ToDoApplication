import React, { useContext } from "react";
import { Button, Typography, Space, Tooltip, Popconfirm, message } from "antd";
import {
  EditOutlined,
  CheckOutlined,
  DeleteOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { TodoContext } from "../../context/TodoContext";
import "../../styles/TodoItem.css";

const { Title, Text } = Typography;

const TodoItem = ({ todo, handleEdit }) => {
  const { toggleCompletion, deleteTodo } = useContext(TodoContext);

  const handleToggleCompletion = (id) => {
    toggleCompletion(id);
    const status = todo.completed
      ? "marked as incomplete"
      : "marked as completed";
  };

  const handleDelete = (id) => {
    deleteTodo(id);
    message.success(`Task successfully deleted!`);
  };

  return (
    <div className="todo-item">
      <div
        className={`color-indicator ${
          todo.completed ? "completed" : "incomplete"
        }`}
      ></div>
      <div className="text-section">
        <Title level={4} className="todo-title">
          {todo.title}
        </Title>
        <Text>{todo.description}</Text>
      </div>

      <Space className="todo-actions">
        <Tooltip title="Edit Task">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(todo)}
            type="link"
            className="icon-button"
          />
        </Tooltip>

        <Tooltip title={todo.completed ? "Mark Incomplete" : "Mark Completed"}>
          <Button
            icon={todo.completed ? <UndoOutlined /> : <CheckOutlined />}
            onClick={() => handleToggleCompletion(todo.id)}
            type="link"
            className="icon-button"
          />
        </Tooltip>

        <Tooltip title="Delete Task">
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => handleDelete(todo.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              danger
              type="link"
              className="icon-button"
            />
          </Popconfirm>
        </Tooltip>
      </Space>
    </div>
  );
};

export default TodoItem;
