import Landpage from '../components/Landpage/Landpage'
import Why from '../components/why/Why'
import Faq from '../components/Faq/Faq'
import Review from '../components/review/Review'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

import TradersList from '../components/tradersList/TradersList'
import CardContainer from '../components/cardcontainer/CardContainer'
import TeslaWidgetContainer from '../components/Teslawidget/TeslaWidgetContainer'
import CryptoNewsContainer from '../components/CryptoNewsSection/CryptoNewsContainer'
import ForexAnalysisSection from '../components/ForexAnalysisSection/ForexAnalysisSection'
import PromoSection from '../components/PromoSection/PromoSection'
import Mt5Section from '../components/mt5/Mt5Section'
import Roadmap from '../components/roadmap/Roadmap'
const Home = () => {
  return (
    <main className='home-img'>
      <Landpage />
      {/* Phase 4: Social Proof Section - Moved Up */}
      <TradersList />
      <CardContainer />
      <Why />
      <Mt5Section />
      <CryptoNewsContainer />
      <Roadmap />
      <TeslaWidgetContainer />
      <Review />
      <ForexAnalysisSection />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home