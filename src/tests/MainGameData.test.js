import React from 'react';
import MainGameData from '../components/MainGameData';
import {render} from './test-utils';
import {render as vanillaRender} from '@testing-library/react';
import {Provider} from '../components/Context';

describe('<MainGameData />', ()=>{
    it('if there is no game, it will render the notice component', () => {
        const {getByTestId} = render(<MainGameData />);
        const noticeDivEl = getByTestId('noticeDivEl');
        expect(noticeDivEl).toBeInTheDocument();
    });

    //TODO: Figure out how to render stuff if there is a gameData thing present.
    it('renders stuff is there is gameData info present', ()=> {
        const {getByTestId} = vanillaRender(<Provider>
            <MainGameData gameData={{
                aggregatedRating: 80,
                collection: 2128,
                coverUrl: "//images.igdb.com/igdb/image/upload/t_cover_big/gtnvpmp8zwbvubl2dzll.jpg",
                franchiseName: "Metal Gear Solid",
                name: "Metal Gear Solid 2: Substance",
                releaseDate: 2002,
                summary: "Metal Gear Solid 2: Substance is a re-vamped and revised edition of the original Metal Gear Solid 2: Sons of Liberty, in which Solid Snake must recover the stolen Metal Gear Ray from a group of terror…"
            }}/>
        </Provider>);

        const mainGameDataDivEl = getByTestId('mainGameDataDivEl');
        expect(mainGameDataDivEl).toBeInTheDocument();

        const mainGameDataH1El = getByTestId('mainGameDataH1El');
        expect(mainGameDataH1El).toBeInTheDocument();
        expect(mainGameDataH1El).toHaveTextContent('Metal Gear Solid 2: Substance');

        const mainGameImgEl = getByTestId('mainGameImgEl');
        expect(mainGameImgEl).toBeInTheDocument();
        expect(mainGameImgEl).toHaveAttribute('src', '//images.igdb.com/igdb/image/upload/t_cover_big/gtnvpmp8zwbvubl2dzll.jpg');

        const mainGameDataRatingEL = getByTestId('mainGameDataRatingEL');
        expect(mainGameDataRatingEL).toBeInTheDocument();
        expect(mainGameDataRatingEL).toHaveTextContent('80');

        const mainGameDataReleaseDateEL = getByTestId('mainGameDataReleaseDateEL');
        expect(mainGameDataReleaseDateEL).toBeInTheDocument();
        expect(mainGameDataReleaseDateEL).toHaveTextContent('2002');

        const mainGameDataFranchiseEL = getByTestId('mainGameDataFranchiseEL');
        expect(mainGameDataFranchiseEL).toBeInTheDocument();
        expect(mainGameDataFranchiseEL).toHaveTextContent("Metal Gear Solid");
    })

})





