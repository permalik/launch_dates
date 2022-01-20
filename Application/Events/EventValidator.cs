using Domain;
using FluentValidation;

namespace Application.Events
{
    public class EventValidator : AbstractValidator<Event>
    {
        public EventValidator()
        {
            RuleFor(n => n.Title).NotEmpty();
            RuleFor(n => n.Category).NotEmpty();
            RuleFor(n => n.Description).NotEmpty();
            RuleFor(n => n.Venue).NotEmpty();
            RuleFor(n => n.City).NotEmpty();
            RuleFor(n => n.State).NotEmpty();
            RuleFor(n => n.Date).NotEmpty();
        }
    }
}