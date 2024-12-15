import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

interface ActionButtonProps {
  label: string
  onClick?: () => void
}

export function ActionButton({ label, onClick }: ActionButtonProps) {
  return (
    <Button
      variant="outline"
      className="bg-gray-200 hover:bg-gray-300 flex items-center gap-2"
      onClick={onClick}
    >
      {label}
      <Plus className="h-4 w-4" />
    </Button>
  )
}

