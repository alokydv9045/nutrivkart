"use client";
import React from 'react';
import useSWR from 'swr';

const ReferralDetails = () => {
  const { data, error } = useSWR('/api/user/referral', (url) => fetch(url).then(res => res.json()), { refreshInterval: 5000 });

  if (error) return <div className="text-red-500">Failed to load referral info.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-surface-container-low border border-outline-variant/10 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-headline italic font-bold mb-2 text-primary">Your Referral Link</h2>
        <div className="flex items-center gap-2 mb-2">
          <input
            className="bg-surface border border-outline-variant/20 px-2 py-2 rounded w-full text-on-surface outline-none focus:border-primary/50 transition-colors"
            value={data.link}
            readOnly
            onFocus={e => e.target.select()}
          />
          <button
            className="bg-primary text-on-primary font-bold uppercase tracking-widest text-[10px] px-4 py-2 rounded hover:bg-primary-container transition-colors"
            onClick={() => navigator.clipboard.writeText(data.link)}
          >
            Copy
          </button>
        </div>
        <div className="text-secondary opacity-70 text-sm">Share this link to invite friends and earn rewards!</div>
      </div>
      <div className="mb-6 pt-4 border-t border-outline-variant/10">
        <h3 className="font-headline italic font-bold mb-2 text-primary text-lg">Referred Users</h3>
        <ul className="list-disc ml-6 text-on-surface">
          {data.referred.length === 0 && <li className="text-secondary opacity-70 italic">No referrals yet.</li>}
          {data.referred.map((user: any) => (
            <li key={user.id} className="mb-1">
              <span className="font-bold">{user.name}</span> <span className="text-secondary text-xs ml-2">- Joined: {user.joined}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-4 border-t border-outline-variant/10">
        <h3 className="font-headline italic font-bold mb-2 text-primary text-lg">Earned Rewards</h3>
        <ul className="divide-y divide-outline-variant/10">
          {data.rewards.length === 0 && <li>No rewards earned yet.</li>}
          {data.rewards.map((reward: any) => (
            <li key={reward.id} className="py-1 flex justify-between text-sm">
              <span>{reward.description}</span>
              <span className="text-green-600">+{reward.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReferralDetails;
