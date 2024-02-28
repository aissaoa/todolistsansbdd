import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingTasksComponent } from './shopping-tasks.component';

describe('ShoppingTasksComponent', () => {
  let component: ShoppingTasksComponent;
  let fixture: ComponentFixture<ShoppingTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingTasksComponent]
    });
    fixture = TestBed.createComponent(ShoppingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
