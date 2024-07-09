import { Component, OnInit } from '@angular/core';
import { ArticleCartService } from '../article-cart.service';
import { ArticleDataService } from '../article-data.service';
import { Article } from './Article';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {

  articles : Article[] = [];

  carts : Article [] = [];

  constructor(
    private cart: ArticleCartService,
    private articlesDataService : ArticleDataService) {      
  }

  ngOnInit(): void {
    this.articlesDataService.getAll()
    .subscribe(articles => this.articles = articles);
    this.cart.cartList.subscribe((c)=>this.carts=c);
  }

  addToCart(article: Article): void {
    if (article.quantity> article.stock) {
      article.quantity=0;
      return alert("No quedan esa cantidad de lugares disponibles");
      
    }
    else if (article.quantity<=0){
      article.quantity=0;
      return alert("Debe ingresar cantidad valida");

    }
    else {
       if (article.quantity==null)
       {
        article.quantity=0;
        return
       }
        this.cart.addToCart(article);
        article.quantity=0;
    }
  }

  stockDisponible(article: Article) {
    let item= this.carts.find((c)=>c.name===article.name);
    if(!item) {
      return article.stock;
    }
    else {
      return article.stock-item.quantity;
    }
  }

  maxReached(m : string) {
    alert(m); 
  }
}