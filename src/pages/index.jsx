
// const handleToggleTheme = (e)=>{
//     e.preventDefault()
//     document.documentElement.classList.toggle("dark")

// }

export const Landing = () => {
    return (
        <h1>Landing</h1>
    )
}

export const Home = ()=> <h2>Home Page (PRIVATE)</h2>
export const Dashboard = ()=> <h2>Dashboard Page (PRIVATE)</h2>
export const Analytics = ()=> <h2>Analytics (PRIVATE, permission: 'analize')</h2>
export const Admin = ()=> <h2>Admin (PRIVATE, permission: 'administrator')</h2>