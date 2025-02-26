import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-horizontal-content',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './horizontal-content.component.html',
  styleUrl: './horizontal-content.component.scss'
})
export class HorizontalContentComponent {
  @Input() title = ""
  @Input() content = ""
  @Input() image = ""
  @Input() isImageRight = true
}
