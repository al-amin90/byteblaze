import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";



const Nav = () => {
    const localTheme = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(localTheme)

    const handleToggle = (e) => {

        if (e.target.checked) {
            console.log(e.target);
            setTheme("synthwave")
        }
        else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme)
    }, [theme])

    console.log(theme);

    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg px-8 sticky z-10">
                <div className="flex-1">
                    <a className="btn btn-ghost gap-0 text-secondary normal-case text-2xl font-bold">Byte<span className="text-primary">Blaze</span></a>
                </div>
                <div className="flex-none">
                    <ul className="hidden sm:flex gap-5 text-base mr-5 font-bold px-1">
                        <NavLink to="/"
                            className={({ isActive }) => isActive ? "text-primary" : ""}>Home</NavLink>
                        <NavLink to="/blogs"
                            className={({ isActive }) => isActive ? "text-primary" : ""}>Blogs</NavLink>
                        <NavLink to="/bookmarks"
                            className={({ isActive }) => isActive ? "text-primary" : ""}>Bookmarks</NavLink>
                    </ul>

                    <label className="cursor-pointer grid place-items-center">
                        <input
                            onChange={handleToggle}
                            type="checkbox"
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div >
            </div >
        </div >
    );
};

export default Nav;