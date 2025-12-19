// Running to God - Supabase Integration
// Uses the same Supabase instance as Shame to Flame ministry family

const supabaseUrl = 'https://frmeuzfzlclipxwskaaw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZybWV1emZ6bGNsaXB4d3NrYWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNTM1ODUsImV4cCI6MjA4MDYyOTU4NX0.qIhDK2vuxPv2fXVurKBTvU6efeCsTDGAbQml_fnBic4';

export const supabaseConfig = {
  url: supabaseUrl,
  anonKey: supabaseAnonKey,
};

// For general contact - when we need to respond
export async function submitContact(data: {
  name: string;
  email: string;
  request_type: string;
  subject?: string;
  message: string;
  source?: string; // Which site it came from
}) {
  const response = await fetch(`${supabaseUrl}/functions/v1/submit-contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify({
      ...data,
      source: data.source || 'running-to-god',
    })
  });

  return response.json();
}

// For prayer requests - anonymous by default
// God already knows who they are, so we don't need to
export async function submitPrayer(data: {
  name?: string | null;
  email?: string | null;
  is_anonymous: boolean;
  prayer_request: string;
  allow_sharing: boolean;
  source?: string; // Which site it came from
}) {
  const response = await fetch(`${supabaseUrl}/functions/v1/submit-prayer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify({
      ...data,
      source: data.source || 'running-to-god',
    })
  });

  return response.json();
}
