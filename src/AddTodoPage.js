import { useState } from "react";
import { callCreateAPI,callGetAllAPI } from "./BackendAPI";

function AddTodoPage({todo,setTodo}) {
    const [todoTitle, setTitle] = useState("");
    const [dueDate, setDate] = useState("");
    const [status, setStatus] = useState("pending");

    async function handleSubmit(e) {
        e.preventDefault();
        alert(`Form Submitted:\nTitle: ${todoTitle}\nDue Date: ${dueDate}\nStatus: ${status}`);

        let newTodo={
            todoId:Date.now().toString(),
            todoTitle:todoTitle,
            dueDate:dueDate,
            status:'pending'
        }
        await callCreateAPI('/create-todo',newTodo)

        //get our todo again
        const todoList = await callGetAllAPI('/read-todos');
          setTodo(todoList);
    }

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="text-gray-700 font-semibold">Todo Title</label>
                <input
                    type="text"
                    placeholder="Enter todoTitle"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                    value={todoTitle}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label className="text-gray-700 font-semibold">Due Date</label>
                <input
                    type="Date"
                    placeholder="Enter dueDate"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                    value={dueDate}
                    onChange={(e) => setDate(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold px-6 py-2 rounded hover:bg-blue-600 transition duration-300 mt-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export { AddTodoPage };
