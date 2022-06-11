import React from 'react';
import './App.css';
import Login from './Login'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Products from './components/Products/Products';
import Topbar from './components/Topbar/Topbar';
import Cart from './components/Cart/Cart'
import { useState, useEffect } from 'react';
import {db } from './firebase-config';
import {getDocs, collection, addDoc, deleteDoc, doc, setDoc} from 'firebase/firestore';

function App ()  {
    const [isAuth, setIsAuth] = useState (localStorage.getItem("isAuth"));
    const [productList, setProductList] = useState ([]);
    const [cartList, setCart] = useState ([]);

    const productsCollectionRef = collection (db, "products");
    const cartCollectionRef = collection (db, "cart");


    const getProducts = async () => {
        const data = await getDocs(productsCollectionRef);
        setProductList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    const getCart = async () => {
        const data = await getDocs(cartCollectionRef);
        setCart(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    const handleAddToCart = async (product) => {
        const found = cartList.find(element => element.name === product.name);
        if (found == undefined) 
         {await addDoc(cartCollectionRef, {name: product.name, price: product.price, class:product.class, count:product.count});}
        else {
            alert("schon im Warenkorb")
        }    
     }

    const updateQuantity = async ( id, product, quantity) => {
        if (quantity > 0)
            {await setDoc(doc (db, "cart", id), {name: product.name, price: product.price, class:product.class, count:quantity});}
        else {
            deleteFromCart(product.id); 
            getCart()
        }  
     
        }
    
    

    const deleteFromCart = async (id) => {
        const data = doc (db, "cart", id);
        await deleteDoc(data);
        
    }

    


    

    //beim Laden der Seiten Produktdaten durchgehen und in data abspeichern, sowie Warenkorb laden
    useEffect (()  => {
        getProducts();
        getCart();
    },[]);


    const numberOfItems = cartList.length;
    // console.log(cartList);

    return (

        <Router>

            <div className="App">
            <Topbar isAuth={isAuth} setIsAuth={setIsAuth} numberOfItems={numberOfItems} ></Topbar>

                <div className="content">


                    <Routes>
                    <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
                    <Route path="/home" element={<Home productList={productList} cartList={cartList} onAddToCart = {handleAddToCart} getCart={getCart} />} />
                    <Route path="/product" element={<Products />} />
                    <Route path="/cart" element={<Cart cartList={cartList} deleteFromCart={deleteFromCart} getCart={getCart} updateQuantity={updateQuantity}/>}/>
                    </Routes>

                </div>
            </div>

        </Router>

    );
  }


export default App;