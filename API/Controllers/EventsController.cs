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
        public async Task<IActionResult> GetEvents()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEvent(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query {Id = id}));
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> CreateEvent([FromBody] Event @event)
        {
            return HandleResult(await Mediator.Send(new Create.Command {Event = @event}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Event @event)
        {
            @event.Id = id;

            return HandleResult(await Mediator.Send(new Edit.Command {Event = @event}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command {Id = id}));
        }
    }
}