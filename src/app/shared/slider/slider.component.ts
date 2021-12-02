import { Component, ElementRef, Input, ViewChild} from "@angular/core";


@Component({
    selector: "app-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent {

    @ViewChild("popupOverlay", { static: false }) popupOverlay!: ElementRef;
     isShow = "none";
     isSlideOut!: boolean;
    @Input() sliderStatus!: any;


    close() {
        this.sliderStatus.isSlideOut = true
        setTimeout(() => {
            this.sliderStatus.isShow = "none";
        }, 400);
    }

    slideOutOverlay() {
        window.addEventListener("click", (e) => {
            if (e.target == this.popupOverlay.nativeElement) {
              this.sliderStatus.isSlideOut = true
                setTimeout(() => {
                  this.sliderStatus.isShow = "none";
                }, 400);
            }
        });
    }

    ngAfterViewInit() {
        this.slideOutOverlay();
    }
}

