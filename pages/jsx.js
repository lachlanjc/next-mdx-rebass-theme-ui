import { Heading, Text, Card, Link as A } from 'rebass'
import Link from 'next/link'
import Footer from '../components/footer'

export default () => (
  <>
    <Heading as="h1" sx={{ color: 'primary', fontSize: [5, 6, 7] }}>Hello from JSX</Heading>
    <Text sx={{ my: [3, 4] }}>This is some <strong>Text</strong></Text>
    <Card sx={{ px: 3, py: [3, 4] }}>This is a Card</Card>
    <Text sx={{ my: [3, 4] }}>
      <Link href="/">
        <A>&larr; Back to MDX</A>
      </Link>
    </Text>
    <Footer />
  </>
)
