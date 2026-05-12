import { useState, useEffect } from 'react';
import portfolioData from '../data/data.json';

export const usePortfolioData = () => {
    const [data, setData] = useState(portfolioData);

    // In a real app, you might fetch this from an API
    // For now, we're just returning the imported JSON
    useEffect(() => {
        setData(portfolioData);
    }, []);

    return data;
};
