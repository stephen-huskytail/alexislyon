import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { posts } from '@/lib/posts';

const post = posts.find((p) => p.slug === 'post-traumatic-growth')!;
const formattedDate = new Date(`${post.datePublished}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: { title: post.title, description: post.description, type: 'article', publishedTime: post.datePublished, images: [{ url: post.featuredImage, width: 1200, height: 675, alt: post.featuredImageAlt }] },
  twitter: { card: 'summary_large_image', images: [post.featuredImage] }
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  url: `https://alexislyon.com/blog/${post.slug}`,
  datePublished: post.datePublished,
  dateModified: post.datePublished,
  inLanguage: 'en-US',
  author: { '@type': 'Person', name: 'Alexis Lyon', url: 'https://alexislyon.com' },
  publisher: { '@type': 'Person', name: 'Alexis Lyon', url: 'https://alexislyon.com' },
  image: `https://alexislyon.com${post.featuredImage}`,
  keywords: ['post-traumatic growth', 'trauma healing', 'healing and reclaiming'],
  mainEntityOfPage: `https://alexislyon.com/blog/${post.slug}`
};

export default function PostTraumaticGrowth() {
  return (
    <main id="page-content">
      <JsonLd data={articleJsonLd} />
      <Nav />
      <article className="section pt-36">
        <div className="container max-w-3xl">
          <p className="eyebrow">{post.eyebrow}</p>
          <h1 className="display mt-5 text-4xl sm:text-5xl text-forest">{post.title}</h1>
          <p className="mt-6 text-xs uppercase tracking-[.16em] text-mid">By Alexis Lyon · {formattedDate} · {post.readingTime}</p>
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[2rem] shadow-soft">
            <Image src={post.featuredImage} alt={post.featuredImageAlt} fill priority className="object-cover" sizes="(max-width: 815px) calc(100vw - 3rem), 768px" />
          </div>
          <div className="mt-10 space-y-6 leading-8 text-mid">
            <p className="body-large text-dark">{"What needs healing, what needs reclaiming, and what becomes possible at the places where life breaks us open"}</p>
            <p className="font-medium italic text-dark">{"“The alchemy begins where the wound is honored and the wildness is free.”"}</p>
            <p>{"What happens at the intersection of our wounding and our wildness?"}</p>
            <p>{"Both personally and in my work as a therapist, I have been exploring a series of questions that have evolved over time."}</p>
            <p>{"What wounds and what heals?"}</p>
            <p>{"How do we safely express our True Self? And what does safety even mean?"}</p>
            <p>{"How do we find the parts of ourselves that have been buried, suppressed, exiled? Why did these parts go underground in the first place?"}</p>
            <p>{"Are these exiled parts of us problematic or wounded—or simply unintegrated?"}</p>
            <p>{"If our families, relationships, and culture have conditioned us, sometimes for their own convenience, when and how do we put a stake in the ground and decide for ourselves what we want to reclaim?"}</p>
            <p>{"Is our True Self a little bit Wild? Undomesticated? Maybe even inconvenient?"}</p>
            <p>{"Inconvenient to whom?"}</p>
            <p>{"And how do we become integrated human beings with enough self-possession and choice to meaningfully participate in our relationships, our communities, and the world?"}</p>
            <p>{"So many questions."}</p>
            <p>{"What I feel passionate about being in service to at this time is the process of discerning what is our wounding and what—and where—is our wildness:"}</p>
            <p>{"What needs healing, and what needs reclaiming?"}</p>
            <p>{"Not so much as a philosophical analysis, but as a way of developing the felt capacity to intelligently navigate the energies we experience."}</p>
            <p>{"Because I think there is a potency at the intersection of these two energies. And when we don’t yet know how to work with what is moving through us, we may suppress it, become overwhelmed by it, turn it against ourselves, or express it in ways that reinforce old wounds."}</p>
            <p>{"What once helped us survive may continue operating long after the original danger has passed. Fight, flight, freeze, fawn—protective strategies that were once necessary can become exhausting when they chronically organize our experience."}</p>
            <p>{"A system that has been working this hard needs help."}</p>
            <p>{"And deserves help."}</p>
            <p>{"I don’t think the answer is always obvious: What needs healing, and what needs reclaiming?"}</p>
            <p>{"This is why I think cultivating discernment matters."}</p>
            <p>{"Different tools are needed for different jobs."}</p>
            <p>{"And if we actually want to distill the value from our healing and reclamation, we need to become curious about what this particular place in us is asking for. I don’t think we have to get it perfect."}</p>
            <p>{"Sometimes there is fire in the wounds—sacred fire to be reclaimed."}</p>
            <p>{"And sometimes on our path toward empowerment and reclamation, we encounter aspects of ourselves that are hurt and need a specific kind of tending: perhaps patience, time, space, relationship, compassion."}</p>
            <p>{"Increasingly, I don’t think healing and reclaiming happen in any particular order."}</p>
            <p>{"They seem to move around one another."}</p>
            <p>{"We tend something wounded and discover more life underneath it. We begin reclaiming something vital and encounter the grief of how long it has been missing. We follow what makes us feel alive and bump into an old fear that asks for our compassion. We offer that fear some care, and suddenly another little piece of ourselves becomes available."}</p>
            <p>{"Perhaps it is less a progression than a dance."}</p>
            <h2 className="display mt-12 text-3xl text-forest">{"What the Research on Post-Traumatic Growth Tells Us"}</h2>
            <p>{"There is actually a name in psychology for some of the positive changes people report in the wake of profoundly challenging experiences: post-traumatic growth."}</p>
            <p>{"Psychologists Richard Tedeschi and Lawrence Calhoun developed the concept through research with people who had lived through highly challenging circumstances. Their work identified five broad areas in which people may report growth following trauma: a greater appreciation of life, changes in relationships, recognition of new possibilities, a greater sense of personal strength, and spiritual or existential change."}</p>
            <p>{"This research feels promising to me. Hopeful."}</p>
            <p>{"And I also want to hold it with care."}</p>
            <p>{"Post-traumatic growth does not mean we should romanticize trauma or call it good. Nor should we expect someone experiencing trauma to feel grateful for it or believe that it somehow makes sense."}</p>
            <p>{"Growth is not something a traumatized person owes the world."}</p>
            <p>{"There is also meaningful debate within the research itself about what we mean by growth. Much of the research relies upon people looking back and describing ways they believe they have changed. Researchers continue to explore the relationship between perceived growth and measurable change over time."}</p>
            <p>{"So I don’t think the research gives us permission to say:"}</p>
            <p>{"Trauma makes us grow."}</p>
            <p>{"It gives us something more nuanced and, to me, more interesting:"}</p>
            <p>{"Human beings sometimes experience meaningful growth in the midst and aftermath of profound disruption."}</p>
            <p>{"And from there, I find myself wondering about rupture itself."}</p>
            <h2 className="display mt-12 text-3xl text-forest">{"When the Ground Breaks Open"}</h2>
            <p>{"This is where I move from what research can tell us into something more exploratory—something shaped by my work as a therapist, my own life, and my relationship with the natural world."}</p>
            <p>{"What can become possible when the ground of a life is ruptured?"}</p>
            <p>{"In nature, rupture is not inherently good."}</p>
            <p>{"A fire can devastate a forest. A storm can tear apart a landscape. A tree can fall and leave an enormous opening where there was once shade and structure."}</p>
            <p>{"The ecosystem does not need us to call the destruction beautiful."}</p>
            <p>{"And yet the opening changes what becomes possible there."}</p>
            <p>{"Light reaches ground that has not received light in years. Seeds that have been dormant encounter new conditions. Water moves differently. Some things die. Some survive. Some return. Something entirely new may begin growing alongside what was already there."}</p>
            <p>{"I wonder if something like this can happen within us."}</p>
            <p>{"Not because the rupture was necessary."}</p>
            <p>{"Not because the wound was secretly a gift."}</p>
            <p>{"But because once the ground has been broken open, we may encounter material that was previously inaccessible to us."}</p>
            <p>{"And sometimes what we encounter is not only our pain."}</p>
            <p>{"Sometimes we encounter our wildness."}</p>
            <h2 className="display mt-12 text-3xl text-forest">{"Wound and Wildness"}</h2>
            <p>{"Our wounding is where we have been hurt—where something happened that overwhelmed us, violated us, terrified us, disconnected us, or exceeded our capacity to meet it at the time."}</p>
            <p>{"Wounds ask something of us."}</p>
            <p>{"They may ask for safety, grieving, compassion, protection, witnessing, relationship, repair. They may ask us to stay with ourselves long enough to discover what is actually needed."}</p>
            <p>{"And often, somewhere in this same territory, I believe we encounter something else."}</p>
            <p>{"Parts of us that did not have somewhere to go."}</p>
            <p>{"Perhaps our families of origin couldn’t welcome them. Perhaps our relationships couldn’t hold them. Perhaps our culture gave us explicit or implicit messages about what was acceptable."}</p>
            <p>{"And because human beings need attachment, safety, and belonging, we adapt."}</p>
            <p>{"Some parts of us go underground."}</p>
            <p>{"Our anger."}</p>
            <p>{"Our passion."}</p>
            <p>{"Our sexuality."}</p>
            <p>{"Our creativity."}</p>
            <p>{"Our voice."}</p>
            <p>{"Our sensitivity."}</p>
            <p>{"Our desire to protect."}</p>
            <p>{"Our capacity to love fiercely."}</p>
            <p>{"Our Eros."}</p>
            <p>{"Our life force."}</p>
            <p>{"Sometimes they go underground so thoroughly that we forget they were ever ours."}</p>
            <p>{"And yet I wonder whether, in going underground, something is also preserved."}</p>
            <p>{"This is what I mean when I speak about wildness."}</p>
            <p>{"Not an untouched, pristine self that somehow escaped everything that happened to us. Our wildness can be wounded too."}</p>
            <p>{"I mean the living material within us that continues to reach toward expression, relationship, creation, truth, love, and life."}</p>
            <p>{"And this is where the distinction between healing and reclaiming becomes useful to me."}</p>
            <p>{"Some of what we carry needs healing."}</p>
            <p>{"Some of what we have lost contact with needs reclaiming."}</p>
            <p>{"And often they have grown around one another so intimately that we cannot immediately tell which is which—or whether something needs both."}</p>
            <p>{"Perhaps that is why the work requires something more than a formula."}</p>
            <p>{"It requires relationship."}</p>
            <p>{"Attention."}</p>
            <p>{"Curiosity."}</p>
            <p>{"And the willingness to stay with ourselves long enough to discern what is actually being asked of us."}</p>
            <h2 className="display mt-12 text-3xl text-forest">{"Learning to Hold the Fire"}</h2>
            <p>{"This is where it becomes personal for me."}</p>
            <p>{"One of the places where wound and wildness have danced most intimately in my own life is around intensity."}</p>
            <p>{"My passion. My anger. My conviction. My desire. The sheer force with which I can sometimes experience being alive."}</p>
            <p>{"There have been times when I have experienced that intensity as profoundly authentic, and other times when I have judged it, feared it, or wondered whether I am simply too much."}</p>
            <p>{"This has not been an easy dance for me."}</p>
            <p>{"It is one I feel compelled to keep learning, growing, and cultivating."}</p>
            <p>{"Because there are things here that have needed healing."}</p>
            <p>{"Pain can become entangled with anger. Old wounds can shape how we protect ourselves, fight to be understood, or react when connection feels threatened. Reclaiming our wildness does not absolve us of responsibility for how our energy and behavior affect another human being."}</p>
            <p>{"But I have also increasingly questioned whether the fire itself is the problem."}</p>
            <p>{"Perhaps the task is not to become less intense."}</p>
            <p>{"Perhaps part of the work is becoming more capable of holding our intensity."}</p>
            <p>{"Holding is not suppression."}</p>
            <p>{"And it is not domination."}</p>
            <p>{"Suppression says: This is too much. Make it smaller. Put it away."}</p>
            <p>{"Domination says: Because I feel it, it gets to take over."}</p>
            <p>{"Holding asks something different."}</p>
            <p>{"Can I feel this energy moving through me without abandoning myself or overpowering you?"}</p>
            <p>{"Can I listen to it?"}</p>
            <p>{"Can I become curious about what it protects, what it loves, what it knows, what it wants?"}</p>
            <p>{"Can I take responsibility for it without becoming ashamed of it?"}</p>
            <p>{"Can I develop enough relationship with my own life force that I have more choice about how I bring it into relationship with the world?"}</p>
            <h2 className="display mt-12 text-3xl text-forest">{"Nature Has Never Asked Life to Be One Volume"}</h2>
            <p>{"When I look toward nature, I see intensity everywhere."}</p>
            <p>{"But it doesn’t always look the same."}</p>
            <p>{"Sometimes intensity is volcanic."}</p>
            <p>{"Sometimes it rushes like water."}</p>
            <p>{"Sometimes it arrives as a storm."}</p>
            <p>{"And sometimes intensity is a slow unfurling—the almost imperceptible insistence of a seed breaking open underground."}</p>
            <p>{"Nature moves through rhythms and seasons, expansion and contraction, eruption and rest."}</p>
            <p>{"There is no single correct volume for aliveness."}</p>
            <p>{"This makes me wonder what becomes possible when we stop organizing our relationship with ourselves around the question:"}</p>
            <p>{"How do I become less?"}</p>
            <p>{"And begin asking:"}</p>
            <p>{"How do I become capable of holding more of who I am?"}</p>
            <p>{"How do we remain ourselves while loving and being loved?"}</p>
            <p>{"How do we allow relationship to transform us without abandoning ourselves?"}</p>
            <p>{"How do we belong without making ourselves smaller?"}</p>
            <p>{"How do we express the fullness of our own life force without requiring another person to become smaller in response?"}</p>
            <p>{"Maybe maturation does not require the domestication of our wildness."}</p>
            <p>{"Maybe it asks us to develop the capacity to inhabit it."}</p>
            <h2 className="display mt-12 text-3xl text-forest">{"Something Lost, Something Found"}</h2>
            <p>{"Sometimes this process begins before we have words for it."}</p>
            <p>{"An experience, a relationship, a loss, an encounter with nature, a creative impulse—or sometimes a profound rupture—touches something in us."}</p>
            <p>{"And suddenly we feel something."}</p>
            <p>{"Something new."}</p>
            <p>{"Something old."}</p>
            <p>{"Something familiar."}</p>
            <p>{"Something remembered."}</p>
            <p>{"Something lost and something found."}</p>
            <p>{"Something that desperately and deeply wants to come home."}</p>
            <p>{"If we can follow the breadcrumbs of our sensations and experience—especially within the safety of a healing relationship or process—we may eventually begin to recognize what is there."}</p>
            <p>{"Oh."}</p>
            <p>{"That’s my anger."}</p>
            <p>{"That’s my passion."}</p>
            <p>{"That’s my desire."}</p>
            <p>{"That’s my Eros."}</p>
            <p>{"That’s my life force."}</p>
            <p>{"Oh, that’s me. There I am."}</p>
            <p>{"And perhaps there is enormous relief in realizing that this part of us was never, in itself, the problem."}</p>
            <p>{"But that isn’t the end of the story."}</p>
            <p>{"Because then life shows us all the places where our wounds and our wildness have become tangled together."}</p>
            <p>{"And so begins the gardening."}</p>
            <p>{"The pruning."}</p>
            <p>{"The tending."}</p>
            <p>{"The detangling."}</p>
            <p>{"Perhaps some of our anger contains vital information while some of the ways we learned to express it need healing."}</p>
            <p>{"Perhaps our intensity contains tremendous life force while also carrying the wound of all the times that intensity threatened our belonging."}</p>
            <p>{"Perhaps our passion needs reclaiming while the fear surrounding that passion needs our compassion."}</p>
            <p>{"This is why I no longer experience healing and reclaiming as two separate roads."}</p>
            <p>{"They move around one another."}</p>
            <p>{"We tend the wound and discover more life."}</p>
            <p>{"We reclaim more life and encounter another wound."}</p>
            <p>{"We tend that wound and discover that still more of ourselves has become available."}</p>
            <p>{"Around and around."}</p>
            <h2 className="display mt-12 text-3xl text-forest">{"Growth, Change, and Becoming"}</h2>
            <p>{"This also changes how I think about growth."}</p>
            <p>{"Growth is not simply making something painful positive."}</p>
            <p>{"And it is not necessarily becoming a shinier, improved version of ourselves after trauma."}</p>
            <p>{"Sometimes positive change is visible: we leave a harmful relationship, establish a boundary, find more supportive community, create differently, love differently, make a different choice."}</p>
            <p>{"Growth can be quieter."}</p>
            <p>{"It may be an expansion of our capacity to remain with ourselves and with life."}</p>
            <p>{"Our capacity to feel without being consumed."}</p>
            <p>{"To love without disappearing."}</p>
            <p>{"To hold complexity."}</p>
            <p>{"To grieve and remain alive."}</p>
            <p>{"To experience our own power without either fearing it or wielding it over another."}</p>
            <p>{"To listen more closely for what is true."}</p>
            <p>{"And perhaps, through all of this, to participate more fully in our own lives."}</p>
            <h2 className="display mt-12 text-3xl text-forest">{"The Garden Keeps Growing"}</h2>
            <p>{"Maybe post-traumatic growth isn’t about getting back to who we were before."}</p>
            <p>{"And maybe it isn’t about leaving our wounded selves behind and becoming somebody better."}</p>
            <p>{"Perhaps it is something more mysterious."}</p>
            <p>{"Healing what needs tending."}</p>
            <p>{"Reclaiming what wants to live."}</p>
            <p>{"Learning to hold more of our own life force with consciousness, reverence, responsibility, and choice."}</p>
            <p>{"And participating in the emergence of a self who is somehow both remembered and becoming."}</p>
            <p>{"The garden grows."}</p>
            <p>{"It moves through seasons and cycles."}</p>
            <p>{"Things bloom."}</p>
            <p>{"Things die back."}</p>
            <p>{"Things need pruning."}</p>
            <p>{"Old roots send up new shoots."}</p>
            <p>{"Something we thought was gone appears again in another form."}</p>
            <p>{"And we get to keep tending and reclaiming."}</p>
            <p>{"What a wild dance this is."}</p>
            <p>{"And yet, dear reader, this sounds much more like a life I want to live than one that has become hardened, calcified, cut off, split off from its own life force."}</p>
            <p>{"Perhaps our work is not to finally arrive at some perfectly healed version of ourselves."}</p>
            <p>{"Perhaps it is to stay close enough to ourselves, and close enough to life, that we can continue asking:"}</p>
            <p>{"What here needs healing?"}</p>
            <p>{"What here needs reclaiming?"}</p>
            <p>{"And what might become possible if I simply stay with myself long enough to hear the difference?"}</p>
          </div>
          <div className="mt-12 rounded-[2rem] bg-forest p-8 text-center text-cream">
            <p className="display text-3xl">This is the work I do. Let&rsquo;s talk.</p>
            <Link className="btn btn-gold mt-6" href="/connect">Begin the conversation</Link>
          </div>
          <p className="mt-10 text-sm leading-7 text-mid">Related reading: <Link className="font-medium text-forest underline decoration-gold underline-offset-4" href="/blog/psychological-flexibility-overlooked-superpower">Psychological Flexibility: An Overlooked Superpower</Link> · <Link className="font-medium text-forest underline decoration-gold underline-offset-4" href="/philosophy">The Philosophy Behind the Work</Link></p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
