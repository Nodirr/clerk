import Head from "next/head";
import axios from "axios";
import Link from "next/link";

export async function getServerSideProps() {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return { props: { data } };
}

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Neaxt.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home</h1>
      <div className="main">
        {data?.map((el) => {
          return(
            <Link href={`/product/${el?.id}`} className="card" key={el?.id}> 
                <img src={el.image} alt="" />
                <h2>{el?.title}</h2>
            </Link>
          )
        })}
      </div>
    </>
  );
}
