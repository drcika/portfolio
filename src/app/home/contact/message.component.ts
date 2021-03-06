import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-new-dialog',
  templateUrl: './message.component.html',
})
export class MessageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) { }
}
