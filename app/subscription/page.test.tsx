// app/subscriptions/page.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubscriptionsPage from './page';

describe('Subscriptions Page', () => {
    it('should render the subscriptions heading', () => {
        // 1. Render the component
        render(<SubscriptionsPage />);

        // 2. Find the heading element by its text content
        const heading = screen.getByRole('heading', {
            name: /My Subscriptions/i,
        });


        // 3. Assert that the heading is in the document
        expect(heading).toBeInTheDocument();
    });
});