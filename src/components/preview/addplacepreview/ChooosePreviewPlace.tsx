import React from 'react'
import AddPreViewButton from './ChooosePreviewPlaceCard'
import Previewed from './Previewed'

type Props = {}

export default function ChooosePreviewPlace({}: Props) {
  return (
    <div className="preview__review-place">
      <div className="preview__section-name">
          Địa điểm
      </div>
      <div className="preview__review-place-row">
        <AddPreViewButton></AddPreViewButton>
      </div>
      <div className="preview__section-name">
        Đánh giá gần đây
      </div>
      <div className="preview__review-place-">
        <Previewed></Previewed>
      </div>
    </div>
  )
}