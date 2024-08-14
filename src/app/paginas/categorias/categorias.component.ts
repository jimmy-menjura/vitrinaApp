import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  materias:any[]=[
    {
      id:1,
      nombreMateria:"Discotecas",
      Descripcion:"dsalkdñlasfmvc",
      NumeroEstudiantes:"3",
      Total:"4",
      image:"https://cdn-icons-png.flaticon.com/512/11293/11293097.png"
    },
    {
      id:2,
      nombreMateria:"Farmacias",
      Descripcion:"dsalkdñlasfmvc",
      NumeroEstudiantes:"3",
      Total:"4",
      image:"https://images.vexels.com/media/users/3/208407/isolated/preview/7ad2615dc81ce96bf6618e9a48ee5b3b-icono-de-bolsa-de-farmacia.png"
    },
    {
      id:3,
      nombreMateria:"Centros comerciales",
      Descripcion:"dsalkdñlasfmvc",
      NumeroEstudiantes:"3",
      Total:"4",
      image:"https://cdn-icons-png.flaticon.com/512/10721/10721631.png"
    },
    {
      id:4,
      nombreMateria:"Panaderias",
      Descripcion:"dsalkdñlasfmvc",
      NumeroEstudiantes:"3",
      Total:"4",
      image:"https://cdn-icons-png.flaticon.com/512/2289/2289869.png"
    },
    {
      id:5,
      nombreMateria:"Restaurantes",
      Descripcion:"dsalkdñlasfmvc",
      NumeroEstudiantes:"3",
      Total:"4",
      image:"https://cdn-icons-png.flaticon.com/512/433/433036.png"
    },
    {
      id:6,
      nombreMateria:"Hoteles",
      Descripcion:"dsalkdñlasfmvc",
      NumeroEstudiantes:"3",
      Total:"4",
      image:"https://img.freepik.com/vector-premium/icono-vectorial-4-estrellas-hotel-puede-utilizar-conjunto-iconos-gestion-hotel_717774-51074.jpg"
    }


  ]
  router = inject(Router);
  comentarios:any[] = []
  usuarios:any;
  constructor(){}
  ngOnInit(){
    // this.usuarios = JSON.parse( localStorage.getItem('user')! );
    // const usuario:any = JSON.parse(usuarios?.toString());
    // this.obtenerUsuarios();
    this.obtenerMaterias();
    // initFlowbite();
  }
  // obtenerComentarios(){
    
  // }
  obtenerMaterias(){
   this.comentarios =  this.materias
  }
  irAestablecimientos(id:any){
    this.router.navigate([`/establecimientos/${id}`])
  }
}
