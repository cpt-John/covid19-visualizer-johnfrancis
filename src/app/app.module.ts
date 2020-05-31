import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { BarChartComponent } from './bar-chart/bar-chart.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { CountryDataComponent } from './country-data/country-data.component';
import { StateDataComponent } from './state-data/state-data.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,

    LoginComponent,
    RegisterComponent,
    MainDisplayComponent,
    CountryDataComponent,
    StateDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
