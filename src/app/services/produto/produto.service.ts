import { Injectable } from '@angular/core';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Array<object> = [
    { id: 1, 
      nome: 'Produto 1', 
      preco: 1000.37,
      qtdEstoque: 13
    },
    { id: 2, 
      nome: 'Produto 2', 
      preco: 2.37,
      qtdEstoque: 22
    },
    { id: 3, 
      nome: 'Produto 3', 
      preco: 3.37,
      qtdEstoque: 8
    },
    { id: 4, 
      nome: 'Produto 4', 
      preco: 1.70,
      qtdEstoque: 15
    },
    { id: 5, 
      nome: 'Produto 5', 
      preco: 1.23,
      qtdEstoque: 41
    },
    { id: 6, 
      nome: 'Produto 6', 
      preco: 1.89,
      qtdEstoque: 19
    },
    { id: 7, 
      nome: 'Produto 7', 
      preco: 4.37,
      qtdEstoque: 17
    },
    { 
      id: 8, 
      nome: 'Produto 8', 
      preco: 3.51,
      qtdEstoque: 30
    },
  ]

  constructor() { }

  get(){
    return of(this.produtos);
  }
}
