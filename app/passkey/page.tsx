import React from "react";
import { H1, H2, H3, P, Blockquote, List } from "@/components/Typography";
import Login from "@/components/Login";

export default function PasskeyBlog() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-12">
        <H1>Understanding Passkeys: The Future of Authentication</H1>
        <P>
          Let's explore what passkeys are and why they're quickly becoming the
          safest and easiest way to sign in online.
        </P>
      </header>

      <article className="prose prose-lg max-w-none">
        <section className="mb-12">
          <H2>What Are Passkeys?</H2>
          <P>
            Behind the scenes, your device creates a unique digital key that's
            tied only to that website or app. One part of the key stays safely
            stored on your device, while the other is shared with the website to
            recognize you next time. No passwords to remember, and nothing
            hackers can steal or reuse.
          </P>
          <Blockquote>
            "Passkeys make signing in simple — and far more secure — by
            replacing passwords with built-in trust between your device and the
            website."
          </Blockquote>
        </section>

        <section className="mb-12">
          <H2>How Do You Use a Passkey?</H2>
          <P>
            Using a passkey feels natural — there's no learning curve. Here's
            how it works:
          </P>
          <ol className="list-decimal list-inside mb-6 space-y-2">
            <li>
              <strong>Turn on passkeys:</strong> On iPhone, iPad, or Mac,
              they're built into iCloud Keychain. On Android, they're part of
              Google Password Manager.
            </li>
            <li>
              <strong>Create a passkey:</strong> When a website offers "Use a
              passkey," choose that instead of entering a password. Your device
              handles the setup automatically.
            </li>
            <li>
              <strong>Sign in easily:</strong> Next time you visit, just use
              Face ID, Touch ID, or your device PIN — no password needed.
            </li>
            <li>
              <strong>Use it anywhere:</strong> Passkeys can sync across your
              devices, so logging in on your phone or laptop works the same way.
            </li>
          </ol>
          <P>
            Once you try it, you'll wonder why passwords ever existed — logging
            in becomes quick, smooth, and stress-free.
          </P>
          <p>Demo</p>
          <Login />
        </section>

        <section className="mb-12">
          <H2>Why Choose Passkeys?</H2>
          <P>
            Passkeys combine the best of both worlds — effortless convenience
            and strong security:
          </P>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="glass-card p-6 rounded-lg">
              <H3>Safer by Design</H3>
              <P>
                Passkeys can't be stolen or guessed. Even if someone sends you a
                fake link, your passkey won't work on the wrong website.
              </P>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <H3>Effortless Login</H3>
              <P>
                Forget passwords and recovery codes — just tap your fingerprint
                or look at your screen to sign in securely.
              </P>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <H3>Phishing-Proof</H3>
              <P>
                Each passkey is unique to one site, so scammers can't reuse your
                details anywhere else.
              </P>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <H3>Built for the Future</H3>
              <P>
                Apple, Google, and Microsoft already support passkeys — meaning
                this is the direction the whole internet is moving toward.
              </P>
            </div>
          </div>

          <P>
            Since most data breaches come from stolen passwords, passkeys could
            drastically reduce online scams and identity theft in the coming
            years.
          </P>
        </section>

        <section className="mb-12">
          <H2>Where You Can Use Passkeys Today</H2>
          <P>Many major services already let you log in with passkeys:</P>
          <List>
            <li>Google Accounts</li>
            <li>Apple ID</li>
            <li>Microsoft Accounts</li>
            <li>GitHub</li>
            <li>PayPal and more</li>
          </List>
          <P>
            When you see a "Use a Passkey" option during sign-in, try it. You'll
            experience faster, safer access — no passwords, no hassle.
          </P>
        </section>

        <section className="p-8 rounded-lg glass-card">
          <H2>The Bottom Line</H2>
          <P>
            Passkeys are redefining how we log in — offering security that even
            the strongest passwords can't match, and convenience that feels like
            magic. As more websites adopt them, logging in online will finally
            become simple, secure, and stress-free.
          </P>
          <P>
            Whether you shop online, use social media, or run a small business,
            now's the perfect time to start using passkeys and take control of
            your digital safety.
          </P>
        </section>
      </article>

      <footer className="text-center mt-12 text-gray-500">
        <P>Published on October 12, 2025</P>
      </footer>
    </div>
  );
}
