"use client";


import { useState } from 'react';
import Header from '../Components/Header';

const marketData = {
  '24H': {
    price: '$67,842.00',
    change: '+$1,876.40 (2.84%) hoy',
    maximum: '$68,410',
    minimum: '$65,920',
    opening: '$66,020',
    chart: [35, 48, 42, 58, 52, 65, 60, 76, 69, 84, 78, 94],
    labels: ['00:00', '06:00', '12:00', '18:00', 'Ahora'],
  },
  '7D': {
    price: '$67,842.00',
    change: '+$4,218.30 (6.63%) esta semana',
    maximum: '$69,180',
    minimum: '$62,410',
    opening: '$63,623',
    chart: [42, 35, 51, 47, 65, 58, 72, 66, 80, 73, 88, 94],
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Hoy'],
  },
  '30D': {
    price: '$67,842.00',
    change: '+$8,540.60 (14.41%) este mes',
    maximum: '$70,240',
    minimum: '$57,980',
    opening: '$59,301',
    chart: [30, 44, 38, 55, 48, 62, 57, 70, 66, 78, 84, 94],
    labels: ['1 Jun', '8 Jun', '15 Jun', '22 Jun', 'Hoy'],
  },
} as const;

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState<keyof typeof marketData>('24H');
  const [lastUpdated, setLastUpdated] = useState('hace 5 min');
  const currentData = marketData[selectedPeriod];

  const refreshData = () => {
    setLastUpdated('justo ahora');
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8] pt-20 text-slate-900">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">Mi mercado</p>
            <h1 className="text-3xl font-semibold tracking-tight">Bitcoin hoy</h1>
            <p className="mt-1 text-sm text-slate-500">Una mirada rápida al precio y al movimiento del día.</p>
          </div>
          <div className="flex items-center gap-3 self-start text-xs text-slate-500 sm:self-auto">
            <span><span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />Actualizado {lastUpdated}</span>
            <button onClick={refreshData} className="flex items-center gap-2 rounded border border-slate-300 bg-white px-3 py-1.5 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100" type="button">
              <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 11a8.1 8.1 0 0 0-14.8-4L3 10" /><path d="M3 4v6h6" /><path d="M4 13a8.1 8.1 0 0 0 14.8 4L21 14" /><path d="M21 20v-6h-6" /></svg>
              Actualizar
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.45fr_0.8fr]">
          <section className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col justify-between gap-5 border-b border-slate-100 p-6 sm:flex-row sm:items-start">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <img src="/bitcoin.svg" alt="Bitcoin" className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-semibold">Bitcoin</h2>
                    <p className="text-xs text-slate-500">BTC / USD</p>
                  </div>
                </div>
                <p className="mt-7 text-4xl font-semibold tracking-tight">{currentData.price}</p>
                <p className="mt-2 text-sm text-emerald-600">{currentData.change}</p>
              </div>
              <div className="flex gap-1 rounded-md bg-slate-100 p-1 text-xs">
                {(Object.keys(marketData) as Array<keyof typeof marketData>).map((period) => (
                  <button key={period} type="button" aria-pressed={selectedPeriod === period} onClick={() => setSelectedPeriod(period)} className={selectedPeriod === period ? 'rounded bg-white px-3 py-1.5 font-medium shadow-sm' : 'px-3 py-1.5 text-slate-500 transition hover:text-slate-900'}>{period}</button>
                ))}
              </div>
            </div>
            <div className="flex h-48 items-end gap-2 px-6 pt-6">
              {currentData.chart.map((height, index) => (
                <div key={index} className="flex-1 rounded-t bg-emerald-500/80 transition hover:bg-emerald-600" style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="flex justify-between px-6 pb-5 pt-3 text-xs text-slate-400">
              {currentData.labels.map((label) => <span key={label}>{label}</span>)}
            </div>
          </section>

          <section className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 font-semibold"><svg aria-hidden="true" className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19V5m0 14h16" /><path d="m7 15 3-4 3 2 5-7" /></svg>Resumen del día</h2>
            <div className="mt-5 space-y-5">
              <div className="flex justify-between border-b border-slate-100 pb-4 text-sm"><span className="text-slate-500">Máximo</span><span className="font-medium">{currentData.maximum}</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-4 text-sm"><span className="text-slate-500">Mínimo</span><span className="font-medium">{currentData.minimum}</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-4 text-sm"><span className="text-slate-500">Apertura</span><span className="font-medium">{currentData.opening}</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-4 text-sm"><span className="text-slate-500">Volumen</span><span className="font-medium">$38.6 B</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Capitalización</span><span className="font-medium">$1.34 T</span></div>
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-md border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
            <div><h2 className="flex items-center gap-2 font-semibold"><svg aria-hidden="true" className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h4l2-7 4 14 2-7h6" /></svg>También puede interesarte</h2><p className="mt-1 text-xs text-slate-500">Otras referencias del mercado</p></div>
            <span className="text-xs text-slate-400">USD</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-slate-50 text-xs font-medium text-slate-500"><tr><th className="px-6 py-3">Activo</th><th className="px-6 py-3">Precio</th><th className="px-6 py-3">24 horas</th><th className="px-6 py-3">Estado</th></tr></thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="transition hover:bg-slate-50"><td className="px-6 py-4 font-medium">Ethereum <span className="ml-1 text-xs font-normal text-slate-400">ETH</span></td><td className="px-6 py-4">$3,520.18</td><td className="px-6 py-4 text-emerald-600">+1.46%</td><td className="px-6 py-4"><span className="rounded bg-emerald-50 px-2 py-1 text-xs text-emerald-700">Al alza</span></td></tr>
                <tr className="transition hover:bg-slate-50"><td className="px-6 py-4 font-medium">Solana <span className="ml-1 text-xs font-normal text-slate-400">SOL</span></td><td className="px-6 py-4">$148.72</td><td className="px-6 py-4 text-rose-600">-0.38%</td><td className="px-6 py-4"><span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">Estable</span></td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
