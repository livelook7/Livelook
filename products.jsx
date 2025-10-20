import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'

export default function Products() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Tüm Ürünler</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </main>
    </div>
  )
}
