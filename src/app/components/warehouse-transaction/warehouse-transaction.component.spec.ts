import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseTransactionComponent } from './warehouse-transaction.component';

describe('WarehouseTransactionComponent', () => {
  let component: WarehouseTransactionComponent;
  let fixture: ComponentFixture<WarehouseTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
