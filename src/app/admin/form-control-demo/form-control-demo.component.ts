import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-control-demo',
  templateUrl: './form-control-demo.component.html',
  styleUrls: ['./form-control-demo.component.css']
})
export class FormControlDemoComponent implements OnInit {

  demoFormControl: FormControl;
  user = {name: 'Martin'};

  constructor() { }

  ngOnInit() {
    this.demoFormControl = new FormControl(this.user.name, [Validators.required, Validators.minLength(8), this.validateNotAdmin]);

    this.demoFormControl.valueChanges.subscribe(value => {
      console.log('VALUE CHANGED TO: ' + value);
      this.user.name = value;
    })
  }

  private validateNotAdmin(control: FormControl): ValidationErrors | null {
    if (control.value === 'admin') {
      return {'cannot_be_admin': '"admin" as value is not permitted!'};
    }

    return null;
  }
}




