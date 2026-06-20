// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Header from './components/Header.jsx'
// import Footer from './components/Footer.jsx'
// import Chatbot from './components/Chatbot.jsx'
// import ScrollToTop from './components/ScrollToTop.jsx'

// import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'
// import Capabilities from './pages/Capabilities.jsx'
// import Products from './pages/Products.jsx'
// import Contact from './pages/Contact.jsx'
// import NotFound from './pages/NotFound.jsx'
// import Policy from './pages/prolicy.jsx'
// import Faq from './pages/faq.jsx'
// import ScrollTopButton from "./components/ui/ScrollTopButton.jsx"

// export default function App() {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <ScrollToTop />
//       <main className="pt-24">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/capabilities" element={<Capabilities />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/policy" element={<Policy />} />
//                     <Route path="/faq" element={<Faq />} />

//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </main>
//       <Footer />
//       <Chatbot />
//        <ScrollTopButton />
//     </div>
//   )
// }








import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Chatbot from './components/Chatbot.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import PasswordGate from './components/PasswordGate.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Capabilities from './pages/Capabilities.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Policy from './pages/prolicy.jsx'
import Faq from './pages/faq.jsx'
import ScrollTopButton from "./components/ui/ScrollTopButton.jsx"

export default function App() {
  return (
    <PasswordGate>
      <div className="min-h-screen">
        <Header />
        <ScrollToTop />
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/faq" element={<Faq />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <ScrollTopButton />
      </div>
    </PasswordGate>
  )
}
