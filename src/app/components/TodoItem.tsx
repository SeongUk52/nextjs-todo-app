'use client';

import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editText, setEditText] = React.useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between p-3 my-2 bg-white rounded-lg shadow-md border border-indigo-100 hover:shadow-lg transition-shadow">
      {isEditing ? (
        <div className="flex w-full gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 p-2 border border-indigo-200 rounded"
            autoFocus
          />
          <button
            onClick={handleEdit}
            className="px-3 py-1 text-white bg-indigo-500 rounded hover:bg-indigo-600 transition-colors"
          >
            저장
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-3 py-1 text-white bg-gray-500 rounded hover:bg-gray-600 transition-colors"
          >
            취소
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="w-5 h-5 text-indigo-600 rounded"
            />
            <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
              {todo.text}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 text-white bg-amber-500 rounded hover:bg-amber-600 transition-colors"
            >
              수정
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="px-3 py-1 text-white bg-rose-500 rounded hover:bg-rose-600 transition-colors"
            >
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
} 