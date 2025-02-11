'use client'

import { Button } from "@/components/ui/button";
import { toast } from "sonner"


export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: `Sunday, December 03, ${new Date().getFullYear()} at 9:00 AM`,
            duration: 1000,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.success("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            position: "top-right",
            duration: 1000,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Custom Colors
      </Button>
    </div>
  );
}