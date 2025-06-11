import { useTasks } from '../hooks/useTasks';
import { useFilter } from '../hooks/useFilter';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const { tasks, deleteTask } = useTasks();
  const { filteredTasks, filterStatus, setFilterStatus } = useFilter(tasks);

  return (
    <div>
      <h2>Task List</h2>
      <button onClick={() => setFilterStatus('all')}>All</button>
      <button onClick={() => setFilterStatus('completed')}>Completed</button>
      <button onClick={() => setFilterStatus('pending')}>Pending</button>

      {filteredTasks.map(({ id, title, status }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>Status: {status}</p>
          <Link to={`/task/${id}`}>Edit</Link>
          <button onClick={() => deleteTask(id)}>Delete</button>
        </div>
      ))}
      <Link to="/add-task">Add New Task</Link>
    </div>
  );
};

export default TaskList;
