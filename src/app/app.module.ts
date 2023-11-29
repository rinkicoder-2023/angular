import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HookFormComponent } from './hook-form/hook-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HealthMonitorComponent } from './health-monitor/health-monitor.component';

@NgModule({
  declarations: [AppComponent, HookFormComponent, HealthMonitorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
