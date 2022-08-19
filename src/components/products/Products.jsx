import React from 'react'
import Grid from '@material-ui/core'

const products = [
    { id:1, name: 'Queen Bed', description: 'Perfect for small homes or apartments with limited space.', image: 'https://m.media-amazon.com/images/I/816G6ZYDSxL._AC_SL1500_.jpg', price: '$450.83'},
    { id:2, name: 'Speaker', description: 'Compact design delivers crisp vocals and balanced bass for full sound.', image: 'https://m.media-amazon.com/images/I/61dkdPS2eBL._AC_SL1000_.jpg', price: '$63.21'},
    { id:3, name: 'In-Ear Headphones', description: 'ultra-compact case fits effortlessly in small bags or pockets.', image: 'https://m.media-amazon.com/images/I/51wd-6hT34S._AC_SL1500_.jpg', price: '$114,69'}
   
]

const Products = () => {
  return (
    <main>
        <Grid container justify='center' spacing={4}>
            {products.map((products) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product />
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products