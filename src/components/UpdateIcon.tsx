import React, { useState } from 'react';
import { Button } from './ui/Button';

interface UpdateTaskProps {
  currentText: string;
  onUpdate: (newText: string) => void;
}

const UpdateTask: React.FC<UpdateTaskProps> = ({ currentText, onUpdate }) => {
  const [updatedText, setUpdatedText] = useState(currentText);

  return (
    <div className="flex mb-2">
      <input
        type="text"
        className="flex pl-5 border-2 rounded w-[26rem] h-[2.6rem] bg-gray-800 border-gray-900 text-white"
        value={updatedText}
        onChange={(e) => setUpdatedText(e.target.value)}
      />
      <Button
        onClick={() => onUpdate(updatedText)}
        className="absolute p-2 ml-[19rem] text-lg font-semibold text-white uppercase bg-gray-900 rounded-r hover:bg-gray-950 h-[2.6rem]"
      >
        Update
      </Button>
    </div>
  );
};

export default UpdateTask;
