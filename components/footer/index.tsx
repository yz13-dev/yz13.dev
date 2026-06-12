"use client"
import CopyButton, { copy } from "@/components/copy-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Kbd } from "@/components/ui/kbd";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { email } from "@/const/socials";
import { useHotkey } from '@tanstack/react-hotkeys';
import { CalendarIcon, ChevronDownIcon, LayoutGridIcon, MailIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import CalComEmbed, { checkCalComEmbed, showCalComEmbed } from "../calcom-embed";
import Cmd from "./cmd";
import { useFooterStore } from "./store";

export default function Footer() {

  const open = useFooterStore(state => state.open)
  const setOpen = useFooterStore(state => state.setOpen)
  const [calcomOpen, setCalcomOpen] = useState(false)

  useHotkey("M", () => {
    if (!calcomOpen) {
      setCalcomOpen(true)
      showCalComEmbed()
    } else {
      checkCalComEmbed()
        .then((open) => {
          console.log("IS-OPEN", open)
          setCalcomOpen(open)
        })
    }
  })
  useHotkey("C", () => {
    if (!email) return
    copy(email)
  }, { enabled: !!email })
  useHotkey('Escape', () => {
    setOpen(false)
  })
  useHotkey('Mod+K', () => {
    setOpen(!open)
  }, { preventDefault: true })
  return (
    <footer className="fixed bottom-8 left-0 right-0 z-20 mx-auto w-fit flex flex-col">
      <div className="py-4">
        {
          open &&
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: .125
              }}
            >
              <Cmd />
            </motion.div>
          </AnimatePresence>
        }
      </div>
      <div className="w-fit h-12 p-2 mx-auto rounded-xl bg-background/90 backdrop-blur-md ring-1 ring-border">
        <div className="h-8 flex items-center gap-2 [&_button]:rounded-sm">
          <Avatar className="h-full aspect-square after:rounded-sm rounded-sm">
            <AvatarImage
              className="rounded-sm"
              src="https://github.com/yz13-dev.png"
            />
            <AvatarFallback className="rounded-sm">YZ</AvatarFallback>
          </Avatar>
          <Tooltip>
            <TooltipTrigger
              render={
                <CalComEmbed variant="ghost" size="icon-lg" className="size-8 p-1">
                  <CalendarIcon className="size-4.5" />
                </CalComEmbed>
              }
            />
            <TooltipContent>
              <span>Ознакомительный созвон</span>
              <Kbd>M</Kbd>
            </TooltipContent>
          </Tooltip>
          <div className="flex items-center">
            <Tooltip>
              <TooltipTrigger
                render={
                  <CopyButton variant="ghost" size="icon-lg" className="p-1" text={email!} disabled={!email}>
                    <MailIcon className="size-4.5" />
                  </CopyButton>
                }
              />
              <TooltipContent>
                <span>Скопировать почту</span>
                <Kbd>C</Kbd>
              </TooltipContent>
            </Tooltip>

            <DropdownMenu>
              <DropdownMenuTrigger render={
                <Button size="icon-lg" variant="ghost" className="w-4">
                  <ChevronDownIcon className="group-aria-expanded/button:rotate-180 size-3 will-change-transform transition-transform" />
                </Button>
              } />
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <span>Telegram</span>
                  <Kbd className="ml-auto">T</Kbd>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>GitHub</span>
                  <Kbd className="ml-auto">G</Kbd>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant={open ? "default" : "ghost"} size="icon-lg" className="p-1">
                  <LayoutGridIcon className="size-4.5" />
                </Button>
              }
            />
            <TooltipContent>
              <span>Команды</span>
              <Kbd>CTRL+K</Kbd>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </footer>
  )
}
