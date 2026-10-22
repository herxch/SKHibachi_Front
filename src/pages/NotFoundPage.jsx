import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import PageHero from '../components/PageHero';

export default function NotFoundPage() {
  usePageMeta({ title: 'Page not found', description: 'This page could not be found.' });

  return (
    <>
      <PageHero eyebrow="404" title="This grill has gone cold." lead="The page you are looking for does not exist or has moved." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container btn-row">
          <Link to="/" className="btn btn--primary">
            Back to home
          </Link>
          <Link to="/book" className="btn btn--ghost">
            Book a party
          </Link>
        </div>
      </section>
    </>
  );
}
