import { auth } from "@/auth"
import Store from "@/models/stores"
import Navbar from "@/shared/components/navigate/Navbar"

export default async function StoreLayout({
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
            title={"Store"}
          />
          <main className=" px-0 lg:px-3">{children}</main>
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
              <h2 className="menu-title">Store</h2>
              <ul>
                <li>
                  <a>Item 1</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="menu-title">Products</h2>
              <ul>
              <li>
                  <a href="/store/product">
                    <i className="bx bx-list-plus"></i>
                    Product List
                  </a>
                </li>
                <li>
                  <a href="/store/product/input">
                    <i className="bx bx-package"></i>
                    Input Products
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
