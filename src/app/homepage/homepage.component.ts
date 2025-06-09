import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }


  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
