import React from 'react'

const Modelcomponent = ({ isOpen, onClose }) => {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header className="modal-header">
            <h2 className="modal-title">Modal Title</h2>
          </header>
          <main className="modal-body">
            This is the modal body.
          </main>
          <footer className="modal-footer">
            <button type="button" className="close" onClick={onClose}>Close</button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Modelcomponent
