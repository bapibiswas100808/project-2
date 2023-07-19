import "./App.css";
import Another from "./Components/Another/Another";
import Footer from "./Components/Footer/Footer";
import Heritage from "./Components/Heritage/Heritage";
import Hero from "./Components/Hero/Hero";
import Message from "./Components/Message/Message";
import Project from "./Components/Project/Project";
import Utility from "./Components/Utility/Utility";

function App() {
  return (
    <div className="App">
      <Hero />
      <Project
        iframeSource="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        iframeTitle="Youtube Video"
        projectHeading="PROJECT NYOM1 NFT COLLECTION"
        projectParagraph="The collection itself is a celebration of the 10-year
                  anniversary of The Blade Silhouette by giving it a futuristic
                  makeover that will jumpstart the modernization of this
                  traditional Italian high-heel powerhouse. The inspiration
                  behind the collection comes from Ricardo’s obsession with the
                  holographic aesthetic that has been heavily influenced by the
                  remake of the cult movie, The Blade Runner, set in a dystopian
                  future Los Angeles of 2049, in which synthetic humans roam the
                  planet while the discovery of a long-buried secret leads
                  officer K to track down the former Blade Runner in order to
                  prevent the downfall of humanity. Similarly, PROJECT NAYOM1
                  NFT Collection will become the best-kept secret of luxury
                  footwear, as its utilization of web3 technologies will present
                  a strong case for digitalization of traditional fashion
                  brands."
      />
      <Project
        rowReverse="flex-row-reverse"
        iframeSource="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        iframeTitle="Youtube Video"
        projectHeading="PROJECT VALUE"
        projectParagraph="PROJECT NAYOM1 NFT Collection is all about the modernization of a traditional Italian high-heel shoe powerhouse while creating exclusive ‘phygital’ products for an even more exclusive community of luxury digital fashion consumers. 

        It highlights how phygital assets can create multiple layers of utility (Physical Shoe, Digital Wearable, PFP) both in the real world, as well as the digital one. 
        
        The 1000 limited edition 'NAYOM1 Blade' physical heels are all NFC-chipped, enabling fans of Casadei to connect the real footwear to digital metaverse wearables and PFP avatars in the form of 1000 corresponding non-fungible tokens (NFTs) - merging realities to create the ultimate web3 fashion experience. "
      />
      <Utility />
      <Heritage />
      <Another />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
