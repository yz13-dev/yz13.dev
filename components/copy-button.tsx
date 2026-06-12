"use client"
import { CheckIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "./ui/button"

export const copy = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    toast.success("Скопировано!")
  } catch (error) {
    console.log("copy/error", error)
  }
}

type CopyButtonProps = {
  text: string
} & React.ComponentProps<typeof Button>
export default function CopyButton({ text, onClick, variant = "default", size = "default", className, children, disabled = false, ...props }: CopyButtonProps) {

  const [copied, setCopied] = useState<boolean>(false)

  const copyAction = async (text: string) => {
    try {
      copy(text)
      setCopied(true)

      setTimeout(() => setCopied(false), 1000)
    } catch (error) {
      console.log("copy/error", error)
    }
  }

  return (
    <Button
      onClick={e => {
        copyAction(text)
        onClick?.(e)
      }}
      className={className}
      size={size}
      variant={variant}
      disabled={disabled || copied}
      {...props}
    >
      {/*{children}*/}
      {copied ? <CheckIcon /> : children}
    </Button>
  )
}
