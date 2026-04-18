import Image from "next/image";
import ClientComponent from "./page-client";

export default function Home() {
  return (
    <><h1 className="text-3xl font-bold bg-fuchsia-900 text-center">THIS IS HOME PAGE</h1>
    <ClientComponent />
    </>
  )
}
