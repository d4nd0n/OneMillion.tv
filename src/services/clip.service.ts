import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Clip } from '../models/clip';

@Injectable({
  providedIn: 'root'
})

export class ClipService {
  constructor(private httpClient: HttpClient) {}

  // Retrieve one clip
  getClip() {
    return this.httpClient.get(`http://localhost:8090/onemillion/api/getClips`).
      pipe(
        map((data: Clip[]) => {
          return data;
        }), catchError( error => {
          return throwError( 'Something went wrong!' );
        })
      )
  }

  getClips() {
    return this.httpClient.get(`http://localhost:8090/onemillion/api/getClips`).
    pipe(
      map((data: any) => {
        console.log("data");
        console.log(data);
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    )
  }

  /*
    assetURL = "assets/frag_bunny.mp4";

    // Modify this with the actual mime type and codec
    mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
  
    @ViewChild("videoElement") video: ElementRef;
  
    ngAfterViewInit() {
      if (
        "MediaSource" in window &&
        MediaSource.isTypeSupported(this.mimeCodec)
      ) {
        const mediaSource = new MediaSource();
        (this.video.nativeElement as HTMLVideoElement).src = URL.createObjectURL(
          mediaSource
        );
        mediaSource.addEventListener("sourceopen", () =>
          this.sourceOpen(mediaSource)
        );
      } else {
        console.error("Unsupported MIME type or codec: ", this.mimeCodec);
      }
    }
  
    sourceOpen(mediaSource) {
      const sourceBuffer = mediaSource.addSourceBuffer(this.mimeCodec);
      const token = "some token"; // Load the token from some service
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http
        .get(this.assetURL, { headers, responseType: "blob" })
        .subscribe(blob => {
          sourceBuffer.addEventListener("updateend", () => {
            mediaSource.endOfStream();
            this.video.nativeElement.play();
          });
          blob.arrayBuffer().then(x => sourceBuffer.appendBuffer(x));
        });
    }
    */
}