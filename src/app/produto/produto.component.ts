import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { Produto } from 'src/app/services/produto/produto'
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Array<Produto>;

  constructor(private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit() {
    this.produtoService.get().subscribe(res => {
      this.produtos = res;
    })
  }

  goToDetails(item)
  {
    console.log(item)
    this.router.navigate([`produto/${item.id}/details`])
  }

}
