import { ChangeEvent, FC, useState } from 'react';
import { Form, Button, Row, Alert } from 'react-bootstrap';

import { ITask } from "../Interfaces";

interface Props {
  todoList: ITask[];
  setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

interface Alerts {
  error?: string;
  success?: string;
}

const AddTodo: FC<Props> = ({ todoList, setTodoList }) => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDealine] = useState<number>(1);
  const [alerts, setAlerts] = useState<Alerts>({});

  const style = {
    border: '5px solid #000'
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else {
      if (Number(e.target.value) > 0) {
        setDealine(Number(e.target.value));
      }
    }
  }

  const addTask = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    if (task) {
      const newTask = { taskName: task, deadline: deadline };
      setTodoList([...todoList, newTask]);
      setTask('');
      setDealine(1);
      setAlerts({ success: 'Task added successfully!'})
    } else {
      setAlerts({ error: 'Enter a name for the task!'})
    }

  };

  return (
    <Form
      style={style}
      className="rounded-3 p-5 my-3 col-lg-4 col-sm-10 mx-auto"
    >
      <Form.Group>
        <Form.Label>Name task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="task" 
          value={task}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Deadline</Form.Label>
        <Form.Control 
          placeholder="Number" 
          type="number"
          value={deadline}
          onChange={handleChange}
        />
      </Form.Group>
      <Row className="d-flex justify-content-center ">
      <Button 
        className="col-md-6 text-center col-sm-10 col-xs-10"
        type="submit" 
        variant="secondary"
        onClick={addTask}
      >
        Submit
      </Button>
      </Row>
      {alerts.error && <Alert variant="danger" className="my-3">{alerts.error}</Alert>}
      {alerts.success && <Alert variant="success" className="my-3">{alerts.success}</Alert>}
    </Form>
  );
};

export default AddTodo;