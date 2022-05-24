import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';
import {getDocs, collection, doc, addDoc} from 'firebase/firestore';
import {db } from '../../../firebase-config';
import { useState, useEffect } from 'react';


const Product = ({product, onAddToCart, getCart}) => {
    const classes = useStyles;

    // const [cart, setCart] = useState ({});
    // const cartCollectionRef = collection (db, "cart");

    // const handleAddtoCart = async () => {
    //     const item = await addDoc(cartCollectionRef, {name: product.name, price: product.price, class:product.class});
    //     setCart(item)
    //     console.log("clicked")
        

    // }

    
    

    
  return (

    //mittels material ui library einzelne Shopping.Cards Aufbau
    <Card className = {classes.root}>
        <CardMedia className={classes.media} image ='' title={product.name}/>
        <CardContent>
            <div className = {classes.CardContent}>
                <Typography variant = "h5" gutterBottom>
                    {product.name}  
                </Typography>
                <Typography variant = "h5" >
                    {product.price}  
                </Typography>

            </div>
            <Typography variant = "h6" color="textSecondary">
                {product.class}
                
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label= "Add to Cart" onClick={ () => {onAddToCart(product); getCart()}}>
                <AddShoppingCart/>

            </IconButton>

        </CardActions>
    </Card>
  )
}

export default Product

