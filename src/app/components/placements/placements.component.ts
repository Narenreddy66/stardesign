import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.scss']
})
export class PlacementsComponent implements OnInit {
  windowWidth: boolean = false
  @ViewChild('cards') cardsContainers: ElementRef | undefined;
  ngOnInit(): void {
    this.windowWidth = window.innerWidth <= 1024;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth <= 1024;
    });
  }


  slide(direction: string) {
    if (this.cardsContainers)
      if (direction === 'left') {
        this.cardsContainers.nativeElement.scrollLeft -= 1140;
      }
      else if (direction === 'right') {
        this.cardsContainers.nativeElement.scrollLeft += 1140;
      }
  }
}
