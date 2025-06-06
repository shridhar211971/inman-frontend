import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCartComponent } from './customer-cart.component';

describe('CustomerCartComponent', () => {
  let component: CustomerCartComponent;
  let fixture: ComponentFixture<CustomerCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
