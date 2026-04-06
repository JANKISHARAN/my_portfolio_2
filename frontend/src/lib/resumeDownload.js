import axios from 'axios';

/**
 * Download resume: static file, external URL, or backend /api/resume/* when available.
 */
export async function triggerResumeDownload(personal, { toast, api } = {}) {
  const resumeHref = personal.resumeUrl || '/resume.pdf';
  const fileName = `${personal.name.replace(/\s+/g, '_')}_Resume.pdf`;

  const triggerBlobDownload = (blobUrl) => {
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = fileName;
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const show = (title, description, variant) => {
    if (toast) toast({ title, description, ...(variant ? { variant } : {}) });
  };

  if (resumeHref.startsWith('http://') || resumeHref.startsWith('https://')) {
    window.open(resumeHref, '_blank', 'noopener,noreferrer');
    show(
      'Opening resume',
      "Use your browser’s menu to save the file if it opens in a tab."
    );
    return;
  }

  try {
    const res = await fetch(resumeHref, { cache: 'no-store' });
    if (res.ok) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      triggerBlobDownload(url);
      URL.revokeObjectURL(url);
      show('Download started', 'Your resume download has begun.');
      return;
    }
  } catch (e) {
    console.warn('Static resume fetch failed:', e);
  }

  if (api) {
    try {
      const statusResponse = await axios.get(`${api}/resume/status`, { timeout: 8000 });
      if (statusResponse.data?.exists) {
        window.location.href = `${api}/resume/download`;
        show('Download started', 'Your resume download has begun.');
        return;
      }
    } catch (e) {
      console.warn('Backend resume not available:', e);
    }
  }

  show(
    'Resume not available',
    'Add frontend/public/resume.pdf, set resumeUrl in mock.js, or run your API with /api/resume/*.',
    'destructive'
  );
}
