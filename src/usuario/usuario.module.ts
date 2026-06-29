import { Controller, Get } from '@nestjs/common';

@Controller('usuarios')
export class UsuarioController {

@Get()
  carregarUsuario(){
    return{
      nome: "Antonio da silva",
      email: "asilva@gmail.com,
      telefone: "(86) 9.8855.6699"
     }
   }  
}
