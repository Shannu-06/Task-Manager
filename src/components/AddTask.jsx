import { useTasks } from '../hooks/useTasks';
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const { addTask } = useTasks();
  const { formData, handleInputChange, resetForm } = useForm({
    id: Date.now(),
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium'
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
    resetForm();
    navigate('/tasks');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" required />
      <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" />
      <select name="status" value={formData.status} onChange={handleInputChange}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <select name="priority" value={formData.priority} onChange={handleInputChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
