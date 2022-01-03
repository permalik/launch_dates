using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Events;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class EventsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Event>>> GetEvents()
        {
            return await Mediator.Send(new List.Query());
        }/*public async Task<ActionResult<List<Event>>> GetEvents(CancellationToken ct)
        {
            return await Mediator.Send(new List.Query(), ct);
        }*/

        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetEvent(Guid id)
        {
            return await Mediator.Send(new Details.Query {Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> CreateEvent([FromBody]Event @event)
        {
            return Ok(await Mediator.Send(new Create.Command {Event = @event}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Event @event)
        {
            @event.Id = id;

            return Ok(await Mediator.Send(new Edit.Command {Event = @event}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}