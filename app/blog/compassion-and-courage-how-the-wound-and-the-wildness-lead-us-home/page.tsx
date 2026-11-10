import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { posts } from '@/lib/posts';

const post = posts.find((p) => p.slug === 'compassion-and-courage-how-the-wound-and-the-wildness-lead-us-home')!;
export const metadata: Metadata = {
  title: { absolute: post.seoTitle || post.title },
  description: post.metaDescription || post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.description,
    type: 'article',
    images: [{ url: post.featuredImage, width: 1200, height: 675, alt: post.featuredImageAlt }]
  },
  twitter: { card: 'summary_large_image', images: [post.featuredImage] }
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  image: `https://alexislyon.com${post.featuredImage}`,
  description: post.metaDescription || post.description,
  url: `https://alexislyon.com/blog/${post.slug}`,
  inLanguage: 'en-US',
  datePublished: post.datePublished,
  dateModified: post.datePublished,
  mainEntityOfPage: `https://alexislyon.com/blog/${post.slug}`
};

export default function CompassionAndCourage() {
  return (
    <main id="page-content">
      <JsonLd data={articleJsonLd} />
      <Nav />
      <article className="section pt-36">
        <div className="container max-w-3xl">
          <h1 className="display text-4xl text-forest sm:text-5xl">Compassion and Courage: How the Wound and the Wildness Lead Us Home</h1>
          <p className="mt-6 text-xs uppercase tracking-[.16em] text-mid">Nov 8, 2026 · @Alexis Lyon</p>
          <p className="body-large mt-6 text-dark">On Chiron, Lilith, and the treasure hidden in our exiled parts</p>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[2rem] shadow-soft">
            <Image src={post.featuredImage} alt={post.featuredImageAlt} fill priority className="object-cover" sizes="(max-width: 815px) calc(100vw - 3rem), 768px" />
          </div>

          <div data-source-body className="mt-10 space-y-6 leading-8 text-mid">
            <h2 className="display mt-12 text-3xl text-forest">Becoming a beginner again</h2>
            <p>It has been just over 3 months since I moved to Costa Rica. The first stretch was mostly about surviving: finding my footing, losing my footing, learning new rhythms, and carrying more than I ever have on my own. Lately, something has shifted. There is more flow now, and even some thriving.</p>
            <p>Acculturating has a way of stirring everything at once. Being new somewhere touches old places of not fitting in, not knowing the unwritten rules, not being seen. And at the same time, something wild in me has been waking up: the ocean, the rains, the land's own rhythms, and a fierce refusal to make myself smaller to belong to anything that is not True.</p>
            <p>In <Link href="/blog/diversity-breeds-vitality" className="font-medium text-forest underline decoration-gold underline-offset-4">my last post</Link> I wrote about how every relationship is a chance for cross-cultural integration. This one goes inward. It is about the two territories my work is built on, <Link href="/blog/post-traumatic-growth" className="font-medium text-forest underline decoration-gold underline-offset-4">the wound and the wildness</Link>, and two mythic figures who have been guiding me through both: Chiron and Lilith.</p>
            <h2 className="display mt-12 text-3xl text-forest">The Self at the heart</h2>
            <p>In Internal Family Systems, Richard Schwartz describes a core Self within each of us: a presence that is never damaged, only sometimes hidden. You can recognize it by its qualities, often called the 8 C's: calm, curiosity, compassion, confidence, courage, clarity, creativity and connectedness. When we lead from Self, we also bring the 5 P's: presence, perspective, patience, persistence and playfulness to our relating and relationships.</p>
            <p>When I sketched this out, I drew Self as a heart at the top of the page. Two paths ran down from it. One was compassion. The other was courage. And at the end of each path stood a figure from myth: Chiron on the path of compassion, and Lilith on the path of courage.</p>
            <p>Both paths lead to the same place. They lead down, into the parts of us that carry our pain. And both lead home.</p>
            <h2 className="display mt-12 text-3xl text-forest">Chiron, the wounded healer: the path of compassion</h2>
            <p>In Greek myth, Chiron was a centaur, abandoned at birth by a mother who could not accept what he was. He grew into the wisest of his kind: a healer, a teacher of heroes and of Asclepius, the god of medicine.</p>
            <p>Then Chiron was struck by a poisoned arrow, by accident. Because he was immortal, he could not die. And for all his skill, he could not heal his own wound. He lived with it, and it deepened his compassion and his gift for healing others.</p>
            <p>Chiron reminds us that some wounds don't simply disappear. Healing is not always erasing the hurt. Often it is learning to hold it with compassion, until the wound becomes a source of wisdom rather than only pain. Many of us who become healers, therapists and guides know this path from the inside.</p>
            <p>Compassion is how Self approaches the wound. Not to fix it or rush it, but to sit beside it and say: I see you. You make sense. You belong here too.</p>
            <h2 className="display mt-12 text-3xl text-forest">Lilith, the refusal to self-diminish: the path of courage</h2>
            <p>In Jewish folklore, Lilith was Adam's first partner, made from the same earth as he was. When she was asked to lie beneath him, she refused. She claimed her equality, and rather than make herself smaller to stay, she left the garden.</p>
            <p>For centuries her story was told as a warning. Today many of us hear it differently: as the story of the part of us that will not shrink to be accepted.</p>
            <p>Lilith is where we refuse to self-diminish. She digs deep from the soul to give us the fuel not to resign, give up or collapse. She helps us transmute calcified fears and old wounds, and re-member our soul contracts, bringing us back to Self and Spirit.</p>
            <p>Brené Brown writes that fitting in is the greatest barrier to belonging. Fitting in asks us to change who we are to be accepted. True belonging asks us to be who we are. This is where Lilith's refusal comes in. It takes courage to stop fitting in, especially in a new place, a new culture, a new chapter of life. But it is the only road to belonging that doesn't cost us ourselves.</p>
            <h2 className="display mt-12 text-3xl text-forest">Where they meet: the clues to the treasure</h2>
            <p>In IFS language, our wounds are burdens: the pain and hurt feelings carried by young parts of us that were exiled because the feelings were too much to bear. Rejection. Shame. Guilt. The ache of not being seen.</p>
            <p>This is where Chiron and Lilith meet. Often the wound formed in the very place where our wildness was punished, shamed or silenced. We learned to exile the part of us that was too loud, too sensitive, too much, and we carried the hurt of that exile ever since.</p>
            <p>So healing and reclaiming may be one movement. Compassion lets us turn toward the wounded part without flinching. Courage lets us stop abandoning it to fit in. And as the wound is witnessed, the wildness can return through it.</p>
            <p>Our wounds and exiled parts are the clues to the treasure.</p>
            <p>Brené Brown calls vulnerability the birthplace of innovation, creativity and change. It is also the birthplace of authenticity. The places we have hidden are often where our most alive, creative selves are waiting.</p>
            <h2 className="display mt-12 text-3xl text-forest">Myth as medicine: when the wound becomes sacred</h2>
            <p>Why myth? Because stories reach places that explanation cannot. Brené Brown, who calls herself a researcher-storyteller, puts it beautifully: maybe stories are just data with a soul.</p>
            <p>When we see our pain inside a larger story, something shifts. Our suffering is no longer only private and shameful. It becomes part of a human pattern as old as Chiron and Lilith. Jean Houston calls this sacred wounding. She teaches that if we look far enough and wide enough, we see that our pathos, our personal suffering, is part of a much larger mythos.</p>
            <p>In The Search for the Beloved, she writes: "The wounding becomes sacred when we are willing to release our old stories and to become the vehicles through which the new story may emerge into time. When we fail to do this, we repeat the same old story over and over again."</p>
            <p>What excites me about this is that our pathos, on its own, is a narrow place. When we see our pain only through our personal story, it can feel like a small room with no doors. But just as I wrote in my last post about widening our aperture to meet difference, we can widen beyond our narrow stories too. When we do, we step into new territory, and that territory holds treasure: possibility, meaning, and healing we could not have found while we stayed inside the old story.</p>
            <p>To me, that is a promise: what has hurt us can become the very ground of our gifts.</p>
            <h2 className="display mt-12 text-3xl text-forest">Soul-rooted: the body's part</h2>
            <p>At the bottom of my map I wrote one word: soul-rooted. Under it I drew roots, and water flowing.</p>
            <p>The wound lives in the body as contraction and bracing. The wildness lives in the body as vitality, impulse and life force. Neither can move freely until the nervous system feels safe enough to let it. That is why nervous system regulation comes first: it builds the capacity to turn toward old pain without being flooded, and to feel our full aliveness without being frightened of it.</p>
            <p>A simple practice for meeting both:</p>
            <ol className="list-decimal space-y-4 pl-6 marker:text-forest">
            <li>  Root. Feel your feet and the ground beneath you. Let a few long exhales settle your body.</li>
            <li>  Find the heart. Place a hand on your chest and invite one quality of Self: calm, curiosity or compassion.</li>
            <li>  Meet the wound with compassion. Ask a tender place in you: what do you want me to know? Listen without fixing.</li>
            <li>  Meet the wildness with courage. Ask: where have I been making myself smaller? Notice what in your body wants to stand up, take up space, or move.</li>
            <li>  Return to the roots. Thank both parts, and come back to your breath and the ground.</li>
            </ol>
            <h2 className="display mt-12 text-3xl text-forest">A playful doorway: Chiron and Lilith in your chart</h2>
            <p>If you love astrology or Human Design, Chiron and Black Moon Lilith both appear in your charts. Their signs, houses and gates can offer playful clues about where your wound and your wildness live, and what they might be asking of you. Hold what you find as an invitation for curiosity, not a verdict. I'll explore this more deeply in future posts.</p>
            <p>In my own sessions, when it serves someone's healing and becoming, I sometimes weave in myth, archetype and astrology, including figures like Chiron and Lilith, alongside somatic and nervous system work. It's always an invitation, never a requirement. For some people, seeing their story mirrored in a myth or a chart opens a door that talking alone can't.</p>
            <h2 className="display mt-12 text-3xl text-forest">Healing for the wound, reclaiming for the wildness</h2>
            <p>These months in Costa Rica have shown me both paths. The wound of being new, of not fitting in, has asked for my compassion. The wildness, the ocean, the rains, my own refusal to shrink, has asked for my courage. And beneath both, I keep finding the same thing: roots, and a Self that was never lost.</p>
            <p>I believe each of us carries a wound that wants to be witnessed and a wildness that wants to come home. When we meet them from the heart, with compassion and courage, the wound can become sacred, and the wildness can become our life force again.</p>
            <p>If you feel the pull of either, the tender place that needs witnessing or the untamed part that's tired of making itself small, I would be honored to walk with you. In my coaching work, we use nervous system regulation, somatic practice and the wisdom of story to help you heal what hurts and reclaim what's yours.</p>
          </div>

          <div className="mt-12 rounded-[2rem] bg-forest p-8 text-center text-cream">
            <p className="display text-3xl">Ready to meet your wound with compassion and your wildness with courage?</p>
            <Link className="btn btn-gold mt-6" href="/connect">Schedule your free 20-minute consultation</Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
