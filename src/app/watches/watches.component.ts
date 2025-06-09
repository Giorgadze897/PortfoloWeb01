import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-watches',
  standalone: false,
  templateUrl: './watches.component.html',
  styleUrl: './watches.component.css'
})
export class WatchesComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  minPrice: number = 0;
  maxPrice: number = 10000;

  sortOption: string = '';
  // დამატებითი ფილტრები (Departments, Availability, Category)
  departments: string[] = ['Men', 'Women', 'Kids'];
  selectedDepartment: string = '';
  availabilityOptions: string[] = ['In Stock', 'Out of Stock'];
  selectedAvailability: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.categories = this.productService.getAllCategories();
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      return (
        (this.selectedCategory === '' || product.category === this.selectedCategory) &&
        (this.selectedDepartment === '' || product.department === this.selectedDepartment) &&
        (this.selectedAvailability === '' || (this.selectedAvailability === 'In Stock' ? product.inStock : !product.inStock)) &&
        product.price >= this.minPrice &&
        product.price <= this.maxPrice
      );
    });
    this.sortProducts();
  }

  sortProducts(): void {
    switch(this.sortOption) {
      case 'price-asc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  onViewResults(): void {
    this.filterProducts();
  }
}