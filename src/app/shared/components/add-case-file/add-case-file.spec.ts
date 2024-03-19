import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCaseFileComponent } from './add-case-file';



describe('ListComponent', () => {
  let component: AddCaseFileComponent;
  let fixture: ComponentFixture<AddCaseFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCaseFileComponent]
    });
    fixture = TestBed.createComponent(AddCaseFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
