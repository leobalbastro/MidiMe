
export function Alert({message}){
    return <div className="bg-red-300 border border-red-400 text-white-700 px-4 py-3 rounded relative mb-2 text-center">
        <span className="sm:inline block">{message}</span>
    </div>
}

export function Success({message}){
    return <div className="bg-green-300 border border-green-400 text-white-700 px-4 py-3 rounded relative mb-2 text-center">
        <span className="sm:inline block">{message}</span>
    </div>
}