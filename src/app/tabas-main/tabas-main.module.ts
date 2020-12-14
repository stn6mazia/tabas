import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent, InitPageComponent, TestsPageComponent } from './pages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabasMainComponent } from './tabas-main.component';
import { TabasMainRoutingModule } from './tabas-main-routing/tabas-main-routing.module';
import { ArrArgsComponent, CalculatorComponent, DynamicArgsComponent, NumNameComponent, RecursiveFunctionComponent, RomanComponent } from './components';
import { HttpClientModule } from '@angular/common/http';

import { NgxMaskModule } from 'ngx-mask'
import { NgxCurrencyModule } from "ngx-currency";
import { CurrencyFormat } from './shared/pipes/currency-format.pipe';



@NgModule({
  imports: [
    CommonModule,
    TabasMainRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxCurrencyModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    CurrencyFormat,
    TabasMainComponent,
    InitPageComponent,
    FormPageComponent,
    TestsPageComponent,
    RomanComponent,
    NumNameComponent,
    CalculatorComponent,
    DynamicArgsComponent,
    ArrArgsComponent,
    RecursiveFunctionComponent
  ],
  exports: [TabasMainComponent]
})
export class TabasMainModule { }
