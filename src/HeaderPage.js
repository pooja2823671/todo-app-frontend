import { Link } from "react-router-dom";
function HeaderPage() {
    return (
        <div class="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-6 text-center shadow-lg rounded-md">
            <header>
                <nav class="flex gap-4 justify-center">
                    <Link to='/add'>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Add</button>
                    </Link>
                    
                    <Link to='/show'>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Show</button>
                    </Link>

                    <Link to='/done'>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Done</button>
                    </Link>

                </nav>
            </header>
        </div>

    )
}
export { HeaderPage }