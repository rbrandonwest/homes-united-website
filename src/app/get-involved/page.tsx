import { GetInvolvedContent } from './GetInvolvedContent';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Get Involved',
  description: 'Join us in our mission to help rebuild lives through housing assistance and support services.',
  path: '/get-involved'
});

export default function GetInvolvedPage() {
  return <GetInvolvedContent />;
}