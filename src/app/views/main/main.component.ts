import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  popup: boolean = false
  private popupTimeInference!: Observable<boolean>
  private subscription: Subscription | null = null
  @ViewChild('popupElement')
  private popupElement!: ElementRef

  constructor(private renderer: Renderer2) {
    this.popupTimeInference = new Observable((observer) => {
      const timeOut = setTimeout(() => {
        observer.next(this.popup = true)
      }, 100000)

      return {
        unsubscribe() {
          clearTimeout(timeOut)
        }
      }
    })
  }

  ngOnInit(): void {
    this.popupTimeInference.subscribe()
  }

  ngAfterViewInit() {
    if(this.popupElement) {
      this.renderer.listen(this.popupElement.nativeElement, 'click', (event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (target && target.classList.contains('popup-catalogs')) {
          this.popup = false
        }
      })
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

}
