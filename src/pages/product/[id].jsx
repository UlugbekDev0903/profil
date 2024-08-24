import axios from 'axios'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

const Product = ({ data }) => {
    const router = useRouter()
    return (
        <div>
             <Head>
        <title>
          {data?.title} - Trueman &#8212; Официальный сайт мужской косметики
          Trueman в Узбекистане
        </title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel="icon" href="/favicon.ico" /> */}

        <link rel='icon' href='/favicon.ico' sizes='32x32' />
        <link rel='icon' href='/favicon.ico' sizes='192x192' />
        <link rel='favicon.ico' href='/Logo/PNG/Trueman_logo-09.png' />
        <meta
          name='msapplication-TileImage'
          href='/Logo/PNG/Trueman_logo-09.png'
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
        {/* <meta property="article:publisher" content="https://www.facebook.com/morganskazakhstan" /> */}
        <meta name='twitter:title' content={data?.name} />
        <meta name='twitter:url' content='https://trueman.uz' />
        <meta name='twitter:description' content={data?.title} />
        <meta name='twitter:image' content={data?.image} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

            <h1>{data.title}</h1>
            <img src={data.image} alt="" />
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
