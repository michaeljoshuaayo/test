
import React, { useState } from "react";

import NavigationVar from './design/Navbar';
import { Button, Modal } from "react-bootstrap";


function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
    category: "",
  });
  const [editIndex, setEditIndex] = useState(-1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [editCategory, setEditCategory] = useState("");

  

  const addProduct = () => {
    if (newProduct.name.trim() !== "" && newProduct.price.trim() !== "" && newProduct.stock.trim() !== "" && newProduct.category.trim() !== "") {
      setProducts([...products, newProduct]);
      setSelectedCategory('')
      setNewProduct({
        id: "",
        name: "",
        price: "",
        stock: "",
        category: "",
      });
    }
  };

  const editProductHandler = (index) => {
    setEditIndex(index);
    setNewProduct(products[index]);
    setShow(true)
  };

  const updateProduct = () => {
    if (newProduct.name.trim() !== "" && newProduct.price.trim() !== "" && newProduct.stock.trim() !== "" && newProduct.category.trim() !== "") {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setProducts(updatedProducts);
      setEditIndex(-1);
      setShow(false)
      setNewProduct({
        id: "",
        name: "",
        price: "",
        stock: "",
        category: "",
      });
    }
  };

  const deleteProduct = (index) => {

    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const addCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const editCategoryHandler = (index, category) => {
    setEditIndex(index);
    setEditCategory(category);
  };

  const updateCategory = () => {
    if (editCategory.trim() !== "") {
      const updatedCategories = [...categories];
      updatedCategories[editIndex] = editCategory;
      setCategories(updatedCategories);
      setEditIndex(-1);
      setEditCategory("");
    }
  };

  const deleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };



  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setNewProduct({ ...newProduct, category: e.target.value });
  };

  
  return (
    <>
      <NavigationVar />
      <div style={container}>
        <div class="row">
          <div class="col-lg-4">
            <form style={Form}>
              <h3>Product Management</h3>
              <label for="prodid"><b>Product ID </b></label>
              <input type="text" value={newProduct.id}
                onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })} required style={Input} />


              <label for="prodname"><b>Product Name </b></label>
              <input id="product" type="text" value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} style={Input} required/>
              <label for="sellprice"><b>Price </b></label>
              <input type="text"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} required style={Input} required/>
              <label for="prodname"><b>Stock </b></label>
              <input type="number"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} style={Input} required/>



              <label for="prodcategory"><b>Cetegory</b></label>
              <select value={selectedCategory} onChange={handleCategoryChange} style={Input} required>
              <option value="" selected disabled>Select Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <button className="bg-primary btn-m" onClick={addProduct} style={Btn}>Submit</button>

            </form>

          </div>
          <div class="col-lg-5">
            <table class="table table-responsive " style={Margin}>
              <thead class='text-center'>
                <tr>
                  <th scope="col" class="bg-primary text-white">Product ID</th>
                  <th scope="col" class="bg-primary text-white">Name</th>
                  <th scope="col" class="bg-primary text-white">Price</th>
                  <th scope="col" class="bg-primary text-white">Stock</th>
                  <th scope="col" class="bg-primary text-white">Category</th>
                  <th scope="col" class="bg-primary text-white">Action</th>

                </tr>
              </thead>
              <tbody id="tbodyproducts" class='text-center'>
                {products.map((product, index) => (

                  <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>₱{product.price} </td>
                    <td>{product.stock}</td>
                    <td>{product.category}</td>
                    <Button onClick={() => editProductHandler(index)}>Update</Button>
                    <Button onClick={() => deleteProduct(index)} variant="danger">Delete</Button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="col-lg-3">
            <div style={Margin}>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />{'  '}
              <Button onClick={addCategory} variant="success" >Add Category</Button>
            </div>
            <table class="table table-responsive " >
              <thead class='text-center'>
                <tr>
                  <th scope="col" class="bg-primary text-white">Category Name</th>
                  <th scope="col" class="bg-primary text-white">Action</th>
                </tr>
              </thead>
              <tbody id="tbodyproducts" class='text-center'>
                {categories.map((category, index) => (

                  <tr key={index}>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                      />
                    ) : (
                      <td>{category}</td>
                    )}
                    {editIndex === index ? (
                      <Button onClick={updateCategory} variant="primary">Save</Button>
                    ) : (<td>
                      <Button onClick={() => editCategoryHandler(index, category)} variant="primary">Update</Button>                   
                    <Button onClick={() => deleteCategory(index)} variant="danger">Delete</Button></td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
        {products.map((product, index) => (
          <div key={index}>
            {editIndex === index ? (
              <div>
                <div>
                  <label>ID:</label>
                  <input
                    type="text"
                    value={newProduct.id}
                    onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
                  /><br/>
                </div>
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  />
                </div>
                <div>
                  <label>Price:</label>
                  <input
                    type="text"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  />
                </div>
                <div>
                  <label>Stock:</label>
                  <input
                    type="text"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                  />
                </div>
                <div>
                  <label>Category:</label>
                  <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Select Category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>               
              </div>
            ) : (
              <div>
                <span>ID: {product.id}</span>
                <span>Name: {product.name}</span>
                <span>Price: {product.price}</span>
                <span>Stock: {product.stock}</span>
                <span>Category: {product.category}</span>
                <button onClick={() => editProductHandler(index)}>Edit</button>
                <button onClick={() => deleteProduct(index)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  );
}
const Form = {
  padding: "20px",
  width: "100%",
  background: 'white'
}
const container = {
  boxSizing: "borderBox",
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "#f7f7f7"
}
const Input = {
  width: "100%",
  padding: "10px",
  margin: "5px 0 22px 0",
  display: "inlineBlock",
  border: "none",
  background: "#f7f7f7",
  fontFamily: "Montserrat,Arial, Helvetica, sans-serif"
}
const Btn = {
  backgroundColor: "#0eb7f4",
  color: "white",
  padding: "14px 20px",
  margin: "8px 0",
  border: "none",
  cursor: "pointer",
  width: "100%",
  opacity: "0.9",
  fontSize: "16px",
  fontFamily: "Montserrat,Arial, Helvetica, sansSerif",
  borderRadius: '10px'
}
const Margin = { marginTop: '20px' }
export default Home;