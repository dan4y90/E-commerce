import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    { 
      id: '5',
      name: 'Camara',
      price: 13,
      image: './assets/images/camara.jpg'
    },
    { 
      id: '6',
      name: 'Zapatos',
      price: 13,
      image: './assets/images/zapatos.jpg'
    },
    { 
      id: '7',
      name: 'Todo1',
      price: 14,
      image: './assets/images/todo1.jpg'
    },
    { 
      id: '8',
      name: 'Estatuas',
      price: 23,
      image: './assets/images/estatuas.jpg'
    },
    { 
      id: '9',
      name: 'Globo',
      price: 89,
      image: './assets/images/globo.jpg'
    },
    { 
      id: '10',
      name: 'Globo2',
      price: 179,
      image: './assets/images/globo2.jpg'
    },
    { 
      id: '11',
      name: 'lentes',
      price: 10,
      image: './assets/images/lentes.jpg'
    },
    { 
      id: '12',
      name: 'Pesa',
      price: 13,
      image: './assets/images/pesa.jpg'
    }
  ];

  constructor(
    private storeService: StoreService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
