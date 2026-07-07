// =============================================================================
// fakeApi.js  —  a pretend server that lives in your file.
//
// Everything here is async and returns DB-shaped rows ({ id, ...fields }) ON
// PURPOSE. In the Node course you delete this file and point app.js at a real
// server; because these functions already return promises, app.js won't change.
// The interesting bugs live in the gap between your copy of the data and the
// server's copy — this file is the "server's copy".
// =============================================================================

const LATENCY_MS = 280; // a visible delay, so "not here yet" is a real state

// The server's private store. app.js never touches this directly — it can only
// ask through the functions below, and it only ever receives COPIES (see clone).
let rows = [
  { id: 1, company: "Northwind Traders", value: 12000, stage: "Lead",     owner: "Jordan Lee" },
  { id: 2, company: "Globex",            value: 4500,  stage: "Lead",     owner: "Priya Nair"  },
  { id: 3, company: "Initech",           value: 28000, stage: "Contact",  owner: "Sam Rivera"  },
  { id: 4, company: "Soylent Corp",      value: 61200, stage: "Proposal", owner: "Jordan Lee"  },
  { id: 5, company: "Umbrella Health",   value: 45000, stage: "Won",      owner: "Priya Nair"  },
  { id: 6, company: "Vandelay Imports",  value: 9800,  stage: "Lost",     owner: "Sam Rivera"  },
];

let nextId = rows.length + 1; // the server, not the client, assigns ids

// --- internal helpers --------------------------------------------------------

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Hand out copies, never references. If app.js could mutate a row object
// directly, its screen could silently disagree with the server. Forcing a copy
// is what makes the "send the change, then reflect it" round trip honest.
function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

// --- the "endpoints" ---------------------------------------------------------

// GET /deals
export async function getDeals() {
  await delay(LATENCY_MS);
  return clone(rows);
}

// POST /deals  — the server assigns the id and returns the created row
export async function createDeal(input) {
  await delay(LATENCY_MS);
  const row = {
    id: nextId++,
    company: input.company,
    value: input.value,
    stage: input.stage,
    owner: input.owner,
  };
  rows.push(row);
  return clone(row);
}

// PUT /deals/:id  — apply changes, return the updated row
export async function updateDeal(id, changes) {
  await delay(LATENCY_MS);
  const row = rows.find((r) => r.id === id);
  if (!row) throw new Error(`Deal ${id} not found`);
  Object.assign(row, changes);
  return clone(row);
}

// DELETE /deals/:id
export async function deleteDeal(id) {
  await delay(LATENCY_MS);
  const index = rows.findIndex((r) => r.id === id);
  if (index === -1) throw new Error(`Deal ${id} not found`);
  rows.splice(index, 1);
  return { id };
}
