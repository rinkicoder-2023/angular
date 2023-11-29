import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-hook-form',
  templateUrl: './hook-form.component.html',
  styleUrls: ['./hook-form.component.css'],
})
export class HookFormComponent
  implements DoCheck, AfterContentChecked, AfterContentInit
{
  ngOnInit() {
    console.log('ngOnInit executed');
  }

  ngDoCheck(): void {
    console.log('do check detected');
  }

  ngAfterContentInit() {
    console.log('ContentExampleComponent: Content initialized');
    // Perform initialization logic after content has been projected
  }

  ngAfterContentChecked() {
    console.log('ContentExampleComponent: Content checked');
    // Perform actions that need to happen after content has been checked
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit executed');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked executed');
  }

  formData = {
    name: '',
    country: 'usa',
    subscribeNewsletter: false,
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
  }
}
