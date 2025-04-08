'use client';

import React, { useState, useEffect } from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 로컬 스토리지에서 투두 로드
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      try {
        // 날짜 문자열을 Date 객체로 변환
        const parsedTodos = JSON.parse(storedTodos, (key, value) => {
          if (key === 'createdAt') return new Date(value);
          return value;
        });
        setTodos(parsedTodos);
      } catch (error) {
        console.error('투두 데이터 파싱 오류:', error);
      }
    }
  }, []);

  // 투두 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 투두 추가
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(), // 고유 ID 생성
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  // 투두 토글
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 투두 삭제
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 투두 수정
  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // 날짜별로 투두 그룹화
  const todosByDate = todos.reduce<Record<string, Todo[]>>((acc, todo) => {
    const dateStr = todo.createdAt.toLocaleDateString();
    if (!acc[dateStr]) {
      acc[dateStr] = [];
    }
    acc[dateStr].push(todo);
    return acc;
  }, {});

  return (
    <div className="max-w-md p-4 mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="my-4 text-2xl font-bold text-center text-indigo-600">투두 리스트</h1>
      <TodoForm onAdd={addTodo} />
      
      {Object.keys(todosByDate).length > 0 ? (
        Object.entries(todosByDate)
          .sort((a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime())
          .map(([dateStr, dateTodos]) => (
            <div key={dateStr}>
              <h2 className="mt-4 mb-2 text-lg font-semibold text-gray-700">{dateStr}</h2>
              <ul>
                {dateTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                  />
                ))}
              </ul>
            </div>
          ))
      ) : (
        <p className="text-center text-gray-500">할 일이 없습니다. 새로운 할 일을 추가해보세요!</p>
      )}
    </div>
  );
} 