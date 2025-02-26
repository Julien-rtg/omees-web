import { Component, Input } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-horizontal-content',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './horizontal-content.component.html',
  styleUrl: './horizontal-content.component.scss'
})
export class HorizontalContentComponent {
  @Input() title = ""
  @Input() content = ""
  @Input() image = ""
  @Input() isImageRight = true
  @Input() isCropped = false
}
