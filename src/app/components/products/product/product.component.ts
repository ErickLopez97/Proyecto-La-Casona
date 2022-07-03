import { Component, Input, OnInit } from '@angular/core';
import { productUrl } from 'src/app/config/api';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';
import { InfoProductoService } from '../../../services/infoproduct.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productItem!: Product;
  @Input() addedToWishList!: boolean;

  stars(i:number){
    return new Array(i);
  }
  
  constructor(
    private wishlistService: WishlistService,
    private servicio: InfoProductoService
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
