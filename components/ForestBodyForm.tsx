'use client';
import { useState } from 'react';

export function ForestBodyForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'done'|'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/forest-body', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return <p className="mt-6 text-sm leading-7 text-gold-lt">Check your inbox — your audio is on its way.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex gap-3 max-sm:flex-col">
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email for the audio download"
        className="flex-1"
        disabled={status === 'loading'}
      />
      <button className="btn btn-gold shrink-0" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Receive Audio'}
      </button>
      {status === 'error' && <p className="w-full text-xs text-gold-lt/70 mt-1">Something went wrong — please try again.</p>}
    </form>
  );
}
