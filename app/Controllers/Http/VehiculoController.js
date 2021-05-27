'use strict'
const vehiculo = use('App/Models/Vehiculo')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with vehiculos
 */
class VehiculoController {
  /**
   * Show a list of all vehiculos.
   * GET vehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let vehiculos = await vehiculo.all()
    vehiculos = vehiculos.toJSON()
    return view.render('vehiculos.viewVehiculos', { vehiculos })
  }

  /**
   * Render a form to be used for creating a new vehiculo.
   * GET vehiculos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('vehiculos.crearVehiculo' )
  }

  /**
   * Create/save a new vehiculo.
   * POST vehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await vehiculo.create(request.all())
    return response.redirect('/vehiculos/')
  }

  /**
   * Display a single vehiculo.
   * GET vehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing vehiculo.
   * GET vehiculos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const vehiculos = await vehiculo.find(params.id)
    return view.render('clientes.modificar', { vehiculos })
  }

  /**
   * Update vehiculo details.
   * PUT or PATCH vehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const vehiculos = await vehiculo.find(params.id)
    vehiculo.modelo = request.input('modelo')
    vehiculo.color = request.input('color')
    vehiculo.fechaentrada = request.input('Fecha entrada')
    await vehiculos.save()
    return response.redirect('back')
  }

  /**
   * Delete a vehiculo with id.
   * DELETE vehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const vehiculos = await vehiculo.find(params.id);
    await vehiculos.delete()

    return response.redirect('back')
  }
}

module.exports = VehiculoController
