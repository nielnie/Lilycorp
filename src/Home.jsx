import './App.css';
import React, { useEffect } from 'react';
import {getDocs, collection, doc} from 'firebase/firestore';
import { useState } from 'react';
import {Grid} from '@material-ui/core';
import {db } from './firebase-config';
import Product from './components/Products/Product/Product'

function Home ({productList, onAddToCart, getCart}) {
    // const [productList, setProductList] = useState ([]);
    // const productsCollectionRef = collection (db, "products")

    // //beim Laden der Seiten Produktdaten durchgehen und in data abspeichern
    // useEffect (()  => {
    //     const getProducts = async () => {
    //         const data = await getDocs(productsCollectionRef);
    //         setProductList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //     }

    //     getProducts();
    // })

    return (
        

        //Produktdaten an componente Product übergeben, welche einzelne Card darstellt
        <main>
            <h1>Hey Home</h1>
                <Grid container justifyContent="center" spacing={5}>
                    {productList.map((product) => (
                        <Grid item key ={product.id} xs={12} s={6} md={4} lg={4}>
                            <Product product={product} onAddToCart={onAddToCart} getCart={getCart} />
                            </Grid>
                    ))}

                </Grid>

        </main>

    );
}

export default Home