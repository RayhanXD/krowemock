import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Document {
  title: string
  status: "completed" | "in-progress" | "overdue" | "draft"
}

interface Deadline {
  title: string
  dueIn: string
}

const getStatusColor = (status: Document["status"]) => {
  switch (status) {
    case "completed":
      return "bg-green-500"
    case "in-progress":
      return "bg-yellow-500"
    case "overdue":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

export function DocumentList() {
  const documents: Document[] = [
    { title: "Q3 Income Statements", status: "completed" },
    { title: "Jason Smith Invoice", status: "in-progress" },
    { title: "Form 1099", status: "overdue" },
    { title: "Balance Sheet", status: "draft" },
  ]

  const deadlines: Deadline[] = [
    { title: "Quarterly Taxes", dueIn: "Due in 15 Days" },
    { title: "Employee W-2", dueIn: "Due in 30 Days" },
    { title: "Annual Tax Returns", dueIn: "Due in 58 Days" },
    { title: "CPA Deadline", dueIn: "Due in 10 Days" },
  ]

  return (
    <div className="grid grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.title}
              className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
            >
              <span>{doc.title}</span>
              <Badge className={getStatusColor(doc.status)}>
                {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
              </Badge>
            </div>
          ))}
          <Button variant="ghost" className="w-full">
            View All Documents
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Up Coming Deadlines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {deadlines.map((deadline) => (
            <div
              key={deadline.title}
              className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
            >
              <span>{deadline.title}</span>
              <span className="text-sm text-muted-foreground">
                {deadline.dueIn}
              </span>
            </div>
          ))}
          <Button variant="ghost" className="w-full">
            View All Deadlines
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

