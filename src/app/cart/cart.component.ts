import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router'; // ახალი import

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}


  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
  this.cartItems = this.cartService.getCartItems();

  if (this.cartItems.length === 0) {
    alert('Your cart is empty. Please add products first.');
    this.router.navigate(['/']);
    return;
  }

  this.calculateTotal();
  }


  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
    this.calculateTotal();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}