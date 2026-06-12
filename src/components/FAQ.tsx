const faqs = [
  {
    question: "What is a sweepstakes casino?",
    answer: "A sweepstakes casino is usually a social casino model that uses virtual currencies. Some operators offer promotional sweepstakes entries that may be redeemable under their terms. Always read each operator's rules."
  },
  {
    question: "Do you operate any casino games?",
    answer: "No. This website is an affiliate comparison and educational site. It does not operate casino games, process payments, or offer gambling services."
  },
  {
    question: "Are the rankings paid?",
    answer: "The site may earn commissions from affiliate links, but rankings should be based on your editorial criteria. Keep your criteria transparent and update pages when offers change."
  }
];

export function FAQ() {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <summary className="cursor-pointer text-lg font-black text-slate-950">{faq.question}</summary>
          <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
