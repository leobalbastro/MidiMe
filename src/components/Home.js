import { useAuth } from "../context/authContext";

export function Home() {
  const { user, logout, loading } = useAuth();
  console.log(user)
  const handleLogout= async () => {
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) return <h1>loading...</h1>
  return <div className="w-full max-w-xs m-auto text-black">
    <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4 dark:bg-black">
    <h1 className="text-xl mb-4 dark:text-gray-100">Welcome {user.displayName || user.email}</h1>
    <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm dark:bg-black dark:border-2 dark:text-white dark:hover:bg-slate-800">Logout</button>
    </div>
  </div>;
}
