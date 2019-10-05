import { Component, Input} from '@angular/core';

@Component({
  selector: 'image',
  template: '<img *ngIf="imgSrc" [src]="imgSrc">',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input() imgSrc: string = '';
}