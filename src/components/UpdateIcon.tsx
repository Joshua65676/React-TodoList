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
        className="flex pl-5 border-2 rounded xl:w-[26rem] h-[2.6rem] mx:w-[16rem] xm:w-[18.3rem] md:w-[19.5rem]"
        value={updatedText}
        onChange={(e) => setUpdatedText(e.target.value)}
      />
      <Button
        onClick={() => onUpdate(updatedText)}
        className="xl:absolute p-2 xl:ml-[19rem] text-lg font-semibold text-white uppercase bg-blue-700 rounded-r hover:bg-blue-500 h-[2.6rem] mx:w-[6.5rem] xl:w-[7rem]"
      >
        Update
      </Button>
    </div>
  );
};

export default UpdateTask;
