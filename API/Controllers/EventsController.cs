using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Events;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class EventsController : BaseApiController
  {
    [HttpGet]
    public async Task<ActionResult<List<Event>>> GetEvents()
    {
      return await Mediator.Send(new List.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Event>> GetEvent(Guid id)
    {
      return Ok();
    }
  }
}