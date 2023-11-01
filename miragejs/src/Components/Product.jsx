import React, { useEffect } from 'react';
import { createServer } from 'miragejs';
import data from '../data.json';

createServer({
    routes() {
        // this.get('/api/products', () => data.products)
        this.get('/api/users', () => {
            return this.schema.all('user')
        })
        this.post('/api/users', (schema, request) => {
            const userData = JSON.parse(request.requestBody);
            const user = schema.create('user', userData);
            return user;
        })
    }
})

const Product = () => {

    const handlePost = () => {
        fetch('/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userName: "Sumit Goswami", age: 25 })
        })
            .then(res => res.json())
            .then(user => console.log(user))
    }

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(users => console.log(users))
    }, [])

    return (
        <div>
            <button onClick={handlePost}>Post</button>
        </div>
    )
}

export default Product;