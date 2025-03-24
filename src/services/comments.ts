export type CommentPayload = {
  name: string;
  email: string;
  comment: string;
};

export async function postComment(payload: CommentPayload) {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Comments - Error sending comment');
  }

  return res.json();
}
