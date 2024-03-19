import { Component, Input } from '@angular/core';
import { PostalAddress } from 'src/app/model/PostalAddress';


@Component({
  selector: 'app-address-tab',
  templateUrl: './address-tab.component.html',
  styleUrls: ['./address-tab.component.css']
})
export class AddressTabComponent {
  @Input() addresses!: PostalAddress[]

  editAddress(){
    
  }
}
