import { FC } from "react";
import { Button } from 'react-bootstrap';

import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask: FC<Props> = ({ task, deleteTask }) => {
  return (
    <tr>
      <td>{task.taskName}</td>
      <td>{task.deadline === 1 ? `${task.deadline} day` : `${task.deadline} days`}</td>
      <td>
        <Button
          variant="danger"
          onClick={() => {
            deleteTask(task.taskName);
          }}
        >
          X
        </Button>
      </td>
    </tr>
  );
};

export default TodoTask;
