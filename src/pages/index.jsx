import Head from "next/head";

import { Inter } from "next/font/google";
import axios from "axios";
import Link from "next/link";

export async function getServerSideProps() {
  const { data } = await axios.get('https://fakestoreapi.com/products')
  return { props: { data } }
}


export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <div className="container">
    <h1>Home</h1>
    <div className="main">
        {data?.map((el) => (
          <Link href={`/product/${el?.id}`} className="card" key={el?.id}>
<img src={el?.image} alt="" />
<h2>{el?.title}</h2>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}