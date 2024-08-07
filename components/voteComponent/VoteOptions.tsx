"use client";

export default function PollOptions({
  options,
  votes = [],
  vote,
  setVote,
}: {
  options: string[];
  votes: number[];
  vote: number | null;
  setVote: (option: number) => void;
}) {
  const totalVotes = votes.length > 0 ? votes.reduce((a, b) => a + b, 0) : 0;
  const mostVotes = votes.length > 0 ? Math.max(...votes) : 0;

  return (
    <ul className="flex flex-col space-y-4">
      {options.map((option, index) => (
        <li key={index}>
          <div className="relative w-full min-h-[40px] border rounded-md border-black flex">
            <div
              className={`absolute top-0 left-0 bottom-0 w-full rounded-md transition-all duration-500 z-10 ${
                votes[index] === mostVotes
                  ? "vote-bg-winning"
                  : vote === index
                  ? "vote-bg-own"
                  : "vote-bg"
              }`}
              style={{
                width: `${totalVotes > 0 ? ((votes[index] ?? 0) / totalVotes) * 100 : 0}%`
              }}
            />
            <div className="select-none w-full flex items-center justify-between px-4 z-20">
              <button
                className={`flex flex-1 text-left py-2 ${
                  vote === null ? "cursor-pointer" : "cursor-default"
                } ${
                  vote === null ? "" : votes[index] === mostVotes ? "font-bold" : ""
                }`}
                disabled={vote !== null}
                onClick={() => setVote(index)}
              >
                {option}
              </button>
              {vote !== null ? <span>{votes[index] ?? 0}</span> : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
