import { Calendar } from "@/components/calendar"
import EventForm from "@/components/event-form"
import UpcomingEvents from "@/components/upcoming-events"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Event Planner</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-2/3">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                  <CardDescription>Plan your month with ease</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar />
                </CardContent>
              </Card>
            </div>
            <div className="lg:w-1/3 space-y-6">
              <EventForm />
              <UpcomingEvents />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-800 shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">© 2025 Event Planner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

