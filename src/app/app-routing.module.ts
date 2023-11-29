import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HookFormComponent } from './hook-form/hook-form.component';
import { HealthMonitorComponent } from './health-monitor/health-monitor.component';

const routes: Routes = [
  { path: '', component: HookFormComponent },
  { path: 'health', component: HealthMonitorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
