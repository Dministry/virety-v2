import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import VRPlayer from '@/components/VRPlayer'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Product from '@/components/Product'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Virety</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/header/virety-logo-32.png" />
      </Head>
      <Header />
      <main>
        <VRPlayer />
        <div>
          <Product />
        </div>
      </main>
    </>
  )
}
