import { Cart } from './interface';
import { v4 as uuid } from 'uuid';

export class CartModel {
  constructor(private readonly username: string) {}

  save(): Cart {
    const cartId = uuid();

    const cart = { id: cartId, username: this.username };
    carts.push(cart);

    return cart;
  }

  public static addToCart(username: string, productId: string) {
    const cart = carts.find((cart) => cart.username === username);
    const product = products.find((product) => product.id === productId);
    cart.products = [...cart.products, product];

    // Needed to push the updated cart to carts array
  }
}

const carts: Array<Cart> = [];

const products = [
  { id: '1', name: 'Shoe', price: 599 },
  { id: '2', name: 'Shirt', price: 899 },
  { id: '3', name: 'Pant', price: 1199 },
  { id: '4', name: 'Watch', price: 1599 },
];
