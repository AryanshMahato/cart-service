import { Injectable } from '@nestjs/common';
import { CartModel } from './cart.model';
import fetch from 'node-fetch';

@Injectable()
export class CartService {
  create(username: string): string {
    const cart = new CartModel(username);

    const savedCart = cart.save();

    return savedCart.id;
  }

  async authenticate(idToken: string, userId: string): Promise<boolean> {
    if (!idToken || !userId) return false;

    const response = await fetch(
      `http://localhost:3000/users/${userId}/validateToken`,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      },
    );

    const data = await response.json();

    return !!data.password;
  }

  async addToCart(userId: string, productId: string) {
    const cart = CartModel.addToCart(userId, productId);
  }
}
