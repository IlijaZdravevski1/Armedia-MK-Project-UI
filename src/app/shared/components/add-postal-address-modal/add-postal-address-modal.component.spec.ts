import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostalAddressModalComponent } from './add-postal-address-modal.component';

describe('AddPostalAddressModalComponent', () => {
  let component: AddPostalAddressModalComponent;
  let fixture: ComponentFixture<AddPostalAddressModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPostalAddressModalComponent]
    });
    fixture = TestBed.createComponent(AddPostalAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
