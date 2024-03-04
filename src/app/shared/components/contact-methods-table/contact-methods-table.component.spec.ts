import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMethodsTableComponent } from './contact-methods-table.component';

describe('ContactMethodsTableComponent', () => {
  let component: ContactMethodsTableComponent;
  let fixture: ComponentFixture<ContactMethodsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMethodsTableComponent]
    });
    fixture = TestBed.createComponent(ContactMethodsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
