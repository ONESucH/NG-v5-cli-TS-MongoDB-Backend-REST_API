import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.less']
})
export class MusicComponent implements OnInit {

  music: any;
  title: string = 'This is all musics';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('/music').subscribe(data => {
      this.music = data;
    });
  }

}
