import Head from 'next/head'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Head>
        <title>Livelook — Modern Tişört Mağazası</title>
        <meta name="description" content="Gençlere ve tasarımcılara özel tişört koleksiyonu." />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto p-6">
        <section className="mb-8">
          <div className="rounded-lg bg-gradient-to-r from-gray-900 to-black p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold">Livelook</h1>
              <p className="text-gray-300 mt-2">Gençlere, üniversitelilere ve tasarımcılara özel modern tişört koleksiyonu.</p>
              <a href="/products" className="inline-block mt-4 px-5 py-2 bg-primary text-black font-semibold rounded">Yeni Koleksiyon</a>
            </div>
            <div className="w-56 h-56 bg-card rounded-lg flex items-center justify-center">
              <img src="/mockups/p1.jpg" alt="hero" className="w-48 h-48 object-cover rounded" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Öne çıkan ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PRODUCTS.slice(0,6).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </main>

      <footer className="mt-12 p-6 text-center text-gray-400">
        © {new Date().getFullYear()} Livelook — Tüm hakları saklıdır.
      </footer>
    </div>
  )
}
