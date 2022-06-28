import { Component, Input, OnInit } from '@angular/core';
import { productUrl } from 'src/app/config/api';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';
import { InfoProductoService } from '../../../services/infoproduct.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productItem!: Product;
  @Input() addedToWishList!: boolean;


  constructor(
    private wishlistService: WishlistService
    ) { }

  ngOnInit(): void {
  }

  handleAddToWishList(){
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(()=>{
      console.log(this.addedToWishList = true);
   
    })
  }

  handleRemoveToWishList(){
    this.wishlistService.removeFromWishlish(this.productItem.id).subscribe(() => {
      console.log(this.addedToWishList = false);
    })
  }
}
