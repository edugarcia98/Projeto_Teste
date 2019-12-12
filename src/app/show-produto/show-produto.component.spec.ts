import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProdutoComponent } from './show-produto.component';

describe('ShowProdutoComponent', () => {
  let component: ShowProdutoComponent;
  let fixture: ComponentFixture<ShowProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
