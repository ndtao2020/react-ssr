import React from "react"
import { Button, Modal } from "react-bootstrap"

const ModalExample = ({
  title,
  actionButtonLabel,
  closeButtonLabel,
  isOpen,
  toggle,
  ...props
}) => {
  return (
    <div>
      <Modal show={isOpen} onHide={toggle}>
        {title && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{props.children}</Modal.Body>
        {(actionButtonLabel || closeButtonLabel) && (
          <Modal.Footer>
            {actionButtonLabel && (
              <Button variant="primary" onClick={toggle}>
                {actionButtonLabel}
              </Button>
            )}
            {closeButtonLabel && (
              <Button variant="secondary" onClick={toggle}>
                {closeButtonLabel}
              </Button>
            )}
          </Modal.Footer>
        )}
      </Modal>
    </div>
  )
}

export default ModalExample
