import { useState } from 'react';

export const useFilter = (tasks) => {
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredTasks = tasks.filter(task =>
    filterStatus === 'all' ? true : task.status === filterStatus
  );

  return { filteredTasks, filterStatus, setFilterStatus };
};
