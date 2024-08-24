import React from 'react'
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Product = ({ data }) => {
    const router = useRouter()
  return (
    <div>
      <Head>
        <title>
          {data?.title} - Trueman &#8212; Официальный сайт мужской косметики
          Trueman в Узбекистане
        </title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <link rel='icon' href='/favicon.ico' sizes='32x32' />
        <link rel='icon' href='/favicon.ico' sizes='192x192' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <meta
          name='msapplication-TileImage'
          href='/favicon.ico'
        />

        <meta property='og:locale' content='ru_RU' />
        <meta property='og:site_name' content='Trueman' />
        <meta property='og:title' content={data?.title} />
        <meta property='og:url' content='https://trueman.uz' />
        <meta property='og:type' content='website' />
        <meta property='og:description' content={data?.desc} />
        <meta property='og:image' content={data?.image} />
        <meta property='og:image:url' content={data?.image} />
        <meta property='og:image:secure_url' content={data?.image} />
      
        <meta name='twitter:title' content={data?.title} />
        <meta name='twitter:url' content='https://trueman.uz' />
        <meta name='twitter:description' content={data?.title} />
        <meta name='twitter:image' content={data?.image} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

        <img width={400} src={data.image} alt="" />
        <h1>{data.title}</h1>
        <button onClick={() => router.push('/')}>Back to shop</button>
    </div>
  )
}

export async function getServerSideProps(context) {
    const id = context.params.id;
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return { props: { data } };
  }


export default Product