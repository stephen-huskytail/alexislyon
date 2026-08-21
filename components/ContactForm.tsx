"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { ApiErrorHero } from '@/components/ApiErrorHero';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  topic: z.string().min(1),
  message: z.string().min(10),
});

type Form = z.infer<typeof schema>;

export function ContactForm() {
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Form>({ resolver: zodResolver(schema) });

  async function onSubmit(data: Form) {
    setErr('');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setOk(true);
      reset();
    } else {
      const body = await res.json().catch(() => null);
      setErr(body?.error || 'Something did not go through — try again?');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label>Name</label>
        <input type="text" autoComplete="name" placeholder="What should Alexis call you?" {...register('name')} />
        {errors.name && <p className="mt-1 text-sm text-rose">Please share your name.</p>}
      </div>

      <div>
        <label>Email</label>
        <input type="email" autoComplete="email" placeholder="Where can Alexis reply?" {...register('email')} />
        {errors.email && <p className="mt-1 text-sm text-rose">Please enter a valid email.</p>}
      </div>

      <div>
        <label>What brings you here?</label>
        <select {...register('topic')}>
          <option value="">What are you looking for?</option>
          <option>Self-trust</option>
          <option>Nervous system regulation</option>
          <option>Healing trauma while growing</option>
          <option>A threshold moment</option>
          <option>Nature-based work</option>
          <option>The Becoming — Women's Group</option>
          <option>Something I cannot name yet</option>
        </select>
      </div>

      <div>
        <label>Message</label>
        <textarea rows={6} placeholder="What is your nervous system carrying right now?" {...register('message')} />
        {errors.message && <p className="mt-1 text-sm text-rose">A little more context will help Alexis respond well.</p>}
      </div>

      <button className="btn btn-forest" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send & Begin'}
      </button>

      {ok && <p className="rounded-2xl bg-forest p-4 text-cream">Your message is on its way. Alexis responds within 48 hours.</p>}

      {err && <ApiErrorHero title="Message not sent" message={err} onRetry={() => setErr('')} retryLabel="Try again" />}
    </form>
  );
}
