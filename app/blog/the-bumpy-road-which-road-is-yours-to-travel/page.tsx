import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { posts } from '@/lib/posts';

const post = posts.find((p) => p.slug === 'the-bumpy-road-which-road-is-yours-to-travel')!;
const formattedDate = new Date(`${post.datePublished}T12:00:00Z`).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC'
});

export const metadata: Metadata = {
  title: { absolute: 'The Bumpy Road: Which Road Is Yours to Travel?' },
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    title: 'The Bumpy Road: Which Road Is Yours to Travel?',
    description: post.description,
    type: 'article'
  }
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  url: `https://alexislyon.com/blog/${post.slug}`,
  inLanguage: 'en-US',
  mainEntityOfPage: `https://alexislyon.com/blog/${post.slug}`
};

export default function TheBumpyRoadWhichRoadIsYoursToTravel() {
  return (
    <main id="page-content">
      <JsonLd data={articleJsonLd} />
      <Nav />
      <article className="section pt-36">
        <div className="container max-w-3xl">
          <h1 className="display text-4xl text-forest sm:text-5xl">The Bumpy Road: Which Road Is Yours to Travel?</h1>
          <p className="body-large mt-6 text-dark">On meaningful discomfort, self-trust, and listening for what calls us more fully into life</p>
          <p className="mt-6 text-xs uppercase tracking-[.16em] text-mid">By Alexis Lyon · {formattedDate} · {post.readingTime}</p>

          <div className="mt-10 space-y-6 leading-8 text-mid">
            <p>“Oh my god, this is intense, but I think life is actually supposed to be more like this!”</p>
            <p>It was 2014, and I was being driven down an extremely bumpy jungle road in Costa Rica. Even though I was in the passenger seat, I felt like an active participant in this ride. I had to be vigilant and awake. There wasn’t really a choice.</p>
            <p>At first, there were moments when I figured the Jeep driver was making a mistake and was going to slow down, or the road would magically become smoother. Quickly, it became apparent that these were simply the terms of the road and the journey. The driver was not apologizing for anything or appearing surprised by any of the twists and turns.</p>
            <p>Something relaxed in me when I accepted that there was not a problem with this road. Or the driver. Or the car. Or even me.</p>
            <p>This was just the bumpy jungle road getting me to and from my farm destination for the month.</p>
            <p>The road worked.</p>
            <p>It just didn’t allow me to dissociate the way a lot of our modern-day driving does, whether we’re the driver or the passenger. I couldn’t completely check out. The road required my participation.</p>
            <p>And then I felt some intense gratitude laced with disturbance.</p>
            <p>I felt so grateful that I was getting to have this experience, and I felt like I was touching into a deeper layer of what life was really about—or at least what my soul was called to experience in this lifetime.</p>
            <p>Simultaneously, I felt deeply disturbed.</p>
            <p>The phrase comes to mind: comforting the disturbed and disturbing the comfortable.</p>
            <p>I felt disturbed and, honestly, also a little cheated as I realized how domesticated my modern American life was in hidden ways—or at least ways that had been hidden to me because the fish can’t see the water it swims in.</p>
            <p>But here I was, a fish out of water, having an aha moment and wondering:</p>
            <p>How can I stay connected to this deeper aliveness and truth about life?</p>
            <p>How can I stay connected to this deeper jungle root—to my own wild, and maybe even to the universal, collective Wild?</p>
            <p>How can I not get brainwashed back into the allure of comfort and domestication?</p>

            <h2 className="display mt-12 text-3xl text-forest">Meaningful Discomfort</h2>
            <p>That experience, among countless others during my month-long adventure in the Costa Rican mountains, has stayed with me.</p>
            <p>So much so that I’ve been trying to get back there ever since—to integrate different seasons of my life with the wisdom I felt on the Costa Rican land.</p>
            <p>A little over a year after my bumpy-road epiphany, I completed a two-year Ecotherapy certification, and I continually seem to be seeking ways to weave myself back into the natural, organic, wild cycles of life.</p>
            <p>I am often disturbed and perhaps just as often comforted by the grace of Life.</p>
            <p>Over the years, I’ve started to think about something I might call meaningful discomfort.</p>
            <p>Not discomfort for the sake of discomfort. Not the belief that suffering is inherently noble or that we should force ourselves to endure things that hurt us.</p>
            <p>I mean discomfort in the service of something that matters.</p>
            <p>The discomfort that can come with becoming more awake, more honest, more present, more alive.</p>
            <p>Sometimes discomfort is important information telling us: This isn’t right. Pay attention. Something needs to change.</p>
            <p>And sometimes discomfort arises because something that matters to us asks us to stretch beyond the ways we have learned to keep ourselves safe, comfortable, or contained.</p>
            <p>Learning to tell the difference may be one of the most important ways we develop self-trust.</p>

            <h2 className="display mt-12 text-3xl text-forest">Which Roads Are Ours to Travel?</h2>
            <p>It is my conviction that we all have a birthright to be connected to our aliveness and to nurture and tend to that aliveness in ways that are authentic and true to our unique souls.</p>
            <p>That doesn’t mean every difficult road is ours to travel.</p>
            <p>Maybe part of the work of becoming more fully ourselves is developing the self-trust to know which roads are ours.</p>
            <p>And perhaps it takes self-love to actually travel them.</p>
            <p>Self-trust isn’t about having the courage to choose the harder road. And I’m certainly not suggesting that everyone needs to move to Costa Rica or seek out bumpy jungle roads in order to come more fully alive.</p>
            <p>The road that is yours may not look anything like mine.</p>
            <p>It may involve a great outward adventure, or something almost invisible to everyone but you. It might mean making a change, or staying and tending more deeply to something you already love. It might mean taking a risk, or finally allowing yourself to rest.</p>
            <p>It might take you somewhere you have never been before, or return you to something ancient in yourself that you somehow recognize.</p>
            <p>The invitation is not to choose discomfort.</p>
            <p>It is to develop enough self-love and self-trust to listen within, discern what is true for you, and begin taking meaningful steps toward your own aliveness.</p>
            <p>Fear gets a voice. Pain gets a voice. Negative thinking gets a voice. The parts of us that long for safety and comfort get a voice.</p>
            <p>But they don’t necessarily get the final word.</p>
            <p>There may be another voice underneath all of that. The small voice that keeps telling the truth if we get quiet enough to hear it.</p>
            <p>And strangely, what that voice calls us toward may be something we have never experienced before and something we somehow recognize at the same time.</p>
            <p>There are moments in life when moving forward can feel like remembering—like learning something new and remembering something very old all at once.</p>
            <p>The road may be new, but something in us recognizes it.</p>
            <p>Maybe this is part of what it means to follow a soul calling. We are not simply seeking the unfamiliar or pushing ourselves outside our comfort zones. Sometimes we are moving toward something that feels ancient in us—an old knowing taking a new form, an ancient remembering of a future we have not yet lived.</p>
            <p>This matters to me.</p>
            <p>This lights me up.</p>
            <p>There is something here I want to experience.</p>
            <p>Something in me knows this road.</p>
            <p>And then perhaps self-love means caring tenderly for ourselves as we listen, and self-trust means taking the next meaningful step—not because it is harder, but because something in us recognizes the road as our own.</p>

            <h2 className="display mt-12 text-3xl text-forest">Returning to the Bumpy Road</h2>
            <p>In my last article about psychological flexibility, I shared a little about my journey to getting myself back to Costa Rica for this year-long immersion with my son.</p>
            <p>Now I have returned to the bumpy road.</p>
            <p>But in a very different season of my life.</p>
            <p>This time I am a mother, navigating how to further reclaim my own organic self while nurturing a younger soul to do the same at a formative time in his life.</p>
            <p>And this time, I’m in the driver’s seat.</p>
            <p>There is something almost too perfect about that.</p>
            <p>The first time, I was a passenger on the bumpy road. I didn’t choose the road, and I didn’t know what was coming. I simply discovered something about myself while traveling it.</p>
            <p>This time, I chose the road.</p>
            <p>I chose this journey and created the reality of us both being here. That felt like a type of accomplishment in and of itself.</p>
            <p>To be perfectly honest, the bumpy jungle roads felt exciting and fun for almost the entire first week we were here.</p>
            <p>And then, soon enough, there was a day or two—or moments since—when the roads almost felt personal.</p>
            <p>Like they were deliberately trying to make my life more difficult than necessary. Taunting me for having the gall to come to a new country where I don’t even speak the language (yet).</p>
            <p>Apparently, choosing your bumpy road doesn’t mean you have to enjoy every bump.</p>
            <p>And as life will have it, because we live in a mysteriously honorable universe as far as I can tell, I am finding my balance with the bumpy roads.</p>
            <p>And enjoying the ones that are also smooth and (sometimes) available.</p>
            <p>Maybe that is part of it, too.</p>
            <p>We don’t have to reject comfort in order to choose aliveness.</p>
            <p>We can enjoy the smooth road when it appears.</p>
            <p>We just don’t have to organize our lives around avoiding every bump.</p>

            <h2 className="display mt-12 text-3xl text-forest">What Is Your Road?</h2>
            <p>Dear reader, where is life calling you into something deeper?</p>
            <p>Something more alive? More real?</p>
            <p>Something that may require courage and may have challenges, bumps, twists and turns—but may also be the road into a deeper unfolding of your own life?</p>
            <p>Costa Rica just happens to be the calling for me at this time. It is part of a larger theme in my life: opening up possibilities that my soul wants to experience and that I want my son to have the opportunity to experience in his own unique way.</p>
            <p>But back to you.</p>
            <p>What happens if you let yourself feel your own call of the wild?</p>
            <p>What lights you up?</p>
            <p>What excites you?</p>
            <p>What gives you a sense of mystery—almost like a promise that something is waiting for you without fully revealing what it will be?</p>
            <p>And what would it be like to begin nourishing that calling in some small way, shape, or form?</p>
            <p>Maybe you are already many steps down your wild road.</p>
            <p>Maybe you sense that you’re off track and are feeling the grief of that.</p>
            <p>Maybe you feel completely off track.</p>
            <p>Or maybe today it is simply a few steps to the left or the right.</p>
            <p>Can you bring enough compassion and curiosity to yourself to listen for what is true?</p>
            <p>And then: What is one meaningful step you could take?</p>
            <p>What would bring a little water or sunlight to your own personal call of the wild?</p>
            <p>Whatever your truth is, I honor you. I have probably been there in some form, too. And I get to return, again and again, to the ongoing task of nurturing my own soul spark.</p>
            <p>Something happens when we support our own spark, become gently curious about what lights up others, and lean into the weaving and co-creation that happen when souls begin lighting up around one another—illuminating a constellation of Truth.</p>
            <p>What becomes possible when we get quiet enough to hear that small voice inside us that keeps telling the truth?</p>
            <p>When we develop the self-trust to recognize the roads that are ours?</p>
            <p>The self-love to care for ourselves as we travel them?</p>
            <p>And the courage to take one meaningful step toward our own aliveness—even when that step includes some discomfort?</p>
            <p>I see a beautiful world where we can actually see ourselves and one another, reflecting Truth and Beauty back to one another.</p>
            <p>Maybe we don’t need the road to become smooth before we begin.</p>
            <p>Maybe we need to know which road is ours.</p>
          </div>

          <div className="mt-12 rounded-[2rem] bg-forest p-8 text-center text-cream">
            <p className="display text-3xl">This is the work I do. Let&rsquo;s talk.</p>
            <Link className="btn btn-gold mt-6" href="/connect">Schedule Your Free Consultation</Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
