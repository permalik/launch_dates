using System;

namespace Domain
{
  public class Event
  {
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Category { get; set; }
    public string description { get; set; }
    public string Venue { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public DateTime Date { get; set; }
  }
}