import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.sharedService.addDataToDatabase(this.contactForm.value);
    this.contactForm.reset();
    this.initForm();
  }

  private initForm() {
    let name = '';
    let email = '';
    let message = '';
    let date = new Date();

    this.contactForm = new FormGroup({
      'date': new FormControl(date, Validators.required),
      'message': new FormControl(message, Validators.required),
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'name': new FormControl(name, Validators.required)
    });

  }
}
