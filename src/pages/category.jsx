"use client"

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import productLinks from "../helpers/productLinks"
import "./products.css"

const Category = () => {
  const { category: categorySlug, subcategory } = useParams()
console.log('subcategory', subcategory);
  const [categoryData, setCategoryData] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const formattedCategory = categorySlug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    const matchedCategory = productLinks.find(
      (cat) => cat.category === categorySlug || cat.category === formattedCategory
    )
    setCategoryData(matchedCategory)

    const formattedSubcategory = subcategory
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    if (matchedCategory) {
      const parentItem = matchedCategory.items.find(item => item.name === formattedSubcategory)
console.log('parentItem', parentItem);
      if (parentItem && parentItem.subitems) {
        const subitemProducts = parentItem.subitems.map((subitem, index) => ({
          id: index.toString(),
          name: subitem.name,
          slug: subitem.slug,
          desc: subitem.desc,
          image: subitem.imgUrl || "/placeholder.svg",
          category: matchedCategory.category,
          subcategory: parentItem.slug,
        }))

        setProducts(subitemProducts)
      }
    }

    setLoading(false)
  }, [categorySlug, subcategory])
  console.log('products', products);
  return (
    <div className="category-page23">
      <div className="category-banner23">
        <div className="banner-overlay23">
          <h1>{categoryData?.category || "Category Not Found"}</h1>
        </div>
      </div>

      <div className="container23">
        <div className="category-content23">
          {/* Sidebar */}
          <div className="category-sidebar23">
            <div className="sidebar-box23">
              <h3 className="sidebar-title23">{subcategory}</h3>
              <ul className="sidebar-categories23">
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <li key={index}>
                        <Link to={`/product/${categorySlug}/${subcategory}/${product.name}`}>
                        {product.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>No subitems found.</li>
                )}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="category-main23">
            {categoryData ? (
              <>
                <div className="category-description23">
                  <h2>{subcategory}</h2>
                  <p>
                    {categoryData.desc}
                  </p>
                </div>

                {loading ? (
                  <div className="loading-spinner23">
                    <div className="spinner23"></div>
                    <p>Loading products...</p>
                  </div>
                ) : (
                  <div className="product-grid23">
                    {products.map((product) => (
                      <div className="product-card23" key={product.id}>
                        <Link to={`/product/${categorySlug}/${subcategory}/${product.name}`}>
                          <div className="product-image123">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                            />
                          </div>
                          <div className="product-info23">
                            <h3 className="product-name23">{product.name}</h3>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="no-products-found23">
                <h2>We couldn't find products under 1121 Basmati Rice.</h2>
                <Link to="/" className="back-button23">← Go back to Home</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
