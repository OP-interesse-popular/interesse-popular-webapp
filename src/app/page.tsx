export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-[var(--color-background)] px-6">
      <section className="w-full max-w-2xl rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-8 shadow-sm ring-1 ring-[var(--color-outline-variant)] sm:p-12">
        <p className="ip-data text-sm font-medium uppercase tracking-widest text-[var(--color-primary)]">
          Interesse Popular
        </p>
        <h1 className="ip-headline mt-4 text-4xl text-[var(--color-on-surface)] sm:text-5xl">
          Webapp pronta para começar.
        </h1>
        <p className="ip-body mt-4 text-lg text-[var(--color-on-surface-variant)]">
          Esta é a base do frontend em React e Next.js. A primeira página pode
          ser alterada em <code>src/app/page.tsx</code>.
        </p>
      </section>
    </main>
  );
}
