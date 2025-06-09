import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    {
      id: 1,
      name: 'Rolex Submariner',
      price: 150,
      image: 'https://i.pinimg.com/736x/88/c1/9a/88c19a3f642237887bdb1a6ac3acad35.jpg',
      category: 'Men',
      description: 'Stylish watch for men.',
      rating: 4,
      isNew: true,
      shortDescription: 'Classic diving watch with luminescent hands.'
    },
    {
      id: 2,
      name: 'Rolex Daytona',
      price: 500,
      image: 'https://i.pinimg.com/736x/67/55/2e/67552eb9460466c98922773075201ebf.jpg',
      category: 'Women',
      description: 'Elegant watch for women.',
      rating: 5,
      isNew: false,
      shortDescription: 'Elegant chronograph perfect for formal occasions.'
    },
    {
      id: 3,
      name: 'Rolex Datejust',
      price: 200,
      image: 'https://i.pinimg.com/736x/7a/b8/81/7ab88180366d0d6f24578bc1d20b2f97.jpg',
      category: 'Luxury',
      description: 'Premium quality diving watch.',
      rating: 3,
      isNew: true,
      shortDescription: 'Luxury watch with timeless design and precision.'
    },
    {
      id: 4,
      name: 'Rolex GMT-Master II',
      price: 300,
      image: 'https://i.pinimg.com/736x/68/bd/f3/68bdf3369a8e61152d86f16158e616dd.jpg',
      category: 'Men',
      description: 'Stylish watch for men.',
      rating: 4,
      isNew: false,
      shortDescription: 'Iconic GMT watch with dual time zone.'
    },
    {
      id: 5,
      name: 'ROLEX DATEJUST',
      price: 150,
      image: 'https://i.pinimg.com/736x/0b/74/4e/0b744e4f1e26cc7055bcb7ce55fd447a.jpg',
      category: 'Women',
      description: 'Elegant watch for women.',
      rating: 3,
      isNew: true,
      shortDescription: 'Classic women’s watch with diamond dial.'
    },
    {
      id: 6,
      name: 'Rolex Yacht-Master',
      price: 800,
      image: 'https://i.pinimg.com/736x/46/32/d9/4632d9a7d8cb8589d102d65940d6349e.jpg',
      category: 'Luxury',
      description: 'Premium quality diving watch.',
      rating: 5,
      isNew: false,
      shortDescription: 'Luxury sailing watch with robust design.'
    },
    {
      id: 7,
      name: 'Rolex Explorer',
      price: 350,
      image: 'https://i.pinimg.com/736x/f3/f9/e0/f3f9e05a96a79f83bfc2c0b3a7210be1.jpg',
      category: 'Men',
      description: 'Stylish watch for men.',
      rating: 4,
      isNew: false,
      shortDescription: 'Explorer watch for adventure lovers.'
    },
    {
      id: 8,
      name: 'Rolex Milgauss',
      price: 250,
      image: 'https://i.pinimg.com/736x/be/63/5e/be635e4d2955da4edfef0f200ee1cd60.jpg',
      category: 'Women',
      description: 'Elegant watch for women.',
      rating: 3,
      isNew: true,
      shortDescription: 'Innovative watch resistant to magnetic fields.'
    },
    {
      id: 9,
      name: 'Rolex Day-Date 40',
      price: 150,
      image: 'https://i.pinimg.com/736x/9f/b1/f3/9fb1f3d0e2918f2e5b7e67b1d015792a.jpg',
      category: 'Luxury',
      description: 'Premium quality diving watch.',
      rating: 5,
      isNew: false,
      shortDescription: 'Prestigious day-date model with gold finish.'
    },
    {
      id: 10,
      name: 'Rolex Air-King',
      price: 800,
      image: 'https://i.pinimg.com/736x/fc/cd/8e/fccd8e6615e2a8480c5ec83010ec86dc.jpg',
      category: 'Men',
      description: 'Stylish watch for men.',
      rating: 4,
      isNew: true,
      shortDescription: 'Aviation inspired classic men’s watch.'
    },
    {
      id: 11,
      name: 'Rolex Cellini',
      price: 350,
      image: 'https://i.pinimg.com/736x/5a/e6/d2/5ae6d2ed5265b5b4e2a67d80192fe69c.jpg',
      category: 'Women',
      description: 'Elegant watch for women.',
      rating: 3,
      isNew: false,
      shortDescription: 'Sophisticated dress watch with leather strap.'
    },
    {
      id: 12,
      name: 'Rolex Yacht-Master II',
      price: 250,
      image: 'https://i.pinimg.com/736x/be/63/5e/be635e4d2955da4edfef0f200ee1cd60.jpg',
      category: 'Luxury',
      description: 'Premium quality diving watch.',
      rating: 5,
      isNew: true,
      shortDescription: 'Regatta chronograph with countdown timer.'
    },
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number): any {
    return this.products.find(p => p.id === id);
  }

  searchProducts(query: string) {
    return this.getProducts().filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  getProductsByCategory(category: string): any[] {
    return this.products.filter(p => p.category === category);
  }

  getAllCategories(): string[] {
    return [...new Set(this.products.map(p => p.category))];
  }
}
