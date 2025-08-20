function HomePage() {
    return (
        <div className="bg-white py-20 text-center shadow-md">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
                My Todo App
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
                Organize your day, boost your productivity, and never forget a task again. Add your todos, track progress, and celebrate completion!
            </p>

            <p className="mt-4 text-md text-purple-700 italic">
                "Productivity is never an accident. It's always the result of a commitment to excellence."
            </p>

        </div>
    )
}
export {HomePage}