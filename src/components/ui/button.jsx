  
  // src/components/ui/button.jsx
  export function Button({ className, children, ...props }) {
    return (
      <button 
        className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }