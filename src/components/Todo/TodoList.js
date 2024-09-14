import React from "react";
import TodoItem from "./TodoItem";
import { List, Typography } from "antd";
import "../../styles/TodoList.css";

const { Title } = Typography;

const TodoList = ({ todos, title, handleEdit }) => {
  return (
    <div className="list-container">
      <Title level={3} className="list-title">
        {title}
      </Title>
      <List
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item key={todo.id} className="list-item">
            <TodoItem todo={todo} handleEdit={handleEdit} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
