"use client"

import { IStore } from "@/models/stores"
import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2";

export default function StoreForm() {
  const [storeForm, setStoreForm] = useState({
    name: ""
  } as IStore)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await axios({
      method: "post",
      url: "/api/store",
      data: { ...storeForm }
    })
    console.log(res)
    if (res.status === 201) {
      Swal.fire({
        title: "Good job!",
        text: "Store create success",
        icon: "success"
      })
      setStoreForm({ name: "" } as IStore)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Store Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={storeForm.name}
            onChange={(e) =>
              setStoreForm(
                (prev) => ({ ...prev, name: e.target.value } as IStore)
              )
            }
          />
        </label>
        <button type="submit" className=" btn btn-primary">Submit</button>
      </form>
    </>
  )
}
