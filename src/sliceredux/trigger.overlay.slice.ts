import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
/*
 value:
 0 : nothing open 
 5 : open sidebar
 6 : open search mobile
 7 : open search home
 8 : open preview image
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
    },
    searchhomedesktop: (state) => {
      state.value = 7
    },
    previewimage: (state) => {
      state.value = 8
    }
  }
})

export const { overlay, sidebar, searchmobile,searchhomedesktop,previewimage} = TriggerOverlayandModal.actions

export const selectCount = (state: RootState) => state.trigger.value

export default TriggerOverlayandModal.reducer