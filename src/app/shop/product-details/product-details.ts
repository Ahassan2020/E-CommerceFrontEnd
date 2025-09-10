import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop-service';
import { IProduct } from '../../shared/Models/Product';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails {
reviews:any[]=[]
 MainImage: string;
  qunatity: number = 1;
  product: IProduct;
  loading:boolean=false; constructor(
    private shopService: ShopService,
    private route: ActivatedRoute,
   // private toast:ToastrService,
   // private basketService:BasketService
  ) {}

ngOnInit(): void {
    this.loadProduct();
  }
loadProduct() {
    this.shopService.getproductById(parseInt(this.route.snapshot.paramMap.get('id')))
      .subscribe({
        next: (value: IProduct) => {
          this.product = value;
          this.MainImage = this.product.photos[0].imageName;
        },
      });
  }
 ReplaceImage(src: string) {
    this.MainImage = src;
  }
  incrementBasket() {
    // if(this.qunatity<10){
    //   this.qunatity++;
    //   this.toast.success("item has been added to the basket","SUCCESS")
    // }else{
    //   this.toast.warning("You can't add more than 10 items","Enough")
    // }
  }
  DecrementBasket() {
    // if(this.qunatity>1){
    //   this.qunatity--;
    //   this.toast.warning("item has been Decrement","SUCCESS")
    // }else{
    //   this.toast.error("You can't Decrement more than 1 items","ERROR")
    // }
  }
  AddToBasket(){
    // this.basketService.addItemToBasket(this.product,this.qunatity)
    // this.toast.success("item has been added to basket","SUCCESS")
  }
  CalucateDiscount(oldPrice:number,newPrice:number):number{
    return parseFloat(
    Math.round(((oldPrice-newPrice)/oldPrice)*100).toFixed(1)
    )
  }
  showReview(id:number){
    // this.loading=true
    // this.shopService.getProductRating(id).subscribe({
    //   next:res=>{
    //     this.loading=false
    //     this.reviews=res
    //   },error(err) {
    //     console.log(err);

    //   },
    // })
  }

}
