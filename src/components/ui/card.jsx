// src/components/ui/card.jsx
export function Card({ className, children, ...props }) {
    return (
      <div 
        className={`bg-white rounded-lg shadow ${className}`} 
        {...props}
      >
        {children}
      </div>
    );
  }
