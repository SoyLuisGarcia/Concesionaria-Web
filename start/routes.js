'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.on('/').render('welcome')

Route.on('/productos/modif').render('productos/modificarproducto')
//Cliente
Route.get('/clientes', 'ClientController.index')
Route.post('/clientes/delete/:id', 'ClientController.destroy')
Route.get('/clientes/edit-view/:id' , 'ClientController.edit')
Route.post('/clientes/edit/:id' , 'ClientController.update')
Route.get('/clientes/create' , 'ClientController.create')
Route.post('/clientes/new' , 'ClientController.store')

//vehiculo
Route.get('/vehiculos', 'VehiculoController.index')
Route.get('/vehiculos/delete/:id', 'VehiculoController.destroy')
Route.post('/vehiculos/edit/:id' , 'VehiculoController.update')
Route.post('/vehiculos/create' , 'VehiculoController.create')

//Mecanico Responsable
Route.get('/mecanicos', 'MecanicoResponsableController.index')
Route.get('/mecanicos/delete/:id', 'MecanicoResponsableController.destroy')
Route.post('/mecanicos/edit/:id', 'MecanicoResponsableController.update')
Route.post('/mecanicos/create', 'MecanicoResponsableController.create')

//Factura
Route.get('/facturas', 'FacturaController.index')
Route.get('/facturas/delete/:id', 'FacturaController.destroy')
Route.post('/facturas/edit/:id', 'FacturaController.update')
Route.post('/facturas/create', 'FacturaController.create')

//Mecanico Responsable Vehiculo
Route.get('/mecanicos/vehiculos', 'MecanicoVehiculoController.index')
Route.get('/mecanicos/vehiculos/delete/:id', 'MecanicoVehiculoController.destroy')
Route.post('/mecanicos/vehiculos/edit/:id', 'MecanicoVehiculoController.update')
Route.post('/mecanicos/vehiculos/create', 'MecanicoVehiculoController.create')

//Hoja de Partes
Route.get('/hojas', 'HojaParteController.index')
Route.get('/hojas/delete/:id', 'HojaParteController.destroy')
Route.post('/hojas/edit/:id', 'HojaParteController.update')
Route.post('/hojas/create', 'HojaParteController.create')

//Repuesto
Route.get('/repuestos', 'RepuestoController.index')
Route.get('/repuestos/delete/:id', 'RepuestoController.destroy')
Route.post('/repuestos/edit/:id', 'RepuestoController.update')
Route.post('/repuestos/create', 'RepuestoController.create')
