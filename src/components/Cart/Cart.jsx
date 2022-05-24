import React from 'react';
import {Container, Typography, Button, Grid} from'@material-ui/core';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';
import { fontSize } from '@mui/system';



function Cart ({cartList, deleteFromCart, getCart}) {

    const key = 'name';

    if (!cartList) return 'Loading';

    const uniqueProducts = [...new Map(cartList.map(item =>
        [item[key], item])).values()];

    

    const emptyCart = () =>  (
        <Typography variant="subtitle1">
            Du hast keine Artikel in deinem Einkaufswagen!
            <div>
            <Link style={{ color: 'inherit'}} to = "/home" >Füge jetzt welche hinzu</Link>
            </div>
        </Typography>
    );

    

    const fullCart =() => (
        <main>
             <Grid container justifyContent="center" spacing={5}>
                    {uniqueProducts.map((product) => (
                        <Grid item key ={product.id} xs={12} s={6} md={4} lg={4}>
                            <CartItem product={product} deleteFromCart={deleteFromCart} getCart={getCart} />
                            </Grid>
                    ))}

            </Grid>
            <div>
                <Typography variant="h4">
                    Subtotal: 
                </Typography>
                <Button size="large" variant="contained" color ="primary">
                    Checkout
                </Button>
            </div>
        </main>
    );


  return (
    <Container>
       
        <Typography variant='h3' gutterBottom >
            Dein Einkaufswagen
        </Typography>
       
        
        {!cartList.length ? emptyCart() : fullCart() }
     
        
    </Container>
  )
}

export default Cart