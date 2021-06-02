import React, { useState, useMemo } from "react"
import { Button } from "react-bootstrap"
import configBuild from "@/configs/build"
import Modal from "@/shared/components/modal"
import "./styles.scss"

/**
 * Hiển thị modal yêu cầu đăng nhập
 * <div>{renderModal}</div>
 * gọi toggle() để toggle modal
 */
export default function useRequireLogin() {
  const [isOpen, setIsOpen] = useState(false)
  function toggle() {
    setIsOpen((pre) => !pre)
  }
  const renderModal = useMemo(() => {
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="d-flex align-items-center mt-4">
          <div className="d-inline-flex m-auto align-items-center">
            <img src={`/${configBuild.folderAssets}/l.svg`} width={48} height={48} />
            <h4 className="m-0" style={{ color: "#00918C" }}>
              Home Page
            </h4>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column w-100 mt-2">
          <div className="w-75 m-auto d-flex">
            <div className="form-group w-100">
              <label htmlFor="username">Hãy đăng ký để tham gia Sàn đấu giá</label>
              <input
                placeholder="Tên tài khoản"
                id="username"
                className="form-control mb-2 m-height-3rem"
              />
              <Button
                className="w-100 m-height-3rem"
                onClick={() => (location.href = "/signup")}
                style={{ backgroundColor: "#00918C" }}
              >
                {" "}
                Đăng ký
              </Button>
              <div className="mt-1 d-flex align-items-center">
                <div className="d-inline-flex m-auto">
                  <p className="mr-1">Bạn đã có tài khoản</p>
                  <a href="/login">Đăng nhập</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    )
  }, [isOpen])
  return { renderModal, toggle }
}
