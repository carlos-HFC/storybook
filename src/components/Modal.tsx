import { Children, createContext, FC, HTMLAttributes, useContext, useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { ModalProps } from '../@types'

interface ModalContextProps extends ModalProps { }

const ModalContext = createContext({} as ModalContextProps)

type TFooter = FC<HTMLAttributes<HTMLElement>>
type THeader = FC<HTMLAttributes<HTMLElement> & { btClose?: boolean }>
type TModal = FC<ModalContextProps> & { Header: THeader, Footer: TFooter }

const Footer: TFooter = ({ children, ...props }) => {
  let classes = 'modal__footer'
  classes += props.className ? ` ${props.className}` : ""

  return (
    <footer className={classes}>
      {children}
    </footer>
  )
}

const Header: THeader = ({ btClose, children, ...props }) => {
  const { onHide } = useContext(ModalContext)

  let classes = 'modal__header'
  classes += props.className ? ` ${props.className}` : ""

  return (
    <header className={classes}>
      {children}
      {btClose && (
        <button className="btn__close" onClick={onHide}>
          <FaTimes />
        </button>
      )}
    </header>
  )
}

const Modal: TModal = ({ open, onHide, children, scrollable, centered, ...props }) => {
  let initialDialog = 'modal__dialog fadein'
  initialDialog += scrollable ? ' modal__dialog-scrollable' : ''
  initialDialog += centered ? ' modal__dialog-centered' : ''

  const [dialog, setDialog] = useState(initialDialog)

  let classes = 'modal'
  classes += props.className ? ` ${props.className}` : ""

  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        closeModal()
      }
    })
  }, [onHide])

  useEffect(() => {
    setTimeout(() => {
      if (open) setDialog(dialog.replace('fadein', ''))
    }, 200)
  }, [open, dialog])

  function closeModal() {
    setDialog(`${dialog} fadeout`)

    setTimeout(() => {
      setDialog(initialDialog)
      onHide && onHide()
    }, centered ? 400 : 200);
  }

  return (
    <ModalContext.Provider value={{ open, onHide: closeModal }}>
      <div className={classes} onClick={onHide && closeModal} style={{ display: open ? 'block' : 'none' }} {...props}>
        <div className={dialog} onClick={e => e.stopPropagation()}>
          <div className="modal__content" onClick={e => e.stopPropagation()}>
            {Children.count(children) === 1
              ? <div className="modal__body">{children}</div>
              : children
            }
          </div>
        </div>
      </div>
    </ModalContext.Provider>
  )
}

Modal.Header = Header
Modal.Footer = Footer

export {
  Footer as ModalFooter,
  Header as ModalHeader,
  Modal,
}