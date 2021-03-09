import { Children, createContext, FC, HTMLAttributes, useContext, useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { ModalProps } from '../@types'

interface ModalContextProps extends ModalProps { }

const ModalContext = createContext({} as ModalContextProps)

type TFooter = FC<HTMLAttributes<HTMLElement>>
type THeader = FC<HTMLAttributes<HTMLElement> & { btClose?: boolean }>
type TBody = FC<HTMLAttributes<HTMLDivElement>>
type TModal = FC<ModalContextProps> & { Header: THeader, Footer: TFooter, Body: TBody }

const Footer: TFooter = ({ ...props }) => {
  let classes = 'modal__footer'
  classes += props.className ? ` ${props.className}` : ""

  return (
    <footer className={classes}>
      {props.children}
    </footer>
  )
}

const Header: THeader = ({ btClose, ...props }) => {
  const { onHide } = useContext(ModalContext)

  let classes = 'modal__header'
  classes += props.className ? ` ${props.className}` : ""

  return (
    <header className={classes}>
      {props.children}
      {btClose && (
        <button className="btn__close" onClick={onHide}>
          <FaTimes />
        </button>
      )}
    </header>
  )
}

const Body: TBody = ({ ...props }) => {
  let classes = "modal__body"
  classes += props.className ? ` ${props.className}` : ""

  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

const Modal: TModal = ({ open, onHide, size = 'normal', scrollable, centered, ...props }) => {
  const [dialog, setDialog] = useState("modal__dialog")

  useEffect(() => {
    if (centered) setDialog(dialog => `${dialog} modal__dialog-centered`)
    if (scrollable) setDialog(dialog => `${dialog} modal__dialog-scrollable`)
    if (size) setDialog(dialog => `${dialog} modal__dialog-${size}`)

    if (open) {
      setTimeout(() => {
        setDialog(dialog => `${dialog} open`)
      }, 100)
    }
  }, [open, centered, size, scrollable])

  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        return closeModal()
      }
    })
  }, [onHide])

  function closeModal() {
    setDialog(dialog => dialog.replace('open', 'close'))
    setTimeout(() => {
      onHide && onHide()
      setTimeout(() => {
        setDialog("modal__dialog")
      }, 250);
    }, 500);
  }

  return (
    <ModalContext.Provider value={{ onHide: closeModal }}>
      <div className="modal" onClick={closeModal} style={{ display: open ? 'block' : 'none' }} {...props}>
        <div className={dialog} onClick={e => e.stopPropagation()}>
          <div className="modal__content" onClick={e => e.stopPropagation()}>
            {Children.count(props.children) === 1
              ? <Body>{props.children}</Body>
              : props.children
            }
          </div>
        </div>
      </div>
    </ModalContext.Provider>
  )
}

Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer

export {
  Footer as ModalFooter,
  Header as ModalHeader,
  Body as ModalBody,
  Modal,
}