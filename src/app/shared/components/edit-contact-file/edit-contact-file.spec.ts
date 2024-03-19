import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditContactComponent } from './edit-contact-file';



describe('ContactMethodsTableComponent', () => {
  let component: EditContactComponent;
  let fixture: ComponentFixture<EditContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditContactComponent]
    });
    fixture = TestBed.createComponent(EditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});