"use client"

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import productLinks from "../helpers/productLinks" // Adjust path if needed
import "./products.css"

const ProductCategoryPage = () => {
  const { category: categorySlug } = useParams() // expects full name like "Indian Basmati Rice"

  const [categoryData, setCategoryData] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const matchedCategory = productLinks.find((cat) => cat.category === categorySlug)


    setCategoryData(matchedCategory)

    if (matchedCategory) {
      const mockProducts = matchedCategory.items.map((item, index) => ({
        id: index.toString(),
        name: item.name,
        slug: item.slug,
        image: item.imgUrl || "/placeholder.svg",
        category: matchedCategory.category,
        subcategory: item.slug,
      }))

      setProducts(mockProducts)
    }

    setLoading(false)
  }, [categorySlug])
  return (
    <div className="category-page23">
      {/* Hero Banner */}
      <div className="category-banner23">
        <div className="banner-overlay23">
          <h1>{categoryData?.category || "Category Not Found"}</h1>
        </div>
      </div>

      <div className="container23">
        <div className="category-content23">
          {/* Sidebar - Always Shown */}
          <div className="category-sidebar23">
            <div className="sidebar-box23">
              <h3 className="sidebar-title23">
                {categoryData?.category || "Browse Categories"}
              </h3>
              <ul className="sidebar-categories23">
                {categoryData?.items?.length > 0 ? (
                  categoryData.items.map((item, index) => (
                    <li key={index}>
                      <Link to={`/product/${categorySlug}/${item.name}`}>{item.name}</Link>
                    </li>
                  ))
                ) : (
                  <li>No subcategories found.</li>
                )}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="category-main23">
            {categoryData ? (
              <>
                <div className="category-description23">
                  <h2>{categoryData.category}</h2>
                  <p>
                    {categoryData.desc ||
                      "Explore our wide range of products in this category."}
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
                        <Link to={`/product/${categorySlug}/${product.name}`}>
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
                <h2>We couldn't find any products for this category.</h2>
                <p>
                  Please check the category name or explore other categories from
                  the menu.
                </p>
                <Link to="/" className="back-button23">← Go back to Home</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategoryPage
