import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { ChatBubble, InsightPanel, ThinkingAnimation } from './components/LearningTwinComponents';
import { useLearningTwin } from './hooks/useLearningTwin';

export function LearningTwinPage() {
  const [prompt, setPrompt] = useState('');
  const { insights, messages, isThinking, suggestedPrompts, sendMessage } = useLearningTwin();
  async function submit(value = prompt) { if (!value.trim()) return; setPrompt(''); await sendMessage(value.trim()); }
  return <div className="grid gap-6 py-8 lg:grid-cols-[1fr_22rem]"><section className="grid min-h-[70vh] rounded-[2rem] bg-white/75 p-4 shadow-xl shadow-slate-200/60 sm:p-6"><div><p className="text-sm font-semibold text-brand">Learning Twin AI</p><h1 className="mt-2 text-4xl font-black text-ink">Your personal learning companion.</h1><p className="mt-3 text-muted">Mock provider architecture keeps the AI layer abstract for future backend/OpenAI integration.</p></div><div className="my-6 grid content-start gap-3 rounded-3xl bg-slate-50 p-4" aria-live="polite">{messages.length === 0 ? <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-muted"><strong className="block text-ink">Start a conversation</strong>Ask for a study plan, explanation, or review strategy.</div> : messages.map((message) => <ChatBubble key={message.id} message={message} />)}{isThinking && <ThinkingAnimation />}</div><div className="grid gap-3"><div className="flex flex-wrap gap-2">{suggestedPrompts.map((item) => <button key={item} type="button" onClick={() => void submit(item)} className="focus-ring rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">{item}</button>)}</div><form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => { event.preventDefault(); void submit(); }}><input className="focus-ring min-h-12 flex-1 rounded-full border border-slate-200 px-5" value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="Ask your Learning Twin..." aria-label="Message Learning Twin" /><Button type="submit">Send</Button></form></div></section><Card>{insights ? <InsightPanel insights={insights} /> : <ThinkingAnimation />}</Card></div>;
}
