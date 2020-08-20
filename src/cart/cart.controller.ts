import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  Headers,
} from '@nestjs/common';
import { CartService } from './cart.service';

@Controller()
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('cart')
  createCart(@Body('username') username: string): { cartId: string } {
    const cartId = this.cartService.create(username);

    return { cartId };
  }

  @Post('add')
  async addToCart(
    @Body('userId') userId: string,
    @Body('productId') productId: string,
    @Headers('Authorization') idToken: string,
  ) {
    const isAuthenticated = await this.cartService.authenticate(
      idToken,
      userId,
    );
    if (!isAuthenticated)
      return {
        message: 'Auth token is not Valid',
      };

    // Auth Successful
  }
}
