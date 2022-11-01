import React from 'react'
import VoteRate from './VoteRate'
import '../../styles/preview.scss'
type Props = {}

export function Preview({}: Props) {
  return (
    <div className='preview'>
      <div className="preview__contain">
        <div className="preview__heading">Viết Review</div>
        <div className="preview__form">
          <div className="preview__form-left">
            <div className="preview__vote-rate">
              <div className="preview__section-name">
                Xếp hạng của bạn
              </div>
              <div className="preview__vote-rate-row">
                <div className="preview__label">
                  Vị trí
                </div>
                <VoteRate></VoteRate>
              </div>
              <div className="preview__vote-rate-row">
                <div className="preview__label">
                  Không gian
                </div>
                <VoteRate></VoteRate>
              </div>
              <div className="preview__vote-rate-row">
                <div className="preview__label">
                  Đồ uống
                </div>
                <VoteRate></VoteRate>
              </div>
              <div className="preview__vote-rate-row">
                <div className="preview__label">
                  Phục vụ
                </div>
                <VoteRate></VoteRate>
              </div>
              <div className="preview__vote-rate-row">
                <div className="preview__label">
                  Giá cả
                </div>
                <VoteRate></VoteRate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}