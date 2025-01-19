import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/search';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

test('updates input value and triggers search', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    render(<Search />);
    
    const input = screen.getByPlaceholderText('Search Pokemon');
    fireEvent.change(input, { target: { value: 'Pikachu' } });

    const button = screen.getByText('Search');
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith('/?search=Pikachu');
});
