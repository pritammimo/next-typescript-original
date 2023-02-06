import React from 'react'
async function fetchSessions2(context:any) {
    const {slug}=context.params
    const response = await fetch(
      `http://localhost:4000/products/${slug}`,
      { next: { revalidate: 60 } }
    );
  
    const data = await response.json();
    return data;
  }
const ProductPage = async (context: any) => {
    console.log("val",context.searchParams)
    const data=await fetchSessions2(context);
  return (
    <div>
        {data.title}
        {data.price}
        {data.description}
    </div>
  )
}

export default ProductPage