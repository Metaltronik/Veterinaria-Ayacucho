"use strict";
exports.__esModule = true;
var Medico = /** @class */ (function () {
    function Medico(nombre, matricula) {
        this.nombre = nombre,
            this.matricula = matricula;
    }
    Medico.prototype.getMatricula = function () {
        return this.matricula;
    };
    Medico.prototype.getNombre = function () {
        return this.nombre;
    };
    Medico.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    return Medico;
}());
exports["default"] = Medico;
