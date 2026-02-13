import { useRef, useState } from 'react'
import './App.css'

const UNLOCK_AUDIO_SRC = '/background.mp3'
import blessing1 from './assets/blessing-1.png'
import blessing2 from './assets/blessing-2.png'
import blessing3 from './assets/blessing-3.png'
import videoCall1 from './assets/video-call-1.png'
import videoCall2 from './assets/video-call-2.png'
import funnyFilterCall from './assets/funny-filter-call.png'
import oldPassport from './assets/old-passport.png'
import bedtimeCall1 from './assets/bedtime-call-1.png'
import deskCall from './assets/desk-call.png'
import bedtimeCall2 from './assets/bedtime-call-2.png'
import collageUs from './assets/collage-us.png'
import churchDress1 from './assets/church-dress-1.png'
import carSelfie1 from './assets/car-selfie-1.png'
import campusWalk1 from './assets/campus-walk-1.png'
import campusWalk2 from './assets/campus-walk-2.png'
import firstMeetup from './assets/first-meetup.png'
import funnyPicOfMe from './assets/funny-pic-of-me.png'
import blackDress2 from './assets/black-dress-2.png'
import angryFace from './assets/angry-face.png'
import coupleRestaurant from './assets/couple-restaurant.png'
import coupleSelfie1 from './assets/couple-selfie-1.png'
import coupleMirror from './assets/couple-mirror.png'
import coupleLockscreen from './assets/couple-lockscreen.png'
import coupleOutdoor1 from './assets/couple-outdoor-1.png'
import coupleOutdoor2 from './assets/couple-outdoor-2.png'
import coupleOutdoor3 from './assets/couple-outdoor-3.png'

