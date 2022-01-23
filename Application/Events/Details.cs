﻿using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Events
{
    public class Details
    {
        public class Query : IRequest<Result<Event>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Event>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Event>> Handle(Query request, CancellationToken cancellationToken)
            {
                var eventDetails = await _context.Events.FindAsync(request.Id);

                return Result<Event>.Success(eventDetails);
            }
        }
    }
}