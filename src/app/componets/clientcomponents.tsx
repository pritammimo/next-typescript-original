'use client';
import QueryProductService from '@/services/queryProductService';
import IProductData from '@/types/product';
import React,{useState,useEffect} from 'react'
import { useMutation, useQuery} from "react-query";
export default function ClientComponent({children}:any){
    const [products, setProducts] = useState<Array<IProductData>>([]);
    const [currentProduct, setcurrentProduct] = useState<IProductData | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const { isLoading: isLoadingProducts, refetch: getAllProducts } = useQuery<IProductData[], Error>(
        "query-products",
        async () => {
          return await QueryProductService.findAll();
        },
        {
          enabled: false,
          onSuccess: (res) => {
            // console.log("data",res)
            setProducts(res);
            // setGetResult(fortmatResponse(res));
          },
          onError: (err: any) => {
            // setGetResult(fortmatResponse(err.response?.data || err));
          },
        }
      );
      useEffect(() => {
        getAllProducts();
      }, []);
      const setActiveTutorial = (Product: IProductData, index: number) => {
        setcurrentProduct(Product);
        setCurrentIndex(index);
      };
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
        {products && products.map((item,i)=>(
          <div key={i}>{item.title}</div>
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