import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { 
  }
  
  ngOnInit(): void {
    this.getUsuarios()
          .then( (users) => {
            console.log(users);
          })
    
    // const promesa = new Promise( (resolve, reject) => {
    //   resolve("Hola Mundo");
    // } );

    // promesa
    //   .then((res) => {
    //     console.log("Hey termine!!");
    //   })

    // console.log("Fin del Init");

  }

  getUsuarios() {

    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(body => resolve( body.data ))
    });

    return promesa;
  }

}
