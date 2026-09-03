import { defineConfig } from 'vite'
import { resolve } from 'path'
import { main } from '@popperjs/core'

export default defineConfig({
  root: 'src',

  build: {
    outDir: '../dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        shop: resolve(__dirname, 'src/shop.html'),
        productDetails: resolve(__dirname, 'src/product-details.html'),
        cart: resolve(__dirname, 'src/cart.html'),
        checkout: resolve(__dirname, 'src/checkout.html'),
        account: resolve(__dirname, 'src/account.html'),
        login: resolve(__dirname, 'src/login.html'),
        register: resolve(__dirname, 'src/register.html'),
        wishlist: resolve(__dirname, 'src/wishlist.html')
      }
    }
  }
})