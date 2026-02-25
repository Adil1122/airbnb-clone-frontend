'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer, maxWidth = '568px' }) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden';
      // Trigger animation
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
        document.body.style.overflow = 'unset';
      }, 300); // Wait for animation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <div
      className={`modal-overlay ${isVisible ? 'visible' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`modal-content ${isVisible ? 'visible' : ''}`}>
        <div className="modal-header">
          <button onClick={onClose} className="modal-close-btn">
            <X size={16} strokeWidth={2.5} />
          </button>
          {title && <h2 className="modal-title">{title}</h2>}
          <div style={{ width: 16 }}></div> {/* Spacer for alignment */}
        </div>

        <div className="modal-body">
          {children}
        </div>

        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 2000;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .modal-overlay.visible {
          opacity: 1;
        }

        .modal-content {
          background: white;
          width: 100%;
          max-height: 90vh;
          border-radius: 12px 12px 0 0;
          display: flex;
          flex-direction: column;
          transform: translateY(100%);
          transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1);
        }

        .modal-content.visible {
          transform: translateY(0);
        }

        @media (min-width: 744px) {
          .modal-overlay {
            align-items: center;
          }
          
          .modal-content {
            width: ${maxWidth};
            max-width: 95vw;
            border-radius: 12px;
            transform: translateY(20px) scale(0.95);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
          }

          .modal-content.visible {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-bottom: 1px solid #ebebeb;
          min-height: 64px;
        }

        .modal-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }

        .modal-close-btn:hover {
          background-color: #f7f7f7;
        }

        .modal-title {
          font-size: 16px;
          font-weight: 800;
          margin: 0;
          color: #222222;
        }

        .modal-body {
          padding: 24px;
          overflow-y: auto;
        }

        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid #ebebeb;
        }
      `}</style>
    </div>
  );
};

export default Modal;
