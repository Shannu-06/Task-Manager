import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';
import { useForm } from '../hooks/useForm';

const TaskDetail = () => {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();
  const task = tasks.find(t => t.id === Number(id));
  const { formData, handleInputChange } = useForm(task);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(formData);
    navigate('/tasks');
  };

  if (!task) return <p>Task not found</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Task</h2>
      <input name="title" value={formData.title} onChange={handleInputChange} required />
      <textarea name="description" value={formData.description} onChange={handleInputChange} />
      <select name="status" value={formData.status} onChange={handleInputChange}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <select name="priority" value={formData.priority} onChange={handleInputChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Update Task</button>
    </form>
  );
};

export default TaskDetail;
