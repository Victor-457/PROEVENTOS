import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos()
  }

  public getEventos(){
    this.http.get('https://localhost:5001/api/Evento').subscribe(
      res => {console.log(res); this.eventos = res},
      error => console.log(error)
    )
  }
}
