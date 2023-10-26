import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categoryFilter:string= "Electronics" ;
  products = [
    {
      productName: "Laptop",
      price: 999.99,
      category: "Electronics",
      inStock: true
    },
    {
      productName: "Desk Chair",
      category: "Furniture",
      price: 999.99,
      inStock: false
    },
    {
      productName: "Table",
      category: "Furniture",
      price: 999.99,
      inStock: true
    },
    {
      productName: "Notebook",
      price: 1.99,
      category: "Stationery",
      inStock: true
    },
    {
      productName: "Book",
      price: 1.99,
      category: "Stationery",
      inStock: true
    },
    {
      productName: "Pencil",
      price: 1.99,
      category: "Stationery",
      inStock: true
    },
    {
      productName: "Headphones",
      price: 49.99,
      category: "Electronics",
      inStock: false
    },
    {
      productName: "Pen",
      category: "Stationery",
      price: 999.99,
      inStock: false
    }
  ];
  
}
