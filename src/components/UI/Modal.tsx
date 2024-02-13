import React from "react";
import ReactDOM from "react-dom";

interface backdropProps {
  onClose: () => void;
}

interface modelProps {
  children: React.ReactNode;
  onClose: () => void;
  heading?: string;
}

const BackDrop = ({ onClose }: backdropProps) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-20 backdrop-blur-sm bg-black/30"
      onClick={onClose}
    />
  );
};

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="fixed min-w-[30%] bg-white z-30 p-1 rounded-xl drop-shadow-xl animate-slide-down">
        {children}
      </div>
    </div>
  );
};

const Modal = ({ children, onClose, heading }: modelProps) => {
  return (
    <div>
      {/* {ReactDOM.createPortal(<BackDrop onClose={onClose} />, portalElement)} */}
      <BackDrop onClose={onClose} />
      <ModalOverlay>
        <div className="w-full bg-gradient-to-r from-blue-500 to-sky-500 h-16 rounded-xl flex items-center justify-between p-4">
          <div className="text-2xl text-white  font-semibold">{heading}</div>
          <div
            className="px-3.5 py-2 rounded-xl bg-white cursor-pointer"
            onClick={onClose}
          >
            X
          </div>
        </div>
        <div className="p-4">{children}</div>
      </ModalOverlay>
    </div>
  );
};

export default Modal;
