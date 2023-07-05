import './App.css';
import notes from './assets/svg/notes.svg';
import proof from './assets/svg/proof.svg';
import nft from './assets/svg/nft.svg';
import support from './assets/svg/support.svg';


function App() {
  return (
    <div className='bg-black-color'>
      <div className='flex gap-40 bg-color'>
        <div className='relative'>
          <div className='circle'></div>
          <div className='box margin-left '>
            <img src={notes} alt="notes" />
            <h1 className='text-white h1'>Smart Contract</h1>
            <p className='text-white mx-w-224'>Eu faucibus libero leo, malesuada justo, tortor pellentesque quis sit.
              Dui viverra at odio sodales duis integer rhoncus pulvinar. Commodo massa aliquam.</p>
          </div>
        </div>
        <div className='relative'>
          <div className='circle'></div>
          <div className='box relative'>
            <img src={proof} alt="proof" />
            <h1 className='text-white h1'>Proof</h1>
            <p className='text-white mx-w-224'>Nisl, sed morbi porta orci nunc. Curabitur vitae hendrerit justo ultricies
              quam vitae pellentesque tellus felis. Elementum tortor quis est morbi ullamcorper.</p>
          </div>
        </div>
        <div className='relative'>
          <div className='circle'></div>
          <div className='box relative'>
            <img src={nft} alt="nft" />
            <h1 className='text-white h1'>NFT solutions</h1>
            <p className='text-white mx-w-224'>Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas
              vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.</p>
          </div>
        </div>
        <div className='relative'>
          <div className='circle'></div>
          <div className='box relative'>
            <img src={support} alt="support" />
            <h1 className='text-white h1'>Support</h1>
            <p className='text-white mx-w-224'>Tellus id et fringilla auctor. Ac viverra ullamcorper nec, senectus at nulla. Metus
              sem egestas volutpat cras phasellus cursus augue sagittis, enim. Sit et cras.</p>
          </div>
        </div>
      </div>
      <div className='margin-left border hover'>
        <div className='bg-black'>
          <div className='flex items-center gapp'>
            <h2 className='text-white h2 mx-w-224'>
              NFT Holders
            </h2>
            <p className='text-white p2'>70%</p>
          </div>
          <p className='text-white mx-w-290 last-p-color'>NFT Holders will earn $TNAT via p2e mechanism.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
