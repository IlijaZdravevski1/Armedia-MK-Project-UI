import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./component/home/home.component";
import { HomeRoutingModule } from "./homeRouts";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
],
exports: [HomeComponent]
})
export class HomeModule { }
