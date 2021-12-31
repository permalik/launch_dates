using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
  public class Seed
  {
    public static async Task SeedData(DataContext context)
    {
      if (context.Events.Any()) return;

      var events = new List<Event>
            {
                new Event
                {
                    Title = "Launch 1",
                    Category = "Hobby",
                    Description = "Black powder engine",
                    Venue = "Launch Site",
                    City = "Oklahoma City",
                    State = "Oklahoma",
                    Date = DateTime.Now.AddMonths(-2).AddDays(3),
                },
                new Event
                {
                    Title = "Launch 2",
                    Category = "Professional",
                    Description = "Composite engine",
                    Venue = "Launch Site",
                    City = "Kansas City",
                    State = "Missouri",
                    Date = DateTime.Now.AddMonths(-2),
                },
                new Event
                {
                    Title = "Launch 3",
                    Category = "Hobby",
                    Description = "Liquid engine",
                    Venue = "Launch Site",
                    City = "Las Vegas",
                    State = "Nevada",
                    Date = DateTime.Now.AddMonths(-2),
                },
                new Event
                {
                    Title = "Launch 4",
                    Category = "Professional",
                    Description = "Black powder engine",
                    Venue = "Launch Site",
                    City = "Tempe",
                    State = "Arizona",
                    Date = DateTime.Now.AddMonths(-2),
                },
                new Event
                {
                    Title = "Launch 5",
                    Category = "Hobby",
                    Description = "Composite engine",
                    Venue = "Launch Site",
                    City = "Miami",
                    State = "Florida",
                    Date = DateTime.Now.AddMonths(-2),
                },
                new Event
                {
                    Title = "Launch 6",
                    Category = "Professional",
                    Description = "Liquid engine",
                    Venue = "Launch Site",
                    City = "Columbus",
                    State = "Ohio",
                    Date = DateTime.Now.AddMonths(-2),
                },
                new Event
                {
                    Title = "Launch 7",
                    Category = "Hobby",
                    Description = "Black powder engine",
                    Venue = "Launch Site",
                    City = "San Diego",
                    State = "California",
                    Date = DateTime.Now.AddMonths(-2),
                },
                new Event
                {
                    Title = "Launch 8",
                    Category = "Professional",
                    Description = "Composite engine",
                    Venue = "Launch Site",
                    City = "Boston",
                    State = "Maine",
                    Date = DateTime.Now.AddMonths(-2),
                },
                new Event
                {
                    Title = "Launch 9",
                    Category = "Hobby",
                    Description = "Liquid engine",
                    Venue = "Launch Site",
                    City = "Raleigh",
                    State = "North Carolina",
                    Date = DateTime.Now.AddMonths(-2),
                },
                new Event
                {
                    Title = "Launch 10",
                    Category = "Professional",
                    Description = "Black powder engine",
                    Venue = "Launch Site",
                    City = "Tacoma",
                    State = "Washington",
                    Date = DateTime.Now.AddMonths(-2),
                }
            };

      await context.Events.AddRangeAsync(events);
      await context.SaveChangesAsync();
    }
  }
}