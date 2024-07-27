#!/bin/bash

echo "Installing dependencies..."
npm install

echo "Starting PartyKit..."
npx partykit dev > partykit.log 2>&1 &
PARTYKIT_PID=$!
echo "PartyKit PID: $PARTYKIT_PID"

echo "Starting Next.js development server..."
npm run dev > nextjs.log 2>&1 &
NEXTJS_PID=$!
echo "Next.js PID: $NEXTJS_PID"

echo "Running ollama llama3..."
ollama run llama3 > llama3.log 2>&1 &
LLAMA3_PID=$!
echo "ollama llama3 PID: $LLAMA3_PID"

# Function to handle termination signals
terminate() {
  echo "Terminating PartyKit and Next.js servers..."
  kill $PARTYKIT_PID 2>/dev/null
  echo "PartyKit terminated"
  kill $NEXTJS_PID 2>/dev/null
  echo "Next.js terminated"
  echo "ollama llama3 will not be terminated"
  exit 0
}

# Trap termination signals and call the terminate function
trap terminate SIGINT SIGTERM

# Wait for the PartyKit and Next.js processes to complete
wait $PARTYKIT_PID
wait $NEXTJS_PID

# Ensure ollama llama3 keeps running
wait $LLAMA3_PID
