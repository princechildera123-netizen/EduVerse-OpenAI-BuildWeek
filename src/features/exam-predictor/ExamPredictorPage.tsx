import { useMemo, useState } from 'react';
import { Card } from '../../components/ui/Card';
import { DetailCard, PredictionSummary, TopicList } from './components/PredictionCards';
import { predictions } from './data/predictions';

export function ExamPredictorPage() {
  const [subject, setSubject] = useState(predictions[0].subject);
  const prediction = useMemo(() => predictions.find((item) => item.subject === subject) ?? predictions[0], [subject]);
  return <div className="py-8 sm:py-12"><section className="rounded-[2rem] bg-white/80 p-6 shadow-xl shadow-slate-200/60"><p className="text-sm font-semibold text-brand">AI Exam Predictor</p><div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="text-4xl font-black text-ink">Predict readiness before test day.</h1><p className="mt-3 max-w-2xl text-muted">Placeholder prediction data explains every score with why, evidence, and recommended action.</p></div><label className="grid gap-2 text-sm font-bold text-ink">Subject<select className="focus-ring min-h-12 rounded-2xl border border-slate-200 bg-white px-4" value={subject} onChange={(event) => setSubject(event.target.value)}>{predictions.map((item) => <option key={item.subject}>{item.subject}</option>)}</select></label></div></section><div className="mt-6 grid gap-6"><PredictionSummary prediction={prediction} /><div className="grid gap-6 lg:grid-cols-2"><TopicList title="Weak topics" topics={prediction.weakTopics} tone="weak" /><TopicList title="Strong topics" topics={prediction.strongTopics} tone="strong" /></div><Card><h2 className="text-2xl font-black text-ink">Prediction rationale</h2><div className="mt-5 grid gap-4 lg:grid-cols-2">{Object.entries(prediction.details).map(([key, detail]) => <DetailCard key={key} title={`${key[0].toUpperCase()}${key.slice(1)} insight`} detail={detail} />)}</div></Card></div></div>;
}
