import React from 'react'
import { MdDelete } from "react-icons/md";

interface DeleteButtonProps {
    onDelete: () => void;
  }

const DeleteIcon: React.FC<DeleteButtonProps> = ({onDelete}) => {
  return (
    <div onClick={onDelete}>
      <MdDelete />
    </div>
  )
}

export default DeleteIcon;
