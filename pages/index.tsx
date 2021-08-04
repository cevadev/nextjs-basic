import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@components/Navbar/Navbar'

const HomePage = () => {
  // useState es un array de tipo TProduct
  const [productList, setProductList] = useState<TProduct[]>([])
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }) => setProductList(data))
      .catch((error) => console.error(error.message))
  }, [])

  return (
    <div>
      <h1>Avocates List</h1>
      {productList.map((item) => (
        <p>
          <Link href={`product/${item.id}`} key={item.id}>
            {item.name}
          </Link>
        </p>
      ))}
    </div>
  )
}

export default HomePage
