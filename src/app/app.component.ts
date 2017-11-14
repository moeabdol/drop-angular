import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Dropzone: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    Dropzone.options.imagesDropzone = {
      autoProcessQueue: false,
      url: 'http://localhost:3000/api/uploads',
      paramName: 'image',

      init: function() {
        const submitButton = $('#submit-all');
        const imagesDropzone = this;

        submitButton.on('click', () => {
          imagesDropzone.options.autoProcessQueue = true;
          imagesDropzone.processQueue();
        });

        imagesDropzone.on('queuecomplete', () => {
          imagesDropzone.options.autoProcessQueue = false;
        });
      }
    };
  }
}