function App() {
  const [petNameInput, setPetNameInput] = useState('')
  const [isAllowed, setIsAllowed] = useState(false)
  const [hasTried, setHasTried] = useState(false)
  const [showTraits, setShowTraits] = useState(false)
  const audioRef = useRef(null)

  // You can tweak this text if you want to update the time together later
  const timeTogether = '2 years and 3 months'

  const memories = [
    {
      year: 2023,
      title: 'How it all began',
      description:
        'The year our story really started — from random chats to intentional calls, and from “hi” to “you mean a lot to me”.',
    },
    {
      year: 2024,
      title: 'Learning love',
      description:
        'We didn’t just love each other, we learned each other — your moods, your silences, your smiles.',
    },
    {
      year: 2025,
      title: 'Us against the world',
      description:
        'Through misunderstandings and arguments, we always found our way back. Because “us” is worth fighting for.',
    },
  ]

  const qa = [
    {
      question: 'When did I first know you were special?',
      answer:
        'The moment I realized I could tell you anything and still feel safe, seen, and deeply understood.',
    },
    {
      question: 'What is my favorite thing about you?',
      answer:
        'Your heart. The way you care, even when you pretend you don’t. Your kindness sneaks out in every small action.',
    },
    {
      question: 'What do our arguments mean to me?',
      answer:
        'They mean we care enough to be honest, to disagree, to come back and choose each other again.',
    },
    {
      question: 'What is one promise I’m making to you?',
      answer:
        'To keep learning you, to listen better, to love you loudly on good days and gently on hard days.',
    },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    const cleaned = petNameInput.trim().toLowerCase()
    setHasTried(true)
    if (cleaned === 'eni') {
      const el = audioRef.current
      if (el) {
        el.volume = 1
        el.currentTime = 0
        const p = el.play()
        if (p && typeof p.then === 'function') p.catch(() => {})
      }
      setIsAllowed(true)
    }
  }

  return (
    <div className="page">
      <audio
        ref={audioRef}
        src={UNLOCK_AUDIO_SRC}
        preload="auto"
        style={{ display: 'none' }}
      />
      {!isAllowed && (
        <div className="gate-overlay">
          <div className="gate-card">
            <p className="gate-tag">Private love page</p>
            <h2>What pet name do I call you?</h2>
            <p className="gate-text">
              Hint: the short, sweet name I call you — it starts with &quot;e&quot;.
            </p>
            <form className="gate-form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={petNameInput}
                onChange={(e) => setPetNameInput(e.target.value)}
                placeholder="Type the pet name here..."
                className="gate-input"
                autoFocus
              />
              <button type="submit" className="gate-button">
                Unlock
              </button>
            </form>
            {hasTried && !isAllowed && (
              <>
                <p className="gate-error">
                  That&apos;s not the one I had in mind. Think of the pet name I use when I say,
                  &quot;Eni, I miss you.&quot;
                </p>
                <img src={angryFace} alt="My mock angry face" className="gate-angry" />
              </>
            )}
          </div>
        </div>
      )}

      <header className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-tag">For my love</p>
          <h1>A love letter to Akinola Blessing</h1>
          <p className="hero-subtitle">
            {timeTogether} of memories, arguments, laughter, late-night calls, and love all with
            you.
          </p>
        </div>
      </header>

      <main className="content">
        <button
          type="button"
          className="floating-traits-button"
          onClick={() => setShowTraits(true)}
        >
          Click to know things about you
        </button>
        <section className="section">
          <h2>Still at university, still in love</h2>
          <p className="section-intro">
            From looking &quot;ugly&quot; on campus to dressing up just for me, these are the
            versions of you that I adore.
          </p>
          <div className="gallery-grid">
            <figure className="gallery-card">
              <img src={oldPassport} alt="An old simple photo of Blessing" />
              <figcaption>Before you started calling yourself stubborn girl, you were already cute.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={campusWalk1} alt="Blessing walking on campus" />
              <figcaption>
                You say you look rough here. I see the girl I&apos;m proud to walk beside.
              </figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={campusWalk2} alt="Another campus photo of Blessing" />
              <figcaption>Same &quot;ugly&quot; you, same person I can&apos;t stop choosing.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={blessing1} alt="Blessing smiling in the sun" />
              <figcaption>That sunshine smile I fall for every single time.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={blessing2} alt="Blessing standing and laughing in front of a building" />
              <figcaption>Baby girl outside, main character energy everywhere.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={blessing3} alt="Blessing posing near rocks" />
              <figcaption>Even the rocks had to agree: you&apos;re stunning.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={blackDress2} alt="Blessing in a black dress" />
              <figcaption>Looking way too fine to just be &quot;my friend&quot;.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={churchDress1} alt="Blessing in a floral dress" />
              <figcaption>Sunday best or everyday fine girl? I still can&apos;t tell.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section">
          <h2>Our calls, our chaos</h2>
          <p className="section-intro">
            The late-night gist, sleepy faces, and crazy filters that kept us close even when we
            were far apart.
          </p>
          <div className="gallery-grid">
            <figure className="gallery-card">
              <img src={videoCall1} alt="Us on a video call together" />
              <figcaption>Two tired students, one safe place.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={videoCall2} alt="Blessing on another video call" />
              <figcaption>Your sleepy face on my screen is still one of my favorite views.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={bedtimeCall1} alt="Blessing lying on the bed on a call" />
              <figcaption>Sweet bedtime calls that somehow made the day feel complete.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={bedtimeCall2} alt="Blessing wrapped in a blanket on a call" />
              <figcaption>Even when you&apos;re moody and quiet, I&apos;m just glad you&apos;re there.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={deskCall} alt="Blessing on a call at a desk" />
              <figcaption>Reading table, but the real distraction is your smile.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={funnyFilterCall} alt="A funny filter video call" />
              <figcaption>
                When the filter is unserious but we are seriously happy to see each other.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section">
          <h2>Us together</h2>
          <p className="section-intro">
            The rides, first meetups after school, and quiet moments that remind me I&apos;m not
            doing life alone.
          </p>
          <div className="gallery-grid">
            <figure className="gallery-card">
              <img src={carSelfie1} alt="Blessing on a car selfie" />
              <figcaption>You looking babyish, me acting like I&apos;m not obsessed.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={collageUs} alt="Collage of both of us" />
              <figcaption>Two different pictures, one team.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={firstMeetup} alt="First meetup after school" />
              <figcaption>First meetup after school nerves high, love higher.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={funnyPicOfMe} alt="A funny picture of me you like" />
              <figcaption>The funny pic of you.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section">
          <h2>More of us</h2>
          <p className="section-intro">
            Date vibes, mirror selfies, and every moment we decided to capture together.
          </p>
          <div className="gallery-grid">
            <figure className="gallery-card">
              <img src={coupleRestaurant} alt="Us at a restaurant or cafe" />
              <figcaption>Date night — you in that black dress, me trying to play it cool.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={coupleSelfie1} alt="Close-up selfie of us" />
              <figcaption>That smile and that kissy face. Still my favorite duo.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={coupleMirror} alt="Mirror selfie together" />
              <figcaption>Mirror selfie season. You and the cats shirt, me and the bonnet.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={coupleLockscreen} alt="Us on a lockscreen" />
              <figcaption>When you made us the lockscreen. I still smile every time.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={coupleOutdoor1} alt="Us outdoors" />
              <figcaption>Outdoor vibes — you in teal, me in stripes. Just us.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={coupleOutdoor2} alt="Us outside with hijab and jacket" />
              <figcaption>You in your hijab and florals, me in the beige jacket. Our era.</figcaption>
            </figure>
            <figure className="gallery-card">
              <img src={coupleOutdoor3} alt="Us outside in the sun" />
              <figcaption>Same day, same us. Sun, grass, and your arm around me.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section">
          <h2>Our story in moments</h2>
          <p className="section-intro">
            These are just a few of the countless memories that make loving you one of the best
            decisions of my life.
          </p>
          <div className="timeline">
            {memories.map((memory) => (
              <article key={memory.year} className="timeline-card">
                <div className="timeline-year">{memory.year}</div>
                <h3>{memory.title}</h3>
                <p>{memory.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Questions only we understand</h2>
          <p className="section-intro">
            Every answer here is a small window into how deeply I care about you.
          </p>
          <div className="qa-grid">
            {qa.map((item, index) => (
              <details key={index} className="qa-card">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section section-note">
          <h2>A small note to you</h2>
          <p>
            Blessing, thank you for being my safe place, my headache, my peace, my favorite human.
            We&apos;ve had our ups and downs, our arguments and our happiest times, but through it
            all, one thing has stayed the same: I still choose you.
          </p>
          <p>
            This little app is just a tiny way to say what my words sometimes fail to express I
            appreciate you, I am proud of us, and I want many more years of memories with you.
          </p>
          <p className="signature">With love, always. 💌</p>
        </section>
      </main>

      {showTraits && (
        <div className="traits-overlay">
          <button
            type="button"
            className="traits-close"
            onClick={() => setShowTraits(false)}
            aria-label="Close things about you"
          >
            ×
          </button>
          <div className="traits-content">
            <h2>Things about you</h2>
            <p>All the little words that make up the big person I love.</p>
            <div className="traits-cloud">
              {[
                'Pretty',
                'Stubborn',
                'Sexy',
                'Soft-hearted',
                'Playful',
                'Smart',
                'Prayerful',
                'Overthinking',
                'Goofy',
                'Caring',
                'Intentional',
                'My peace',
                'Gentle',
                'Chaotic',
                'Sweet',
                'Baby girl',
                'Talkative',
                'Quiet storm',
                'Soft smile',
                'Strong',
                'Emotional',
                'Funny',
                'Jealous',
                'Protective',
                'Best friend',
                'Safe space',
                'Honest',
                'Blunt',
                'Over-lover',
                'Forgiving',
                'Petty (small)',
                'Tender',
                'Warm',
                'Beautiful',
                'Gorgeous',
                'Confusing',
                'Addictive',
                'Bright',
                'Sunshine',
                'Moonlight',
                'Deep thinker',
                'Supportive',
                'Encouraging',
                'Soft voice',
                'Hard head',
                'Strong will',
                'Day one',
                'Favorite person',
                'Tiny trouble',
                'Unserious',
                'Serious',
                'Hardworking',
                'Focused',
                'Distracting',
                'Fine girl',
                'Energy giver',
                'Kind',
                'Sensitive',
                'Loving',
                'Cute frown',
                'Stress',
                'My stress',
                'My joy',
                'Laugh partner',
                'Lecture buddy',
                'Late texter',
                'Voice note queen',
                'Babyish',
                'Soft skin',
                'Bright eyes',
                'Prayer partner',
                'Complainer',
                'Teaser',
                'Teardrop',
                'Drama',
                'Innocent',
                'Not innocent',
                'Soft hug',
                'Eye roller',
                'Secret keeper',
                'Home',
                'Favorite call',
                'Overthinking queen',
                'Sweet headache',
                'My person',
                'Fine in black',
                'Fine in blue',
                'Campus crush',
                'Baby in church dress',
                'My stubborn blessing',
                'Sweetheart',
                'Partner',
                'Peace',
                'Comfort',
                'My one',
                'Answer to prayer',
                'Whole world',
                'Girl of my youth',
                'Future gist partner',
                'Always worth it',
              ].map((word, index) => (
                <span
                  key={word}
                  className={`trait-bubble trait-bubble-${(index % 6) + 1}`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
