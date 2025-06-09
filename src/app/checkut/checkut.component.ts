import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkut',
  standalone: false,
  templateUrl: './checkut.component.html',
  styleUrl: './checkut.component.css'
})
export class CheckutComponent implements OnInit {
  cartItems: any[] = [];
  subtotal: number = 0;
  tax: number = 10;
  total: number = 0;

  payment = {
    name: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    billingSameAsShipping: true
  };

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.subtotal = this.cartService.getTotalPrice();
    this.total = this.subtotal + this.tax;

    if (this.cartItems.length === 0) {
      alert('კალათა ცარიელია!');
      this.router.navigate(['/']);
    }
  }

  placeOrder() {
    if (!this.payment.name || !this.payment.cardNumber || !this.payment.expDate || !this.payment.cvv) {
      alert('გთხოვთ შეავსოთ ყველა ველი!');
      return;
    }

    console.log('შეკვეთა დასრულდა:', this.payment, this.cartItems);
    this.cartService.clearCart();
    this.router.navigate(['/thank-you']);
  }
}