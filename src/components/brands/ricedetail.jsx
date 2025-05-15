"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import productLinks from "../../helpers/productLinks" // Adjust if needed
import "./ricedetail.css"

const RiceDetails = () => {
  const { category: categorySlug, subcategory, "product-details": productSlug } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const formattedCategory = categorySlug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    const matchedCategory = productLinks.find(cat => cat.category === formattedCategory || cat.category === categorySlug)
console.log('matchedCategory', matchedCategory)
    if (!matchedCategory) {
      setError("Category not found")
      setLoading(false)
      return
    }

    // Convert subcategory slug to title case (e.g., "1121-basmati-rice" → "1121 Basmati Rice")
    const formattedSubcategory = subcategory
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    // Find the matched subcategory
  console.log('subcategory', subcategory)
    const matchedSub = matchedCategory.items.find(
      item => console.log('item', item, formattedSubcategory) || item.name === formattedSubcategory
    )
console.log('matchedSub', matchedSub)
    if (!matchedSub) {
      setError("Subcategory not found")
      setLoading(false)
      return
    }

    // Find exact product from subitems
    const matchedProduct = matchedSub.subitems?.find(p => p.name === productSlug)
    if (!matchedProduct) {
      setError("Product not found")
      setLoading(false)
      return
    }
console.log('matchedProduct', matchedProduct)
    // Combine image from parent and all data from subitem
    setProduct({
      ...matchedProduct,
      image: matchedProduct.imgUrl || matchedSub.imgUrl || "/placeholder.svg",
    })

    setLoading(false)
  }, [categorySlug, subcategory, productSlug])

  if (loading) {
    return <div className="loading">Loading product details...</div>
  }

  if (error || !product) {
    return <div className="error">{error || "Product not found"}</div>
  }

  return (
    <div className="product-details-container">
      <div className="product-details-grid">
        <div className="product-image-section">
          <div className="sticky-wrapper">
            <div className="product-image-for-detail">
              <img src={product.image} alt={product.name} />
            </div>

            {/* <div className="product-features">
              <h3>Known For</h3>
              <ul>
                {product.knowFor?.map((feature, index) => (
                  <li key={index}>
                    <div className="feature-dot"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="product-description">
            {product.desc?.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* <button className="quote-button">Get a Quote</button> */}

          {product.Specification && (
            <div className="product-specifications">
              <h3>Specification</h3>
              <table>
                <tbody>
                  {product.Specification.map((spec, index) => {
                    const specName = Object.keys(spec)[0]
                    const specValue = spec[specName]
                    return (
                      <tr key={index} className={index % 2 === 0 ? "row-even" : "row-odd"}>
                        <td className="spec-name">{specName}</td>
                        <td className="spec-value">{specValue}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}

          <div className="product-features">
              <h3>Known For</h3>
              <ul>
                {product.knowFor?.map((feature, index) => (
                  <li key={index}>
                    <div className="feature-dot"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RiceDetails
