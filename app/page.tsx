'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-retro-dark/90 border-b-4 border-retro-yellow z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="neon-text text-2xl">▶ TETRIS</div>
          <div className="flex gap-6 text-sm">
            <a href="#game" className="hover:text-retro-yellow transition">GAME</a>
            <a href="#token" className="hover:text-retro-yellow transition">TOKEN</a>
            <a href="#play" className="hover:text-retro-yellow transition">PLAY</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 ">
          <div className="absolute top-20 left-10 text-6xl animate-float">🟨</div>
          <div className="absolute top-40 right-20 text-6xl animate-float" style={{ animationDelay: '0.5s' }}>🟧</div>
          <div className="absolute bottom-20 left-20 text-6xl animate-float" style={{ animationDelay: '1s' }}>🟨</div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="neon-text text-6xl md:text-8xl font-retro mb-6 animate-blink">
            TETRIS
          </h1>
          <p className="text-2xl md:text-4xl text-retro-yellow font-mono mb-8">
            The Classic Game on Solana Blockchain
          </p>
          <p className="text-lg md:text-xl text-retro-light mb-12 font-mono max-w-2xl mx-auto">
            Drop blocks, clear lines, and earn TETRIS tokens. Play the retro game you love with blockchain rewards.
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="btn-retro">
              ▶ PLAY NOW
            </button>
            <button className="btn-retro bg-retro-orange">
              ★ BUY TETRIS
            </button>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section id="game" className="py-20 px-4 bg-retro-dark/50 border-y-4 border-retro-orange bg-blue-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="neon-text text-4xl font-retro mb-16 text-center">GAME FEATURES</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-retro transform hover:scale-105 transition">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="font-retro text-retro-dark mb-3">CLASSIC GAMEPLAY</h3>
              <p className="text-retro-dark">The timeless TETRIS experience you love, now on blockchain with modern graphics.</p>
            </div>

            {/* Feature 2 */}
            <div className="card-retro transform hover:scale-105 transition">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-retro text-retro-dark mb-3">EARN REWARDS</h3>
              <p className="text-retro-dark">Clear lines and complete games to earn TETRIS tokens. Compete on global leaderboards.</p>
            </div>

            {/* Feature 3 */}
            <div className="card-retro transform hover:scale-105 transition">
              <div className="text-5xl mb-4">⛓️</div>
              <h3 className="font-retro text-retro-dark mb-3">ON SOLANA</h3>
              <p className="text-retro-dark">Fast, low-cost transactions powered by Solana blockchain. Instant score submissions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="neon-text text-4xl font-retro mb-16 text-center">TETRIS TOKEN</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="text-8xl mb-8 animate-float">🟨</div>
              <div className="text-3xl font-retro text-retro-yellow">TETRIS</div>
            </div>

            <div className="space-y-6">
              <div className="card-retro">
                <h3 className="font-retro text-retro-dark text-lg mb-2">Token Address</h3>
                <p className="text-retro-dark font-mono text-sm break-all">TETRIS.sol</p>
              </div>

              <div className="card-retro">
                <h3 className="font-retro text-retro-dark text-lg mb-2">Total Supply</h3>
                <p className="text-retro-dark text-2xl font-retro">1,000,000,000</p>
              </div>

              <div className="card-retro">
                <h3 className="font-retro text-retro-dark text-lg mb-2">Network</h3>
                <p className="text-retro-dark text-xl">Solana Mainnet</p>
              </div>

              <button className="btn-retro w-full">
                ★ VIEW ON Raydium ★
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section id="play" className="py-20 px-4 bg-retro-dark/50 border-t-4 border-retro-yellow bg-red-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="neon-text text-4xl font-retro mb-16 text-center">HOW TO PLAY</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'CONNECT', desc: 'Link your Solana wallet or play as guest' },
              { num: '2', title: 'PLAY', desc: 'Drop blocks and clear lines' },
              { num: '3', title: 'SCORE', desc: 'Climb the global leaderboard' },
              { num: '4', title: 'EARN', desc: 'Get TETRIS token rewards' },
            ].map((step) => (
              <div key={step.num} className="card-retro text-center">
                <div className="text-6xl font-retro text-retro-orange mb-4">{step.num}</div>
                <h3 className="font-retro text-retro-dark mb-2">{step.title}</h3>
                <p className="text-retro-dark text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="card-retro">
              <div className="text-6xl font-retro text-retro-orange mb-4">∞</div>
              <p className="font-retro text-retro-dark">PLAYERS</p>
            </div>
            <div className="card-retro">
              <div className="text-6xl font-retro text-retro-yellow mb-4">🎯</div>
              <p className="font-retro text-retro-dark">COMPETITIVE</p>
            </div>
            <div className="card-retro">
              <div className="text-6xl font-retro text-retro-orange mb-4">⚡</div>
              <p className="font-retro text-retro-dark">INSTANT REWARDS</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-retro-yellow/10 to-retro-orange/10 border-y-4 border-retro-orange bg-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="neon-text text-4xl font-retro mb-8">
            READY TO PLAY?
          </h2>
          <p className="text-xl font-mono mb-12">
            Join thousands of players in the ultimate retro gaming experience on Solana
          </p>
          <button className="btn-retro text-lg">
            ▶▶ START PLAYING NOW ▶▶
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-retro-dark border-t-4 border-retro-yellow py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-sm font-mono space-y-4">
            <p className="text-retro-yellow">TETRIS on Solana</p>
            {/* <p>© 2024 All Rights Reserved | Built on Solana Blockchain</p> */}
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-retro-yellow transition">Discord</a>
              <a href="#" className="hover:text-retro-yellow transition">Twitter</a>
              <a href="#" className="hover:text-retro-yellow transition">Telegram</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
