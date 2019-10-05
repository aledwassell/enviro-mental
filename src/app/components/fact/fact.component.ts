import { Component, Input} from '@angular/core';
import {Fact} from '../../app.component';

@Component({
  selector: 'fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.scss']
})
export class FactComponent {
  @Input() !fact: Fact;
  @Input() header = false;
}