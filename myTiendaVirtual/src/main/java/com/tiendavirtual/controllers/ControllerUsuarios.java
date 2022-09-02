package com.tiendavirtual.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerUsuarios {
    //Mapear la ruta para mostrar el listado
    @GetMapping({"/usuarios"})
    public String Listar(){
        return "/usuarios/usuarios";
    }
}
