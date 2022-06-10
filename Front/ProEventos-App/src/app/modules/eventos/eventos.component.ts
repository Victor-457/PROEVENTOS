import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  private _eventos: any = [];
  public eventosFiltrados: any = [];
  public show: boolean = false;
  private _filtroEventos: string = ''

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  public get filtroEventos(){
    return this._filtroEventos;
  }

  public set filtrosEventos(filtrarPor: string){

    this._filtroEventos = filtrarPor.toLocaleLowerCase()

    this.eventosFiltrados = this.filtroEventos ?  this.filtrarEventos(this._filtroEventos): this._eventos //this.eventos.tema.includes(this._filtroEventos)

  }

  filtrarEventos(filtrarPor: string): any{
    filtrarPor = filtrarPor.toLocaleLowerCase()
    return this._eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1

    )
  }

  public getEventos(){
    this.http.get('https://localhost:5001/api/Evento').subscribe(
      res => {
        this._eventos = res
        this.eventosFiltrados = res
      },
      error => console.log(error)
    );
  }

  public hideImg(){
    this.show = !this.show;
  }

  public buscar(){

  }
}
