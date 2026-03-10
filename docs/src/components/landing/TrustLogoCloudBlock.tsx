import * as React from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from 'docs/src/layouts/Section';
import { CORE_CUSTOMERS, ADVANCED_CUSTOMERS } from 'docs/src/components/home/CompaniesGrid';
import SectionReveal from 'docs/src/components/landing/SectionReveal';

const CompaniesGrid = dynamic(() => import('docs/src/components/home/CompaniesGrid'));

export { CORE_CUSTOMERS, ADVANCED_CUSTOMERS };

interface TrustLogoCloudBlockProps {
  companies?: typeof CORE_CUSTOMERS | typeof ADVANCED_CUSTOMERS;
  caption?: string;
}

export default function TrustLogoCloudBlock({
  companies = CORE_CUSTOMERS,
  caption = 'Trusted by product teams that need complete, dependable UI foundations for real applications.',
}: TrustLogoCloudBlockProps) {
  return (
    <Section cozy bg="transparent">
      <SectionReveal>
        <Box sx={{ minHeight: { xs: 236, sm: 144, md: 52 } }}>
          <CompaniesGrid data={companies} />
        </Box>
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mt: 4,
            mx: 'auto',
            maxWidth: 460,
            minHeight: 42,
          }}
        >
          {caption}
        </Typography>
      </SectionReveal>
    </Section>
  );
}
