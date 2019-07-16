import React from 'react';
import Trend from '../components/Trend';
import {Provider} from '../components/Context';
import {render} from './test-utils';
import {render as vanillaRender} from '@testing-library/react';

it('renders Notice if there is no graph', () => {
    const {getByTestId} = render(<Trend />);
    const noticeDivEl = getByTestId('noticeDivEl');
    expect(noticeDivEl).toBeInTheDocument();
});



it('the trend Array has info, we show it ', ()=> {
    

    const {getByTestId} = vanillaRender(<Provider><Trend 
    gameData={{
        aggregatedRating: "88",
        collection: "Unknown",
        coverUrl: "//images.igdb.com/igdb/image/upload/t_cover_big/co1hoo.jpg",
        name: "Super Mario All-Stars + Super Mario World",
        releaseDate: 1994,
        summary: "Put quite simply, this is the amalgamation of the previously releas"
    }}

    relatedGames={
        [
            {
                aggregatedRating:"30",
                coverID: 1062,
                coverUrl: "//images.igdb.com/igdb/image/upload/t_cover_big/j6vyifrkfpq9jinr2bek.jpg",
                gameID: 1066,
                name: "Super Mario Bros.: The Lost Levels",
                releaseDate: 1986
            }
        ]
    }

    />
    </Provider>);

    const trendDivEl = getByTestId('trendDivEl');
    expect(trendDivEl).toBeInTheDocument();
    const trendGameName = getByTestId('trend/gameName-0');
    expect(trendGameName).toBeInTheDocument();
    expect(trendGameName).toHaveTextContent('Super Mario Bros.: The Lost Levels');
    
    const trendReleaseDate = getByTestId('trend/releaseDate-0');
    expect(trendReleaseDate).toBeInTheDocument();
    expect(trendReleaseDate).toHaveTextContent('1986')

    const trendProgressBar = getByTestId('trend/progress-0');
    expect(trendProgressBar).toBeInTheDocument();
    expect(trendProgressBar).toHaveAttribute('value', '30');
    expect(trendProgressBar).toHaveClass('is-error')

    const trendBadge = getByTestId('trend/badge-0');
    expect(trendBadge).toBeInTheDocument();
    expect(trendBadge).toHaveClass('nes-badge');

    const trendBadgeSpan = getByTestId('trend/badgeSpan-0');
    expect(trendBadgeSpan).toBeInTheDocument();
    expect(trendBadgeSpan).toHaveClass('is-dark');
    expect(trendBadgeSpan).toHaveTextContent('RATING: 30');

    ////

    const trendGameName1 = getByTestId('trend/gameName-1');
    expect(trendGameName1).toBeInTheDocument();
    expect(trendGameName1).toHaveTextContent('Super Mario All-Stars + Super Mario World');
    
    const trendReleaseDate1 = getByTestId('trend/releaseDate-1');
    expect(trendReleaseDate1).toBeInTheDocument();
    expect(trendReleaseDate1).toHaveTextContent('1994')

    const trendProgressBar1 = getByTestId('trend/progress-1');
    expect(trendProgressBar1).toBeInTheDocument();
    expect(trendProgressBar1).toHaveAttribute('value', '88');
    expect(trendProgressBar1).toHaveClass('is-primary')

    const trendBadge1 = getByTestId('trend/badge-1');
    expect(trendBadge1).toBeInTheDocument();
    expect(trendBadge1).toHaveClass('nes-badge');

    const trendBadgeSpan1 = getByTestId('trend/badgeSpan-1');
    expect(trendBadgeSpan1).toBeInTheDocument();
    expect(trendBadgeSpan1).toHaveClass('is-dark');
    expect(trendBadgeSpan1).toHaveTextContent('RATING: 88');

    

});

