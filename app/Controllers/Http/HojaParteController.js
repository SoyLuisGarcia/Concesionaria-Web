'use strict'
const hoja = use('App/Models/HojaDeParte')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with hojapartes
 */
class HojaParteController {
  /**
   * Show a list of all hojapartes.
   * GET hojapartes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let hojaparte = await hojaparte.all()
     = clientes.toJSON()
    return view.render('clientes.viewClientes', { clientes })
  }

  /**
   * Render a form to be used for creating a new hojaparte.
   * GET hojapartes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await hoja.create(request.all())
      return response.json('Creado')
  }

  /**
   * Create/save a new hojaparte.
   * POST hojapartes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single hojaparte.
   * GET hojapartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing hojaparte.
   * GET hojapartes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update hojaparte details.
   * PUT or PATCH hojapartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let hojas = await hoja.find(params.id)
    hojas.merge(request.all())
    await hojas.save()
    return response.json(hojas)
  }

  /**
   * Delete a hojaparte with id.
   * DELETE hojapartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const hojas = await hoja.find(params.id);
    await hojas.delete()
  }
}

module.exports = HojaParteController
