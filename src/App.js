import Header from './Components/Header/index'
import Aside from './Components/Aside/index'
import Article1 from './Components/Section/Article1'
import Article2 from './Components/Section/Article2'
import Article3 from './Components/Section/Article3'
import Footer from './Components/Footer/index'

function App () {
  return (
    <div className='App'>
      <Header />
      <main>
        <Aside />
        <section>
            <Article1 />
            <Article2 />
            <Article3 />
        </section>
      </main>
        <Footer />
    </div>
  )
}
export default App
