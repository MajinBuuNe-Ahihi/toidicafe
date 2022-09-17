import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
/*
 value:
 0 : nothing open 
 5 : open sidebar
 6 : open search mobile
 */
interface triggerState {
  value: number
}

const initialState= {
  value:0
} as triggerState

export const TriggerOverlayandModal = createSlice({
  name: 'trigger',
  initialState,
  reducers: {
    overlay: (state) => {
      state.value = 0
    },
    sidebar: (state) => {
      state.value = 5
    },
    searchmobile: (state) => {
      state.value = 6
    }
  }
})

export const { overlay, sidebar, searchmobile } = TriggerOverlayandModal.actions

export const selectCount = (state: RootState) => state.trigger.value

export default TriggerOverlayandModal.reducer