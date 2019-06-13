import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-demo',
  templateUrl: './form-control-demo.component.html',
  styleUrls: ['./form-control-demo.component.css']
})
export class FormControlDemoComponent implements OnInit {

  demoFormControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.demoFormControl = new FormControl('INITIAL VALUE', [Validators.required, Validators.minLength(3)]);

    this.demoFormControl.valueChanges.subscribe(value => {
      console.log('VALUE CHANGED TO: ' + value);
    })
  }

}
