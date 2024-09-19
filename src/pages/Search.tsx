import { useState } from "react"
import ProductCard from "../components/product-card";

const Search = () => {
 
  const [search,setSearch] = useState("");
  const [sort,setSort] =useState("");
  const [maxPrice,setMaxPrice] = useState(100000);
  const [category,setCategory] = useState("");
  const [page,setPage] = useState(1);
 
  const addToCartHandler = () => {

  }

  const isPrevPage = page===1;
  const isNextPage = page===4;

  return (
    <div className="product-search-page">
      <aside>
      <h2>Filters</h2>
      
      <div>
      <h4>Sort</h4>
      <select
      value={sort}
      onChange={(e)=>setSort(e.target.value)}
      >
        <option value="">None</option>
        <option value="asc">Price (Low to High)</option>
        <option value={"bsc"}>Price (High to Low)</option>
      </select>
      </div> 


      {/* ----------- */}

      <div>
      <h4>Max Price : {maxPrice || ""} </h4>
      <input
      type="range"
      min={100}
      max={10000}
      value={maxPrice}
      onChange={(e)=>setMaxPrice(Number(e.target.value))}
      >
      </input>
      </div> 

     {/* ------------- */}

     <div>
      <h4>Category </h4>
      <select 
      value={category}
      onChange={(e)=>setCategory(e.target.value)}
      >
      <option value="all" selected >All</option>  
      <option value="camera" >Camera</option>  
      <option value="game" >Game</option>  
      <option value="laptop">Laptop</option>  
      </select>
      </div>   
      </aside> 
      <main>
      <h1>Products</h1>
      <input
      type="text"
      placeholder="Search by name..."
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      ></input>  
      <div
      className="search-product-list"
      >
      <ProductCard
      productId="lorem"
      name="Macbook"
      price={454}
      stock={5}
      handler={addToCartHandler}
      photo="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsk3qpyutv-sZfVx0riiTgKpOeKX9d21SGkTO0IZhUw0MvSrEeN8SbGxHFl5a__ZYGi7onIARftwXlZ-_ol_IKk_Dl7jF-Tl02K4e13TfSjyhc_mlUnLlu1pwNNJWmYHTOiILbVL0&usqp=CAc"
      />  
      </div>
      <article>
      <button disabled= {isPrevPage} onClick={() => setPage(prev => prev-1)} >Prev</button> 
      <span>{page} of {4} </span>
      <button disabled={isNextPage} onClick={() => setPage(next => next+1)} >Next</button>       </article>
      </main>
    </div>
  )
}

export default Search
