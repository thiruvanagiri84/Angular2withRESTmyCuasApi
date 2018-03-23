import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BentoModule } from "@bento.ui/bento-ng";
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from "./app.component";
import { DataService } from "./data.service";

import { AdminsComponent } from './admins/admins.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
	declarations: [
		AppComponent,
		AdminsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		BentoModule,
		ClipboardModule,
		HttpClientModule,
		NgbModule.forRoot()
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
