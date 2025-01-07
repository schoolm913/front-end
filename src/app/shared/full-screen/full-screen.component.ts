import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrl: './full-screen.component.scss',
  imports: [MatIconModule, MatButtonModule],
  standalone: true
})
export class FullScreenComponent {
  // public elem: any;
  // public isFullScreen: boolean = false;
  // constructor(
  //         @Inject(DOCUMENT) private document: any
  //     ) {
  // }
  // ngOnInit(): void {
  //     this.elem = document.documentElement;
  //     this.checkScreenMode();

  //     this.elem.addEventListener("fullscreenchange", (event: any) => {
  //       console.log(event)
  //     });
  // }
  
  // openCoseFullscreen() {
  //   if(!document.fullscreenElement){
  //     if (this.elem.requestFullscreen) {
  //       this.elem.requestFullscreen();
  //     } else if (this.elem.mozRequestFullScreen) {
  //       /* Firefox */
  //       this.elem.mozRequestFullScreen();
  //     } else if (this.elem.webkitRequestFullscreen) {
  //       /* Chrome, Safari and Opera */
  //       this.elem.webkitRequestFullscreen();
  //     } else if (this.elem.msRequestFullscreen) {
  //       /* IE/Edge */
  //       this.elem.msRequestFullscreen();
  //     }
  //   }else{
  //     if (this.document.exitFullscreen) {
  //       this.document.exitFullscreen();
  //     } else if (this.document.mozCancelFullScreen) {
  //       /* Firefox */
  //       this.document.mozCancelFullScreen();
  //     } else if (this.document.webkitExitFullscreen) {
  //       /* Chrome, Safari and Opera */
  //       this.document.webkitExitFullscreen();
  //     } else if (this.document.msExitFullscreen) {
  //       /* IE/Edge */
  //       this.document.msExitFullscreen();
  //     }
  //   }
  //   this.checkScreenMode();
  //   }

  //       checkScreenMode(){
  //         if(document.fullscreenElement){
  //           //fullscreen
  //           this.isFullScreen = true;
  //         }else{
  //           //not in full screen
  //           this.isFullScreen = false;
  //         }
        // }
  
}
