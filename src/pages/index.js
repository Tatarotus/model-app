import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <div className="max-w-screen-lg md:px-6 m-auto flex items-center justify-between h-screen">
        <Link to="/get-leads">
          <div className="main-box bg-red-700 hover:font-bold">Get Leads</div>
        </Link>

        <Link to="/get-clients">
          <div className="main-box bg-blue-700 hover:font-bold">
            Get Clients
          </div>
        </Link>

        <Link to="/get-delivery">
          <div className="main-box bg-green-700 hover:font-bold">Delivery</div>
        </Link>
      </div>
    </Layout>
  )
}
