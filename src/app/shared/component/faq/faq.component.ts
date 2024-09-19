import {AfterViewInit, Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('.accordion-item-trigger');
    elements.forEach((item: HTMLElement) => {
      this.render.listen(item, ('click'), () => {
        const parent: HTMLElement = item.parentNode as HTMLElement
        if (parent.classList.contains('accordion-item-active')) {
          parent.classList.remove('accordion-item-active')

        } else {
          document.querySelectorAll('.accordion-item')
            .forEach((child: Element) => child.classList.remove('accordion-item-active'))
          parent.classList.add('accordion-item-active')
        }
      })
    })
  }
}
