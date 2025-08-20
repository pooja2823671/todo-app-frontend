import { callGetAllAPI, callUpdateAPI } from "./BackendAPI";

function DoneTodoPage(props) {
    let todoArr = props.todo;
    console.log(JSON.stringify(todoArr))

    async function handleClick(e, todoId) {
    
            await callUpdateAPI(
                '/update-todo',
                {status:'pending', completionDate:new Date()},
                {'todoId':todoId}
            )
    
            let todoList=await callGetAllAPI('/read-todos')
            props.setTodo(todoList);
        }

    return (
        <div class="max-w-md mx-auto bg-white py-10 rounded-lg mt-6">
            <table class="w-full table-auto border border-gray-300 shadow-md rounded-lg">
                <thead class="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-6 text-center shadow-md rounded-md">
                    <tr>
                        <th class="px-4 py-2 text-left">Completed Todo Title</th>
                        <th class="px-4 py-2 text-left">Completed On</th>
                        <th class="px-4 py-2 text-left">Undo</th>
                    </tr>
                </thead>

                {
                    todoArr
                        .filter(todo => todo.status === 'completed')
                        .map((todo, index) => {
                            return (
                                <tr className="border-t border-gray-200 hover:bg-gray-50" key={todo.todoId}>
                                    <td className="flex justify-center py-2">{todo.todoTitle}</td>
                                    <td>{new Date(todo.completionDate).toLocaleDateString()}</td>
                                    <td className="flex justify-center"><button  onClick={(e) => handleClick(e, todo.todoId)} className="py-2">↩️</button></td>
                                </tr>
                            );
                        })
                }
            </table>
        </div >
    )
}

export { DoneTodoPage }