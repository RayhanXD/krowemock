import { AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ActionButton } from "@/components/action-button"
import { DocumentList } from "@/components/document-list"
import { ProgressCard } from "@/components/progress-card"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
          />
        </div>
      </div>

      <Alert className="bg-zinc-700 text-white border-none">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle className="text-white">
          Fill Out Your November Income Statement
        </AlertTitle>
        <AlertDescription className="text-gray-200">
          Filing out your Income Statement will allow Krowe to sync the information
          to your taxes
        </AlertDescription>
      </Alert>

      <ProgressCard
        title="2024 Tax Filing Season"
        progress={83}
        refundAmount="1,141"
      />

      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <ActionButton label="File Form 1090" />
          <ActionButton label="View Calendar" />
          <ActionButton label="Upload Doc" />
          <ActionButton label="Send Report" />
        </div>
      </div>

      <DocumentList />
    </div>
  )
}

