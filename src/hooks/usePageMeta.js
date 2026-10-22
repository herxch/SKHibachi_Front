import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.skhibachi.com';

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

// Keeps <title>, description, canonical and og:url in sync with the current route.
export default function usePageMeta({ title, description }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | SK Hibachi` : 'SK Hibachi';
    const url = SITE_URL + (pathname === '/' ? '/' : pathname);
    document.title = fullTitle;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('link[rel="canonical"]', 'href', url);
  }, [title, description, pathname]);
}
