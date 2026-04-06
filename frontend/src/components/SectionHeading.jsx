import React from 'react';

/**
 * Consistent title block for page sections.
 */
export function SectionHeading({ kicker, children, description, className = '' }) {
  return (
    <div className={`text-center mb-16 md:mb-20 ${className}`}>
      {kicker ? <p className="section-kicker mb-3">{kicker}</p> : null}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
        {children}
      </h2>
      <div className="section-rule" />
      {description ? (
        <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
