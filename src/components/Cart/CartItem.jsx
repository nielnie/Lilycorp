import React from 'react';
import {Container, Typography, Button, Grid, Card, CardContent, CardActions} from'@material-ui/core';
import { getCardUtilityClass } from '@mui/material';

const CartItem = ({product, deleteFromCart,getCart}) => {
  return (
    <Card >
        
        <CardContent>
                <Typography variant = "h5" gutterBottom>
                    {product.name}  
                </Typography>
                <Typography variant = "h5" >
                     {product.price}  €
                </Typography>
                <Typography>
                    Anzahl: {product.count}
                </Typography>
        </CardContent>
        <CardActions>
            <div>
                
                <Button color="secondary" onClick={() => {deleteFromCart(product.id); getCart()}}>
                    löschen
                </Button>
            </div>
        </CardActions>
        
    </Card>
  )
}

export default CartItem