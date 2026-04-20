import { useEffect, useState } from 'react';

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

function getNextTick(time: TimeLeft): TimeLeft {
  let { hours, minutes, seconds } = time;
  seconds -= 1;

  if (seconds < 0) {
    seconds = 59;
    minutes -= 1;
  }

  if (minutes < 0) {
    minutes = 59;
    hours -= 1;
  }

  if (hours < 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  return { hours, minutes, seconds };
}

export default function TopTimerBar() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 30, seconds: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => getNextTick(prev));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Ativa o efeito flutuante extra após rolar 40px
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-red-700/90 shadow-2xl shadow-red-900/40 backdrop-blur-md'
          : 'bg-red-700 shadow-none'
      }`}
      style={{ borderBottom: '2px solid white' }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-left">
          <span className="font-mono-highlight text-xs font-bold tracking-[0.14em] text-white uppercase sm:text-sm">
            Esta oferta expira en:
          </span>
          <div className="flex items-center gap-2">
            {[timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((value, index) => (
              <div key={index} className="rounded-md bg-black/30 px-2 py-1 shadow-inner sm:px-3">
                <span className="font-mono-highlight text-base font-extrabold text-white sm:text-lg">
                  {String(value).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>

        <a
          href="https://hotm.io/codigodivino-psa"
          className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg bg-green-500 px-4 py-2 font-body text-xs font-extrabold tracking-wide text-white uppercase shadow-lg transition hover:bg-green-400 hover:shadow-green-500/50 sm:px-6 sm:text-sm"
        >
          ¡QUIERO MI CÓDIGO DIVINO!
        </a>
      </div>
    </header>
  );
}
