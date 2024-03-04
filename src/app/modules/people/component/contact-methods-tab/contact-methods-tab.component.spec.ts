import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMethodsTabComponent } from './contact-methods-tab.component';

describe('ContactMethodsTabComponent', () => {
  let component: ContactMethodsTabComponent;
  let fixture: ComponentFixture<ContactMethodsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMethodsTabComponent]
    });
    fixture = TestBed.createComponent(ContactMethodsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
