const products = [
    { 
        id: '1', 
        name: 'Galaxy S23',
        price: 1.649, 
        category: 'samsung', 
        img:'/products/samsung-prod-1.webp', 
        stock: 10, 
        description:'Descripcion del Iphone 15'
    },
    { 
        id: '2',
        name: 'Galaxy Z Flip5', 
        price: 1099, 
        category: 'samsung', 
        img:'/products/samsung-prod-2.webp', 
        stock: 10, 
        description:'Descripcion del Galaxy Z Flip5'
    },
    { 
        id: '3', 
        name: 'Galaxy Tab S9 FE', 
        price: 2999, 
        category: 'samsung', 
        img:'/products/samsung-prod-3.webp', 
        stock: 10, 
        description:'Descripcion del Galaxy Tab S9 FE'
    },
    { 
        id: '4', 
        name: 'iPhone 15',
        price: 1649, 
        category: 'apple', 
        img:'/products/apple-prod-1.webp', 
        stock: 10, 
        description:'Descripcion del Iphone 15'
    },
    { 
        id: '5',
        name: 'AirPods Pro', 
        price: 389, 
        category: 'apple', 
        img:'/products/apple-prod-2.webp', 
        stock: 10, 
        description:'Descripcion de los AirPods Pro'
    },
    { 
        id: '6', 
        name: 'MacBook Pro 16"', 
        price: 2999, 
        category: 'apple', 
        img:'/products/apple-prod-3.webp', 
        stock: 10, 
        description:'Descripcion del MacBook Pro 16"'
    },
    { 
        id: '7', 
        name: 'Xiaomi 13 Pro',
        price: 536, 
        category: 'xiaomi', 
        img:'/products/xiaomi-prod-1.webp', 
        stock: 10, 
        description:'Descripcion del Xiaomi 13 Pro'
    },
    { 
        id: '8',
        name: 'Xiaomi Redmi Note 12', 
        price: 275, 
        category: 'xiaomi', 
        img:'/products/xiaomi-prod-2.webp', 
        stock: 10, 
        description:'Descripcion del Xiaomi Redmi Note 12'
    },
    { 
        id: '9', 
        name: 'Xiaomi Redmi Buds 4', 
        price: 25, 
        category: 'xiaomi', 
        img:'/products/xiaomi-prod-3.webp', 
        stock: 10, 
        description:'Descripcion de los Xiaomi Redmi Buds 4 Active'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}