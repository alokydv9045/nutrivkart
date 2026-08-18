"use client";
import React from 'react';
import useSWR from 'swr';
import { formatNumber } from '@/lib/utils';

const LoyaltyDetails = () => {
  const { data, error } = useSWR('/api/user/loyalty', (url) => fetch(url).then(res => res.json()), { refreshInterval: 5000 });

  if (error) return <div className="text-red-500">Failed to load loyalty info.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-surface-container-low border border-outline-variant/10 rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-headline italic font-bold mb-2 text-primary">Your Points</h2>
        <div className="text-3xl font-bold text-on-surface">{formatNumber(data.points)}</div>
        <div className="text-secondary opacity-80 text-[10px] font-bold uppercase tracking-widest mt-1">Tier: <span className="text-primary">{data.tier}</span></div>
      </div>
      <div className="mb-6 pt-4 border-t border-outline-variant/10">
        <h3 className="font-headline italic font-bold mb-3 text-primary text-lg">Available Rewards</h3>
        <ul className="list-disc ml-6 text-on-surface">
          {data.rewards.length === 0 && <li className="text-secondary opacity-70 italic">No rewards available.</li>}
          {data.rewards.map((reward: any) => (
            <li key={reward.id} className="mb-2">
              <span className="font-bold">{reward.name}</span> <span className="text-secondary text-xs ml-1">- {reward.points} pts</span>
              {reward.redeemable && <button className="ml-3 px-3 py-1 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-on-primary rounded text-[10px] font-bold uppercase tracking-widest transition-colors">Redeem</button>}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-4 border-t border-outline-variant/10">
        <h3 className="font-headline italic font-bold mb-2 text-primary text-lg">Points History</h3>
        <ul className="divide-y divide-outline-variant/10">
          {data.history.length === 0 && <li className="py-2 text-secondary opacity-70 italic">No history yet.</li>}
          {data.history.map((entry: any) => (
            <li key={entry.id} className="py-1 flex justify-between text-sm">
              <span>{entry.description}</span>
              <span className={entry.points > 0 ? 'text-green-600' : 'text-red-600'}>
                {entry.points > 0 ? '+' : ''}{entry.points}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoyaltyDetails;
