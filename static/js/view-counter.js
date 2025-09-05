async function recordView() {
  try {
    await fetch('/api/record_view', { method: 'POST' });
  } catch (err) {
    console.error('record_view endpoint failed', err);
  }
}

async function fetchViewCount() {
  let count = 0;
  try {
    const response = await fetch('/api/view_count');
    if (response.ok) {
      const text = await response.text();
      try {
        const data = JSON.parse(text);
        if (typeof data === 'number') {
          count = data;
        } else if (data.count !== undefined) {
          count = data.count;
        } else if (data.view_count !== undefined) {
          count = data.view_count;
        } else {
          const values = Object.values(data).filter(v => typeof v === 'number');
          if (values.length > 0) {
            count = values[0];
          }
        }
      } catch (e) {
        const parsed = parseInt(text, 10);
        if (!isNaN(parsed)) {
          count = parsed;
        }
      }
    }
  } catch (err) {
    console.error('view_count endpoint failed', err);
  }
  const el = document.getElementById('view-count');
  if (el) {
    el.textContent = count;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  recordView();
  fetchViewCount();
});
