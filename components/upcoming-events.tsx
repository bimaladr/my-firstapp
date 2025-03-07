import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { addDays, format } from "date-fns"

const events = [
  { date: new Date(), title: "Team Meeting" },
  { date: addDays(new Date(), 2), title: "Project Deadline" },
  { date: addDays(new Date(), 5), title: "Client Presentation" },
]

export default function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>Your schedule for the next few days</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-14 text-center">
                <div className="text-3xl font-bold">{format(event.date, "d")}</div>
                <div className="text-xs uppercase">{format(event.date, "MMM")}</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-500">{format(event.date, "EEEE, h:mm a")}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

