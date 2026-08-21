"use client";

import Link from 'next/link';
import React from 'react';

type Props = {
  title?: string;
  message: string;
  details?: string;
  onRetry?: () => void;
  retryLabel?: string;
  actions?: React.ReactNode;
};

export function ApiErrorHero({
  title = 'Something went wrong',
  message,
  details,
  onRetry,
  retryLabel = 'Try again',
  actions,
}: Props) {
  return (
    <div className="rounded-[2rem] bg-forest p-6 text-cream shadow-soft">
      <p className="eyebrow uppercase tracking-[.12em] font-medium">Error</p>
      <h3 className="display mt-2 text-2xl">{title}</h3>
      <p className="mt-3 text-mid">{message}</p>
      {details && (
        <pre className="mt-4 bg-cream/5 p-3 rounded text-xs font-mono text-cream/80 overflow-auto">{details}</pre>
      )}
      <div className="mt-4 flex gap-3 flex-wrap">
        {onRetry && (
          <button type="button" onClick={onRetry} className="btn btn-gold">
            {retryLabel}
          </button>
        )}
        <Link href="/connect" className="btn btn-ghost">
          Contact support
        </Link>
        {actions}
      </div>
    </div>
  );
}
