import { CasesStateService } from './../../case.state.service';
import { CaseService } from '../../case.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CaseFile } from 'src/app/model/CaseFile';
import { EditCaseFileComponent } from 'src/app/shared/components/edit-case-file/edit-case-file';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css'],
})
export class CaseDetailsComponent {
  selectedCaseFile!: CaseFile;
  personId!: number;
  caseFiles: CaseFile[] = [];

  constructor(
    private route: ActivatedRoute,
    private caseService: CaseService,
    private router: Router,
    private modalService: NgbModal,
    private casesStateService: CasesStateService
  ) {
    this.route.params.subscribe((params) => {
      this.personId = +params['id'];
      if (this.personId) {
        this.getPersonDetails(this.personId);
      }
    });
  }
  ngOnInit(): void {
  }

  getPersonDetails(personId: number): void {
    this.caseService.getCaseFileDetailsById(personId).subscribe(
      (caseFile: CaseFile) => {
        this.selectedCaseFile = caseFile;
      },
      (error: any) => {
        console.error('Error fetching person details:', error);
      }
    );
  }

  editCaseFile(isEdit: boolean, caseFile?: CaseFile) {
    const modalRef = this.modalService.open(EditCaseFileComponent);
    modalRef.componentInstance.isEdit = isEdit;
    modalRef.componentInstance.editcaseFile = { ...caseFile };
    modalRef.componentInstance.personId = this.personId;
    modalRef.componentInstance.modalTitle = isEdit
      ? 'Edit Case File'
      : 'Add New Case File';
    modalRef.result.then(
      (updatedCaseFile: CaseFile) => {
        console.log('Updated case file:', updatedCaseFile);
      },
      () => {
        console.log('Modal dismissed');
      }
    );
  }

  deleteCaseFile(): void {
    console.log(this.selectedCaseFile);
    if (this.selectedCaseFile && this.selectedCaseFile.id !== undefined) {
      this.caseService.deleteCaseFile(this.selectedCaseFile.id).subscribe(
        () => {
          console.log('Case file deleted successfully');
          if (this.selectedCaseFile.id) {
            this.casesStateService.deletedCase(this.selectedCaseFile.id);
          }
        },
        (error: any) => {
          console.error('Error deleting case file:', error);
        }
      );
    } else {
      console.error('No case file selected');
    }
  }
}
