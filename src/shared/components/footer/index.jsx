import React from "react"
import "./style.scss"
import { Form, FormGroup, FormControl, Button, InputGroup } from "react-bootstrap"

const about = [
  "Nơi làm việc",
  "Về chúng tôi",
  "Giá cả",
  "Đấu giá",
  "Danh sách",
  "Điều khoản đấu giá",
  "Liên hệ",
]

export default function Footer() {
  return (
    <>
      <div className="container m-hidden-view">
        <div className="row">
          <div className="col-md-3">
            <h5 className={"mb-0"}>Thông tin liên hệ</h5>
          </div>
          <div className="col-md-3">
            <h5>Chính sách và điều khoản</h5>
            <p>Thông tin chi tiết</p>
            <p>Thông tin chi tiết</p>
            <p>Thông tin chi tiết</p>
            <p>Thông tin chi tiết</p>
          </div>
          <div className="col-md-3">
            <h5>Kiến thức pháp luật</h5>
            <p>Luật đấu giá 2016</p>
            <p>Nghị định 62/2017/NĐ-CP</p>
            <p>Thông tư 06/2017/TT-BTP</p>
            <p>Luật giao địch điện tử</p>
          </div>
          <div className="col-md-3">
            <FormGroup>
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <FormControl />
                <InputGroup.Append>
                  <Button variant="secondary">Đăng ký</Button>
                </InputGroup.Append>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Form.Label>Thanh toán</Form.Label>
              <div className="pay d-flex">
                <div>
                  <img
                    src="/assets/img/payment_partner_logo/viettel_pay.svg"
                    alt="Viettel Pay"
                  />
                </div>
                <div>
                  <img
                    src="/assets/img/payment_partner_logo/vn_pay.png"
                    alt="VN Pay"
                  />
                </div>
              </div>
            </FormGroup>
          </div>
        </div>
        <div className="main-footer text-center" />
      </div>
      <div className="hr d-none d-md-block" />
      <div className="container d-none d-md-block">
        <div className="copyright">
          <span>
            © 2020 Copyright ©All rights reserved{" "}
            <b>Global Digital Transformation</b>
          </span>
          <div className="social">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-linkedin-in" />
            <i className="fab fa-google-plus-g" />
          </div>
        </div>
      </div>
      <div className="hr d-none d-md-block" />
      <div className="container footer-about">
        {about.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
    </>
  )
}
