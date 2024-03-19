import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCaseFileComponent } from './edit-case-file';



describe('ContactMethodsTableComponent', () => {
  let component: EditCaseFileComponent;
  let fixture: ComponentFixture<EditCaseFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCaseFileComponent]
    });
    fixture = TestBed.createComponent(EditCaseFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
