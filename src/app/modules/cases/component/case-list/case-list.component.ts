import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseFile } from 'src/app/model/CaseFile';
import { CaseService } from './../../CaseService';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCaseFileComponent } from 'src/app/shared/components/add-case-file/add-case-file';
import { EditCaseFileComponent } from 'src/app/shared/components/edit-case-file/edit-case-file';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {
  caseFiles: CaseFile[] = [];
  personId!: number;

  constructor(private router: Router,
     private caseService: CaseService,
     protected route: ActivatedRoute,
     private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadCaseFiles();
  }


  redirectToCreateCaseFileForm() {
    const modalRef = this.modalService.open(AddCaseFileComponent);
    modalRef.componentInstance.postalAddress = { title: '1' };
    modalRef.result.then((res) => console.log(res));
  }

  navigateToCaseFileDetails(personId : number) {
    this.router.navigate(['/cases', personId], {
      relativeTo: this.route
    });
  }

  loadCaseFiles(): void {
    this.caseService.listAllCaseFiles().subscribe(
      (caseFiles: CaseFile[]) => {
        this.caseFiles = caseFiles;
      },
      (error) => {
        console.error('Error loading case files:', error);
      }
    );
  }
}

