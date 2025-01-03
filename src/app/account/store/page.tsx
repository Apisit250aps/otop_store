"use client"

import StoreForm from "./components/StoreForm";

export default function AccountStore() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3>New Store</h3>
          </div>
          <hr />
          <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
            <StoreForm />
          </div>
        </div>
      </div>
    </>
  )
}
