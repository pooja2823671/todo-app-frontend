import { callGetAllAPI, callUpdateAPI ,callDeleteAPI} from "./BackendAPI";

function ShowTodoPage(props) {
    let todoArr = props.todo || [];
    console.log(JSON.stringify(todoArr))

    async function handleClick(e, todoId) {

        await callUpdateAPI(
            '/update-todo',
            {status:'completed', completionDate:new Date()},
            {'todoId':todoId}
        )

        let todoList=await callGetAllAPI('/read-todos')
        props.setTodo(todoList);
    }

        async function handleDeleteClick(e, todoId) {

        await callDeleteAPI(
            '/delete-todo',
            {'todoId':todoId}
        )

        let todoList=await callGetAllAPI('/read-todos')
        props.setTodo(todoList);
    }

    return (
        <div className="max-w-md mx-auto bg-white py-10 rounded-lg mt-6">
            <table className="w-full table-auto border border-gray-300 shadow-md rounded-lg">
                <thead className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-6 text-center shadow-md rounded-md">
                    <tr>
                        <th className="px-4 py-2 text-left">Todo Title</th>
                        <th className="px-4 py-2 text-left">Due Date</th>
                        <th className="px-4 py-2 text-left">Mark Done</th>
                        <th className="px-4 py-2 text-left">Delete</th>
                    </tr>
                </thead>

                <tbody className="bg-white text-gray-800">
                    {
                        todoArr
                            .filter(todo => todo.status !== "completed")
                            .map((value, index) => (
                                <tr className="border-t border-gray-200 hover:bg-gray-50"key={value.todoId}>
                                    <td className="flex justify-center">{value.todoTitle}</td>
                                    <td>{value.dueDate}</td>
                                    <td className="flex justify-center"><button onClick={(e) => handleClick(e, value.todoId)} class="py-2">✅</button></td>
                                    <td><button onClick={(e) => handleDeleteClick(e, value.todoId)}>❌</button></td>
                                </tr>
                            ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export { ShowTodoPage }