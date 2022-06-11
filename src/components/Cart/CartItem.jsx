import React from 'react';
import {Container, Typography, Button, Grid, Card, CardContent, CardActions} from'@material-ui/core';
import { getCardUtilityClass } from '@mui/material';
import useStyles from './styles';

const CartItem = ({product, deleteFromCart,getCart, updateQuantity}) => {

const classes = useStyles();
let sum = product.price * product.count;



  return (
    <Card >
        
        <CardContent className={classes.cardContent}>
                <Typography variant = "h5" gutterBottom>
                    {product.name}  
                </Typography>
                <Typography variant = "h5" >
                     {sum} €
                </Typography>
                
        </CardContent>
        <CardActions className={classes.cardActions}>
            <div className={classes.buttons}>
                <Button type="button" size="small" onClick={() => {updateQuantity(product.id, product,  product.count - 1); getCart()}}>-</Button>
                <Typography>
                     {product.count}
                </Typography>
                <Button type="button" size="small" onClick={() => {updateQuantity(product.id, product , product.count + 1); getCart()}}>+</Button>

            </div>
                
                <Button color="secondary" onClick={() => {deleteFromCart(product.id); getCart()}}>
                    löschen
                </Button>
            
        </CardActions>
        
    </Card>
  )
}

export default CartItem