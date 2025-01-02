import Navbar from "@/shared/components/navigate/Navbar"

export default function AccountLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="account-layout" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar
            leading={
              <>
                <label
                  htmlFor="account-layout"
                  className="btn btn-ghost drawer-button lg:hidden"
                >
                  <i className="bx bx-menu-alt-left"></i>
                </label>
              </>
            }
            title={"Account"}
          />
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <h2 className="menu-title">Account</h2>
              <ul>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="menu-title">Store</h2>
              <ul>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
