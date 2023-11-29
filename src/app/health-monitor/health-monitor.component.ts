import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HealthMonitorService } from '../health-monitor.service';

@Component({
  selector: 'app-health-monitor',
  templateUrl: './health-monitor.component.html',
  styleUrls: ['./health-monitor.component.css'],
})
export class HealthMonitorComponent {
  bloodPressure: number = 0;
  heartRate: number = 0;
  temperature: number = 0;

  private subscription: Subscription;

  constructor(private healthMonitoringService: HealthMonitorService) {
    // Subscribe to the continuous stream of vital signs data
    this.subscription = this.healthMonitoringService
      .getVitalSigns()
      .subscribe((data) => {
        this.heartRate = data.heartRate;
        this.bloodPressure = data.bloodPressure;
        this.temperature = data.temperature;
      });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks when the component is destroyed
    this.subscription.unsubscribe();
  }
}
