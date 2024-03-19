import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CaseService } from 'src/app/modules/cases/case.service';
import { SharedService } from '../../share.service';
import { CaseFile } from 'src/app/model/CaseFile';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list',
  templateUrl: './add-case-file.html',
  styleUrls: ['./add-case-file.css']
})
export class AddCaseFileComponent {

@Input() personId!: string;
newCaseFile : CaseFile =  {}

constructor(private sharedService: SharedService,
   public activeModal: NgbActiveModal,
   private modalService: NgbModal,
   ) {}


   addCaseFile(): void {
    this.sharedService.createCaseFile(this.newCaseFile).subscribe(
      (response: CaseFile) => {
        console.log('Case file created successfully:', response);
        this.activeModal.close();
        this.newCaseFile = response;
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
