import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddContactMethodModalComponent } from '../add-contact-method-modal/add-contact-method-modal.component';


describe('AddContactMethodModalComponent', () => {
  let component: AddContactMethodModalComponent;
  let fixture: ComponentFixture<AddContactMethodModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContactMethodModalComponent]
    });
    fixture = TestBed.createComponent(AddContactMethodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
