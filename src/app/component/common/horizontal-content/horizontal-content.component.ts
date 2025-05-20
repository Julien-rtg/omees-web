import { Component, Input, OnInit, HostListener } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-horizontal-content',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './horizontal-content.component.html',
  styleUrl: './horizontal-content.component.scss'
})
export class HorizontalContentComponent implements OnInit {
  @Input() title = ""
  @Input() content = ""
  @Input() image = ""
  @Input() isImageRight = true
  @Input() hasArrow = true
  @Input() isCropped = false
  @Input() content_button = ""
  @Input() bg = ""
  @Input() text = ""
  @Input() colorTitle = ""
  @Input() buttonType = ""
  
  isMobile = false;
  
  ngOnInit() {
    this.checkScreenSize();
  }
  
  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }
  
  getFlexDirection() {
    if (this.isMobile) {
      return 'column';
    }
    return this.isImageRight ? 'row-reverse' : 'row';
  }

  getArrowStyle() {
  return {
    display: this.hasArrow ? 'inline-block' : 'none'
  };
}

}
