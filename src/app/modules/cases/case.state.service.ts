import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { CaseFile } from 'src/app/model/CaseFile';

@Injectable({
  providedIn: 'root',
})
export class CasesStateService {
  private deletedCaseSubject = new BehaviorSubject<number | null>(null);
  deletedCase$ = this.deletedCaseSubject.asObservable();

  deletedCase(selectedCaseId: number): void {
    this.deletedCaseSubject.next(selectedCaseId);
  }
}
