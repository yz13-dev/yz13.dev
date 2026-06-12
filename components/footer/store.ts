import { create } from "zustand";



type State = {
  open: boolean;
}
type Action = {
  setOpen: (open: boolean) => void;
}

export const useFooterStore = create<State & Action>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}))
