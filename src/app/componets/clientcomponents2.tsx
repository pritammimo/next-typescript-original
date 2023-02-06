// 'use client';
// import QueryProductService from '@/services/queryProductService';
// import IProductData from '@/types/product';
import React from 'react';
import Link from 'next/link'
import IProductData from '@/types/product';
async function fetchSessions() {
    const response = await fetch(
      "http://localhost:4000/products",
      { cache: "no-store" }
    );
  
    const data = await response.json();
    return data;
  }
export default async function ClientComponent2({children}:any){
    // const [products, setProducts] = useState<Array<IProductData>>([]);
    // const [currentProduct, setcurrentProduct] = useState<IProductData | null>(null);
    // const [currentIndex, setCurrentIndex] = useState<number>(-1);
   
    const data = await fetchSessions();  
    
  return ( 
    <div>
    <div className="list row">
    <div className="col-md-8">
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title"
          // value={searchTitle}
          // onChange={onChangeSearchTitle}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            // onClick={()=>findProductsByTitle()}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    {children}
    
    <div className="col-md-6">
      <h4>products List</h4>

      <ul className="list-group">
        {data && data.map((item:IProductData)=>(
            <li key={item.id}>
          <Link href={`/productsserver/${encodeURIComponent(item.id as unknown as string)}`}>
            {item.title}
          </Link>
        </li>
          
        ))}
       
      </ul>

     
    </div>
    <div className="col-md-6">
      Please click on Tutorial
      {/* {currentProduct ? (
        <div>
          <h4>Tutorial</h4>
          <div>
            <label>
              <strong>Title:</strong>
            </label>{" "}
            {currentProduct.title}
          </div>
          <div>
            <label>
              <strong>Category:</strong>
            </label>{" "}
            {currentProduct.category}
          </div>
          <div>
            <label>
              <strong>Price:</strong>
            </label>{" "}
            {currentProduct.price}
          </div>
          
          <div>
            <label>
              <strong>Description:</strong>
            </label>{" "}
            {currentProduct.description}
          </div>
          <Link
            to={"/product/" + currentProduct.id}
            className="badge badge-warning"
          >
            Edit
          </Link>
          <div
            className="badge badge-danger ml-2"
            onClick={()=>deleteProduct()}
          >
            Delete
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )} */}
    </div>
  </div>


  </div>
  )
}