import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <main>
      <Nav />
      <section className="section flex min-h-[78vh] items-center pt-36">
        <div className="container text-center">
          <p className="display text-[9rem] leading-none text-warm-dk md:text-[13rem]">404</p>
          <p className="eyebrow mx-auto mt-4 w-fit">Page not found</p>
          <h1 className="display mx-auto mt-6 max-w-3xl text-5xl text-forest md:text-7xl">
            This path wandered off into the forest.
          </h1>
          <p className="body-large mx-auto mt-6 max-w-2xl text-mid">
            The page you’re looking for may have moved, changed, or no longer exists. You can return home or begin the conversation with Alexis.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link className="btn btn-forest" href="/">Return Home</Link>
            <Link className="btn btn-gold" href="/connect">Connect</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
