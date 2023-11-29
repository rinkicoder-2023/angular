import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HealthMonitorService {
  // Simulate real-time streaming of vital signs data
  getVitalSigns(): Observable<VitalSigns> {
    return new Observable((observer) => {
      const intervalId = setInterval(() => {
        // Generate random vital signs data for demonstration
        const vitalSigns: VitalSigns = {
          heartRate: Math.round(Math.random() * (100 - 60) + 60),
          bloodPressure: Math.round(Math.random() * (140 - 90) + 90),
          temperature: Math.round(Math.random() * (37.5 - 36.0) * 10) / 10,
        };

        observer.next(vitalSigns);
      }, 2000); // Emit data every 2 seconds

      // Cleanup: Stop emitting data when the component or service is destroyed
      return () => clearInterval(intervalId);
    });
  }
}
interface VitalSigns {
  bloodPressure: number;
  heartRate: number;
  temperature: number;
}
