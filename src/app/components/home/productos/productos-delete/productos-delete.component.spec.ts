import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosDeleteComponent } from './productos-delete.component';

describe('ProductosDeleteComponent', () => {
  let component: ProductosDeleteComponent;
  let fixture: ComponentFixture<ProductosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
