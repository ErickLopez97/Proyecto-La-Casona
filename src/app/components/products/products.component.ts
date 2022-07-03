import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { InfoProductoService } from 'src/app/services/infoproduct.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { SortPipe } from 'src/app/pipe/sort.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Product[] = [];
  wishlist: number[] = []

  constructor(
    private servicio: InfoProductoService,
    private wishlistService: WishlistService
    ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishlist();
  }

  loadProducts(){
    this.servicio.getProducts().subscribe((products) => {
      this.productList = products;
      console.log(products);
    })
  }
  loadWishlist(){
    this.wishlistService.getWishlist().subscribe(productIds => {
      console.log(productIds)
      this.wishlist = productIds
    })
  }
}
