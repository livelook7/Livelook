export default function ProductCard({ product }){
  return (
    <article className="bg-card p-4 rounded shadow-sm">
      <img src={product.img} alt={product.title} className="w-full h-48 object-cover rounded mb-3" />
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-400">{product.category}</p>
      <div className="mt-3 flex items-center justify-between">
        <strong>{product.price.toLocaleString('tr-TR',{style:'currency',currency:'TRY'})}</strong>
        <button className="px-3 py-1 bg-accent text-white rounded">Sepete Ekle</button>
      </div>
    </article>
  )
}
