import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ArticleCartService } from '../article-cart.service';
import { Article } from '../article-list/Article';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements OnInit {

  cartList$: Observable<Article[]>;
  
  constructor(private cart: ArticleCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  delete(article: Article) : void{
    
    this.cart.delete(article);
      article.stock+= article.quantity;
      
  }

}