import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowProdutoComponent } from './show-produto/show-produto.component';
import { ProdutoService } from './services/produto/produto.service';
import { ProdutoComponent } from './produto/produto.component';

const appRoutes: Routes = [
  {path: 'produto/:id/details', component: ShowProdutoComponent},
  {path: 'produtos', component: ProdutoComponent},
  {path: '', component: ProdutoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ShowProdutoComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
