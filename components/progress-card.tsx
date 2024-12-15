import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface ProgressCardProps {
  title: string
  progress: number
  refundAmount: string
}

export function ProgressCard({ title, progress, refundAmount }: ProgressCardProps) {
  return (
    <Card className="bg-gray-100">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground">Estimated Refunds:</div>
            <div className="text-lg font-semibold">${refundAmount}</div>
          </div>
          <Button variant="default">Continue Filing</Button>
        </div>
      </CardContent>
    </Card>
  )
}

