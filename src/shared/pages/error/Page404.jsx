import React from "react"
import PageError from "./PageError"

export default function Page404() {
  return (
    <PageError>
      <h1 className="display-4 mb-10 text-center"> 404. Không tìm thấy.</h1>
      <p className="mb-30 text-center">
        Trang bạn yêu cầu thật sự không tồn tại. Bạn có thể{" "}
        <a href="/">
          <u>trở về trang chủ</u>
        </a>{" "}
        hoặc tìm kiếm đúng trang bạn đang cần tới.
      </p>
      <div className="form-group">
        <div className="input-group">
          <input
            className="form-control form-control-lg filled-input rounded-input"
            placeholder="Tìm và gõ Enter"
            type="text"
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <span className="feather-icon">
                <i className="fas fa-search" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </PageError>
  )
}
