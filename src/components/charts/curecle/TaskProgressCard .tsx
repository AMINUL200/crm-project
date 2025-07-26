import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskProgressCard = () => {
  const totalTasks = 28;
  const completedTasks = 20;
  const percentage = (completedTasks / totalTasks) * 100;

  return (
    <div className="bg-white p-4 rounded-xl shadow border h-[150px]">
      {/* Top Row */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm text-gray-500">Tasks Not Finisheds</p>
          <h2 className="text-2xl font-bold text-gray-900">{completedTasks}</h2>
        </div>
        <div className="bg-yellow-400 p-3 rounded-xl text-white">
          <FontAwesomeIcon icon={faClipboardCheck}/>
        </div>
      </div>

      {/* Label Row */}
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <p>Complete Task</p>
        <p className="font-medium text-gray-700">
          {completedTasks}/{totalTasks}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-yellow-400 rounded-full transition-all duration-700"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TaskProgressCard;
