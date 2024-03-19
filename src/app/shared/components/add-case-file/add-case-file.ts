
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CaseService } from 'src/app/modules/cases/CaseService';
import { SharedService } from '../../share.service';
import { CaseFile } from 'src/app/model/CaseFile';

@Component({
  selector: 'app-list',
  templateUrl: './add-case-file.html',
  styleUrls: ['./add-case-file.css']
})
export class AddCaseFileComponent {

@Input() personId!: string;
newCaseFile : CaseFile =  {}

constructor(private sharedService: SharedService, public activeModal: NgbActiveModal,) {}


addCaseFile(): void {
  this.sharedService.createCaseFile(this.newCaseFile).subscribe(
    (response) => {
      console.log('Case file created successfully:', response);
    },
    (error) => {
      console.error('Error creating case file:', error);
    }
  );
}
closeModal() {
  this.activeModal.dismiss('Cross click');
}


}
