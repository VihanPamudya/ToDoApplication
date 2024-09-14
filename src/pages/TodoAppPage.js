import React, { useState, useContext } from "react";
import TodoForm from "../components/Todo/TodoForm";
import TodoList from "../components/Todo/TodoList";
import { TodoContext } from "../context/TodoContext";
import { Button, Typography, Modal, Row, Col } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "../styles/TodoApp.css";

const { Title } = Typography;

const TodoApp = () => {
  const { todos } = useContext(TodoContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
    setIsEditing(false);
    setCurrentTodo(null);
  };

  const handleEdit = (todo) => {
    setIsModalVisible(true);
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const incompleteTasks = todos.filter((todo) => !todo.completed);
  const completeTasks = todos.filter((todo) => todo.completed);

  return (
    <div className="app-container">
      <div className="main-content">
        <Title className="todo-title">To Do Tasks</Title>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <TodoList
              todos={incompleteTasks}
              title="Incomplete Tasks"
              handleEdit={handleEdit}
            />
          </Col>
          <Col xs={24} md={12}>
            <TodoList
              todos={completeTasks}
              title="Completed Tasks"
              handleEdit={handleEdit}
            />
          </Col>
        </Row>

        <Button
          type="primary"
          shape="circle"
          icon={<PlusCircleOutlined style={styles.plusIcon} />}
          size="large"
          style={styles.addButton}
          onClick={showModal}
        />

        <Modal
          title={isEditing ? "Edit Task" : "Add New Task"}
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <TodoForm
            closeModal={handleCancel}
            isEditing={isEditing}
            currentTodo={currentTodo}
          />
        </Modal>
      </div>
    </div>
  );
};

const styles = {
  addButton: {
    position: "absolute",
    bottom: "30px",
    right: "30px",
    backgroundColor: "#1677ff",
    color: "white",
    fontSize: "24px",
    width: "70px",
    height: "70px",
  },
  plusIcon: {
    fontSize: "32px",
  },
};

export default TodoApp;
