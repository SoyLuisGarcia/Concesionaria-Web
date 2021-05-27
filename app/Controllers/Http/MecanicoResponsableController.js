'use strict'
const mecanico = use('App/Models/MecanicoResponsable')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mecanicoresponsables
 */
class MecanicoResponsableController {
  /**
   * Show a list of all mecanicoresponsables.
   * GET mecanicoresponsables
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let mecanicos = await mecanico.all()
    mecanicos = mecanicos.toJSON()
    return view.render('clientes.viewmecanicos', { mecanicos })
  }

  /**
   * Render a form to be used for creating a new mecanicoresponsable.
   * GET mecanicoresponsables/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('mecanicos.crearmecanicos' )
  }

  /**
   * Create/save a new mecanicoresponsable.
   * POST mecanicoresponsables
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await mecanico.create(request.all())
    return response.redirect('/mecanicos/')
  }

  /**
   * Display a single mecanicoresponsable.
   * GET mecanicoresponsables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing mecanicoresponsable.
   * GET mecanicoresponsables/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const mecanicos = await mecanico.find(params.id)
    return view.render('mecanicos.modificar', { mecanicos })
  }

  /**
   * Update mecanicoresponsable details.
   * PUT or PATCH mecanicoresponsables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const mecanicos = await mecanico.find(params.id)
    mecanicos.nombre = request.input('nombre')
    mecanicos.direccion = request.input('direccion')
    mecanicos.telefono = request.input('telefono')
    mecanicos.telefono = request.input('categoria')

    await clientes.save()
    return response.redirect('back')
  }

  /**
   * Delete a mecanicoresponsable with id.
   * DELETE mecanicoresponsables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const mecanicos = await mecanico.find(params.id);
    await mecanicos.delete()

    return response.redirect('back')
  }
}

module.exports = MecanicoResponsableController
