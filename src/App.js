import { HeaderPage } from "./HeaderPage";
import { HomePage } from "./HomePage";
import { FooterPage } from "./FooterPage";
import { AddTodoPage } from "./AddTodoPage";
import { ShowTodoPage } from "./ShowTodoPage";
import { DoneTodoPage } from "./DoneTodoPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState,useEffect } from "react";
import { callGetAllAPI } from "./BackendAPI";

async function fetchTodo(setTodo){
  const todoList = await callGetAllAPI('/read-todos');
  setTodo(todoList);
}

function App() {
  let [todo, setTodo] = useState([])

  //useeffect is hook in react which cal after App.js component render
  useEffect(()=>{
    fetchTodo(setTodo)
  },[]);

  return (
    // BrowserRouter component used to define routing
    <BrowserRouter>
      <HeaderPage />

      {/* Routes component used to group route */}
      <Routes>
        {/* Route component defines path with our page component */}
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddTodoPage todo={todo} setTodo={setTodo}  />} />
        <Route path="/show" element={<ShowTodoPage todo={todo} setTodo={setTodo} />} />
        <Route path="/done" element={<DoneTodoPage todo={todo} setTodo={setTodo}  />} />
      </Routes>

      <FooterPage />
    </BrowserRouter>
  );
}

export default App;