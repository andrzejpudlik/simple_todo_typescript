import { FC, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

import { ITask } from "../Interfaces";
import AddTodo from './AddTodo';
import Todo from './Todo';


const TodoList: FC = () => {
  const [todoList, setTodoList] = useState<ITask[]>([]);
  
  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <>
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
      <Container className="col-lg-6 col-sm-10 text-wrap text-break text-center">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((task: ITask, key: number) => {
                return <Todo key={key} task={task} deleteTask={deleteTask} />;
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TodoList;