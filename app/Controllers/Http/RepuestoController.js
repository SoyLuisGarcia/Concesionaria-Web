'use strict'
const repuesto = use('App/Models/Repuesto')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with repuestos
 */
class RepuestoController {
  /**
   * Show a list of all repuestos.
   * GET repuestos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let repuestos = await repuesto.all()
    repuestos = repuestos.toJSON()
    return view.render('repuestos.viewRepuesto', { repuestos })
  }

  /**
   * Render a form to be used for creating a new repuesto.
   * GET repuestos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('repuestos.crearRepuesto' )
  }

  /**
   * Create/save a new repuesto.
   * POST repuestos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await repuesto.create(request.all())
    return response.redirect('/repuestos/')
  }

  /**
   * Display a single repuesto.
   * GET repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing repuesto.
   * GET repuestos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const repuestos = await repuesto.find(params.id)
    return view.render('repuestos.modificar', { repuestos })
  }

  /**
   * Update repuesto details.
   * PUT or PATCH repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const repuestos = await repuesto.find(params.id)
    repuestos.descripcion = request.input('Descripcion')
    repuestos.costounit = request.input('costo')
    repuestos.precioinit = request.input('precio')
    repuestos.impparcial = request.input('importe parcial')

    await repuestos.save()
    return response.redirect('back')
  }

  /**
   * Delete a repuesto with id.
   * DELETE repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const repuestos = await repuesto.find(params.id);
    await repuestos.delete()

    return response.redirect('back')
  }
}

module.exports = RepuestoController
