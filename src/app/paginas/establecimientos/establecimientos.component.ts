import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-establecimientos',
  standalone: true,
  imports: [],
  templateUrl: './establecimientos.component.html',
  styleUrl: './establecimientos.component.css'
})
export class EstablecimientosComponent {
  data:any = [ 
    {
    nombre:'licorera suanfanzon',
    descripcion:'dlsakdkasda',
    status:1,
    imagen:'https://i.pinimg.com/736x/17/f9/56/17f956cc5079ebe28a1cd1a357a1f131.jpg'
    },
    {
      nombre:'licorera suanfanzon',
      descripcion:'dlsakdkasda',
      status:1,
      imagen:'https://i.pinimg.com/736x/17/f9/56/17f956cc5079ebe28a1cd1a357a1f131.jpg'
    },
    {
      nombre:'licorera suanfanzon',
      descripcion:'dlsakdkasda',
      status:1,
      imagen:'https://i.pinimg.com/736x/17/f9/56/17f956cc5079ebe28a1cd1a357a1f131.jpg'
    },
    {
      nombre:'licorera suanfanzon',
      descripcion:'dlsakdkasda',
      status:1,
      imagen:'https://i.pinimg.com/736x/17/f9/56/17f956cc5079ebe28a1cd1a357a1f131.jpg'
    },
    {
      nombre:'licorera suanfanzon',
      descripcion:'dlsakdkasda',
      status:1,
      imagen:'https://i.pinimg.com/736x/17/f9/56/17f956cc5079ebe28a1cd1a357a1f131.jpg'
    },
    {
      nombre:'la rebaja',
      descripcion:'dlsakdkasda',
      status:2,
      imagen:'https://tecnyfarma.com/wp-content/uploads/2022/03/20200925-Farmacia-Libertad-Alcorcon-3-1.jpg'
      },
      {
        nombre:'la rebaja',
        descripcion:'dlsakdkasda',
        status:2,
        imagen:'https://tecnyfarma.com/wp-content/uploads/2022/03/20200925-Farmacia-Libertad-Alcorcon-3-1.jpg'
      },
      {
        nombre:'la rebaja',
        descripcion:'dlsakdkasda',
        status:2,
        imagen:'https://tecnyfarma.com/wp-content/uploads/2022/03/20200925-Farmacia-Libertad-Alcorcon-3-1.jpg'
      },
      {
        nombre:'la rebaja',
        descripcion:'dlsakdkasda',
        status:2,
        imagen:'https://tecnyfarma.com/wp-content/uploads/2022/03/20200925-Farmacia-Libertad-Alcorcon-3-1.jpg'
      },
      {
        nombre:'la rebaja',
        descripcion:'dlsakdkasda',
        status:2,
        imagen:'https://tecnyfarma.com/wp-content/uploads/2022/03/20200925-Farmacia-Libertad-Alcorcon-3-1.jpg'
      },
      {
        nombre:'iberplaza',
        descripcion:'dlsakdkasda',
        status:3,
        imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSl_gx35WW6h0krsamDyNtC-io-jESgpJFQ&s'
        },
        {
          nombre:'iberplaza',
          descripcion:'dlsakdkasda',
          status:3,
          imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSl_gx35WW6h0krsamDyNtC-io-jESgpJFQ&s'
        },
        {
          nombre:'iberplaza',
          descripcion:'dlsakdkasda',
          status:3,
          imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSl_gx35WW6h0krsamDyNtC-io-jESgpJFQ&s'
        },
        {
          nombre:'iberplaza',
          descripcion:'dlsakdkasda',
          status:3,
          imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSl_gx35WW6h0krsamDyNtC-io-jESgpJFQ&s'
        },
        {
          nombre:'iberplaza',
          descripcion:'dlsakdkasda',
          status:3,
          imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSl_gx35WW6h0krsamDyNtC-io-jESgpJFQ&s'
        },
        {
          nombre:'El buen pan',
          descripcion:'dlsakdkasda',
          status:4,
          imagen:'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2022-09/las-lecciones-de-las-panaderias-y-reposterias-.jpg'
          },
          {
            nombre:'El buen pan',
            descripcion:'dlsakdkasda',
            status:4,
            imagen:'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2022-09/las-lecciones-de-las-panaderias-y-reposterias-.jpg'
          },
          {
            nombre:'El buen pan',
            descripcion:'dlsakdkasda',
            status:4,
            imagen:'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2022-09/las-lecciones-de-las-panaderias-y-reposterias-.jpg'
          },
          {
            nombre:'El buen pan',
            descripcion:'dlsakdkasda',
            status:4,
            imagen:'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2022-09/las-lecciones-de-las-panaderias-y-reposterias-.jpg'
          },
          {
            nombre:'El buen pan',
            descripcion:'dlsakdkasda',
            status:4,
            imagen:'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2022-09/las-lecciones-de-las-panaderias-y-reposterias-.jpg'
          },
          {
            nombre:'Mejor sazón',
            descripcion:'dlsakdkasda',
            status:5,
            imagen:'https://cdn.prod.website-files.com/60d62401e092df5e99016f84/629e331184ec6213f94ad6eb_1.%20Servicio%20al%20cliente.jpg'
            },
            {
              nombre:'Mejor sazón',
              descripcion:'dlsakdkasda',
              status:5,
              imagen:'https://cdn.prod.website-files.com/60d62401e092df5e99016f84/629e331184ec6213f94ad6eb_1.%20Servicio%20al%20cliente.jpg'
            },
            {
              nombre:'Mejor sazón',
              descripcion:'dlsakdkasda',
              status:5,
              imagen:'https://cdn.prod.website-files.com/60d62401e092df5e99016f84/629e331184ec6213f94ad6eb_1.%20Servicio%20al%20cliente.jpg'
            },
            {
              nombre:'Mejor sazón',
              descripcion:'dlsakdkasda',
              status:5,
              imagen:'https://cdn.prod.website-files.com/60d62401e092df5e99016f84/629e331184ec6213f94ad6eb_1.%20Servicio%20al%20cliente.jpg'
            },
            {
              nombre:'Mejor sazón',
              descripcion:'dlsakdkasda',
              status:5,
              imagen:'https://cdn.prod.website-files.com/60d62401e092df5e99016f84/629e331184ec6213f94ad6eb_1.%20Servicio%20al%20cliente.jpg'
            },

            {
              nombre:'Las cabañas',
              descripcion:'dlsakdkasda',
              status:6,
              imagen:'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/09/02/16621337884122.jpg'
              },
              {
                nombre:'Las cabañas',
                descripcion:'dlsakdkasda',
                status:6,
                imagen:'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/09/02/16621337884122.jpg'
              },
              {
                nombre:'Las cabañas',
                descripcion:'dlsakdkasda',
                status:6,
                imagen:'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/09/02/16621337884122.jpg'
              },
              {
                nombre:'Las cabañas',
                descripcion:'dlsakdkasda',
                status:6,
                imagen:'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/09/02/16621337884122.jpg'
              },
              {
                nombre:'Las cabañas',
                descripcion:'dlsakdkasda',
                status:6,
                imagen:'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/09/02/16621337884122.jpg'
              }

    ];
    establecimientos:any[]=[];
    id:number=0;
    snap = inject(ActivatedRoute)
    servicio = inject(ServiciosService)

     ngOnInit(){
      // this.usuarios = JSON.parse( localStorage.getItem('user')! );
      // const usuario:any = JSON.parse(usuarios?.toString());
      // this.obtenerUsuarios();
      this.obtenerEstablecimientos();
      this.servicio.loadFlowbite(flowbite => {
        // Your custom code here
        flowbite.initModals();
      });
    }
    obtenerEstablecimientos(){
      let ident = this.snap.snapshot.paramMap.get('id');
      if(ident)
      this.id = parseInt(ident);
      this.establecimientos = this.data;
    }
}
