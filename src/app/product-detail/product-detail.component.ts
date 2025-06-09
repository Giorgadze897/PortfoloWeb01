import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(productId);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart`);
  }

  // გამოტანს ვარსკვლავების სიმბოლოების სტრიქონს (მაგ: ★★★☆☆)
  getRatingStars(rating: number): string {
    const maxStars = 5;
    const fullStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(maxStars - rating);
    return fullStars + emptyStars;
  }
}