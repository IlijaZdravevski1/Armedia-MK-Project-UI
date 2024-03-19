import { SharedService } from './../../share.service';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CaseFile } from 'src/app/model/CaseFile';

@Component({
  selector: 'app-contact-methods-table',
  templateUrl: './edit-case-file.html',
  styleUrls: ['./edit-case-file.css']
})

export class EditCaseFileComponent {
  @Input() editcaseFile: CaseFile = {};
  @Input() personId!: string;

  constructor(
    public activeModal: NgbActiveModal,
    private sharedService : SharedService
  ){};

  updateCaseFile(): void {
      this.sharedService.updateCaseFile(Number(this.personId), this.editcaseFile).subscribe({
        next: () => {
          this.activeModal.close(this.editcaseFile);
          console.log('Case file updated successfully');
        },
        error: (err) => {
          console.error('Error updating case file:', err);
        },
      });
  }
  

  cancelEdit(){
    this.activeModal.dismiss('Cross click');
  }

}
