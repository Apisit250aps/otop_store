import { ReactNode } from "react"
import Logout from "./Logout"
import { auth } from "@/auth";

export default async function Navbar({
  leading,
  title
}: {
  leading: ReactNode
  title: string
}) {
  const session = await auth()
  return (
    <>
      <div className="navbar bg-base-100">
        {leading ? (
          <>
            <div className="navbar-start lg:hidden">{leading}</div>
          </>
        ) : null}
        <div className="navbar-center lg:navbar-start">
          <a className="btn btn-ghost text-xl">{title}</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Logout />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
