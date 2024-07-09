import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from './article-list/Article';

const jsLibraries = ['react', 'redux', 'vue', 'D3', 'Chart']

@Injectable({
  providedIn: 'root'
})

export class ArticleCartService {
  
  private _cartList: Article[] = [];
  
  cartList: BehaviorSubject<Article[]> = new BehaviorSubject(this._cartList);
  
  constructor() { }
  

  addToCart(article : Article) { 
    let item = this._cartList.find((v1) => v1.name == article.name); 
    if (!item){
      if (article.quantity>0){
        this._cartList.push({... article});
      }
    } else {
      item.quantity += article.quantity;
    }
    this.cartList.next(this._cartList);
  }

  delete(article: Article){

    let item = this._cartList.find((v1) =>v1.name==article.name);
    this._cartList= this._cartList.filter((v1)=>v1.name!=article.name);
    this.cartList.next(this._cartList);
  }
  
}