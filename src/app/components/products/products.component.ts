import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  product = new Product;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    this.getProductData();

  }

  getProductData(){

  console.log('Lista de productos');
  this.dataService.getData().subscribe(res =>{
    console.log(res);
    this.products = res;
  });

  }

  insertData(){
    //console.log('Agregar datos - test')
    console.log(this.product);
  }

}
