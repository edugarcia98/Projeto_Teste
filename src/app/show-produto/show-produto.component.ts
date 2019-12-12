import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { Produto } from 'src/app/services/produto/produto';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-show-produto',
  templateUrl: './show-produto.component.html',
  styleUrls: ['./show-produto.component.css']
})
export class ShowProdutoComponent implements OnInit {

  produtos: Array<Produto>;
  selectedProduto;
  precoFinal;
  public produtoId;

  constructor(private produtoService: ProdutoService,
              private route: ActivatedRoute) {
    this.selectedProduto = {id: -1, nome: '', preco: 0, qtdEstoque: 0};
  }

  ngOnInit() {
    document.getElementById('btn-div').innerHTML = '<button style="background-color: #1169f7; border: none; color: white; padding: 6px 84px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin-top: 10px; cursor: pointer; border-radius: 2px;" disabled>COMPRAR</button>'

    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.produtoId = id;

    this.produtoService.get().subscribe(
      (items: Array<Produto>) =>
      {
        items.forEach
        (
          (produto: Produto) =>
          {
            if(produto.id == this.produtoId)
            {
              this.selectedProduto = produto;
              this.precoFinal = this.selectedProduto.preco * 1;
            }
          }
        )
      }
    )
  }

  atualizaPreco(event: any)
  { 
    if (event.target.value >= 0 && event.target.value <= this.selectedProduto.qtdEstoque)
    {
      this.precoFinal = this.selectedProduto.preco * event.target.value
      this.precoFinal = parseFloat(this.precoFinal.toFixed(2))

      if (event.target.value >= 10)
      {
        //document.getElementById('p-msg').innerHTML= 'Seu desconto aparecerá no checkout'
        //document.getElementById('div-msg').style = "background-color: #7fd45d;"
        document.getElementById('div-msg').innerHTML = '<div style="width: 250px; height: 50px; color: white; position: relative; background-color: #7fd45d;"><p style="position: absolute; left: 10px; bottom: -9px;">Seu desconto aparecerá no checkout</p></div>'
      }
      else
      {
        //document.getElementById('p-msg').innerHTML= 'Aviso: Comprar abaixo de 10 itens não tem desconto'
        //document.getElementById('div-msg').style = "background-color: #db3d3d;"
        document.getElementById('div-msg').innerHTML = '<div style="width: 250px; height: 50px; color: white; position: relative; background-color: #db3d3d;"><p style="position: absolute; left: 10px; bottom: -9px;">Aviso: Comprar abaixo de 10 itens não tem desconto</p></div>'
      }
    }
    

    if (event.target.value <= 0 || event.target.value > this.selectedProduto.qtdEstoque)
      document.getElementById('btn-div').innerHTML = '<button style="background-color: #1169f7; border: none; color: white; padding: 6px 84px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin-top: 10px; border-radius: 2px;" disabled>COMPRAR</button>'
    else 
      document.getElementById('btn-div').innerHTML = '<button style="background-color: #1169f7; border: none; color: white; padding: 6px 84px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin-top: 10px; cursor: pointer; border-radius: 2px;" disabled>COMPRAR</button>'
    
  }

}
