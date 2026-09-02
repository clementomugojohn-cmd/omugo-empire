import logoIcon from './assets/logo-icon.png'
import logoFull from './assets/logo-full.png' // ADD LOGO 2
import { useState } from 'react' // KEEP ONLY ONE

export default function App() {
  const [cartCount, setCartCount] = useState(0) // ADD THIS LINE

  const addToCart = () => {  // ADD THIS FUNCTION
    setCartCount(cartCount + 1)
    alert('Product added to cart!') // simple feedback for now
  }
    
  const [cart, setCart] = useState(0)

  return (
    <div style={{fontFamily: 'Arial, sans-serif', background: '#fff', minHeight: '100vh', paddingBottom: '80px'}}>
      
     <nav style={{padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>
  
  {/* LEFT: LOGO */}
  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
    <img src={logoIcon} alt="OMUGO EMPIRE" style={{height: '40px', width: '40px'}} />
    <h2 style={{margin: 0, fontSize: '18px', fontWeight: 'bold'}}>
      <span style={{color: '#000'}}>OMUGO</span> 
      <span style={{color: '#D4AF37'}}> EMPIRE</span>
    </h2>
  </div>

  {/* RIGHT: ICONS */}
  <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
    <button style={{background: 'white', border: '1px solid #eee', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'}}>🛒</button>
    <button style={{background: 'white', border: '1px solid #eee', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'}}>☰</button>
  </div>
</nav>

      {/* HERO SECTION */}
      <section style={{padding: '40px 20px', textAlign: 'left'}}>
        <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFF8E7', padding: '8px 15px', borderRadius: '20px', marginBottom: '20px'}}>
          <span style={{fontSize: '14px'}}>🎯</span>
          <span style={{fontSize: '14px', color: '#333'}}>Nigeria's trusted marketplace</span>
        </div>

        <h1 style={{fontSize: '32px', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '15px', color: 'black'}}>
          Your Trusted<br/>
          Marketplace for<br/>
          <span style={{borderBottom: '3px solid #D4AF37'}}>Everything</span>
        </h1>

        <p style={{fontSize: '15px', color: '#666', lineHeight: '1.6', marginBottom: '25px'}}>
          Buy quality products, sell to thousands, advertise your brand and access trusted services — all in one place, across Nigeria and worldwide.
        </p>

        <button style={{width: '100%', padding: '15px', background: '#0A7A0A', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', marginBottom: '12px'}}>Shop Now →</button>
        <button style={{width: '100%', padding: '15px', background: 'white', color: 'black', border: '1px solid #ddd', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold'}}>Sell With Us</button>
      </section>
      {/* CATEGORIES SECTION */}
      <section style={{padding: '40px 20px', maxWidth: '1200px', margin: '0 auto'}}>
        <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px'}}>Shop By Category</h3>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px'}}>
          
          {/* Category 1 */}
          <div style={{textAlign: 'center', cursor: 'pointer'}}>
            <div style={{background: '#F5F5F5', borderRadius: '12px', padding: '25px', marginBottom: '10px'}}>
              <div style={{fontSize: '40px'}}>📱</div>
            </div>
            <p style={{fontWeight: '600'}}>Phones</p>
          </div>

          {/* Category 2 */}
          <div style={{textAlign: 'center', cursor: 'pointer'}}>
            <div style={{background: '#F5F5F5', borderRadius: '12px', padding: '25px', marginBottom: '10px'}}>
              <div style={{fontSize: '40px'}}>👕</div>
            </div>
            <p style={{fontWeight: '600'}}>Fashion</p>
          </div>

          {/* Category 3 */}
          <div style={{textAlign: 'center', cursor: 'pointer'}}>
            <div style={{background: '#F5F5F5', borderRadius: '12px', padding: '25px', marginBottom: '10px'}}>
              <div style={{fontSize: '40px'}}>💻</div>
            </div>
            <p style={{fontWeight: '600'}}>Electronics</p>
          </div>

          {/* Category 4 */}
          <div style={{textAlign: 'center', cursor: 'pointer'}}>
            <div style={{background: '#F5F5F5', borderRadius: '12px', padding: '25px', marginBottom: '10px'}}>
              <div style={{fontSize: '40px'}}>🏠</div>
            </div>
            <p style={{fontWeight: '600'}}>Home</p>
          </div>

          {/* Category 5 */}
          <div style={{textAlign: 'center', cursor: 'pointer'}}>
            <div style={{background: '#F5F5F5', borderRadius: '12px', padding: '25px', marginBottom: '10px'}}>
              <div style={{fontSize: '40px'}}>💄</div>
            </div>
            <p style={{fontWeight: '600'}}>Beauty</p>
          </div>

          {/* Category 6 */}
          <div style={{textAlign: 'center', cursor: 'pointer'}}>
            <div style={{background: '#F5F5F5', borderRadius: '12px', padding: '25px', marginBottom: '10px'}}>
              <div style={{fontSize: '40px'}}>⚽</div>
            </div>
            <p style={{fontWeight: '600'}}>Sports</p>
          </div>

        </div>
      </section>
      {/* DEALS OF THE DAY BANNER */}
      <section style={{background: 'linear-gradient(90deg, #D4AF37 0%, #0A7A0A 100%)', padding: '30px 20px', margin: '20px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', color: 'white'}}>
          
          <div>
            <h3 style={{fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px 0'}}>🔥 Deals of the Day</h3>
            <p style={{fontSize: '14px', margin: 0, opacity: 0.9}}>Up to 50% OFF. Limited time only!</p>
          </div>

          {/* Countdown Timer */}
          <div style={{display: 'flex', gap: '10px'}}>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '10px 15px', borderRadius: '8px', textAlign: 'center'}}>
              <div style={{fontSize: '24px', fontWeight: 'bold'}}>12</div>
              <div style={{fontSize: '12px'}}>Hours</div>
            </div>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '10px 15px', borderRadius: '8px', textAlign: 'center'}}>
              <div style={{fontSize: '24px', fontWeight: 'bold'}}>45</div>
              <div style={{fontSize: '12px'}}>Mins</div>
            </div>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '10px 15px', borderRadius: '8px', textAlign: 'center'}}>
              <div style={{fontSize: '24px', fontWeight: 'bold'}}>30</div>
              <div style={{fontSize: '12px'}}>Secs</div>
            </div>
          </div>

          <button style={{background: 'white', color: '#0A7A0A', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer'}}>
            Shop Now
          </button>

        </div>
      </section>
      {/* FEATURED PRODUCTS */}
      <section style={{padding: '40px 20px', maxWidth: '1200px', margin: '0 auto'}}>
        <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px'}}>Featured Products</h3>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
          
          {/* Product 1 */}
          <div style={{border: '1px solid #eee', borderRadius: '12px', padding: '15px', background: 'white'}}>
            <div style={{position: 'relative'}}>
              <span style={{position: 'absolute', top: '10px', left: '10px', background: 'red', color: 'white', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold'}}> -25%</span>
              <div style={{background: '#F5F5F5', height: '180px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px'}}>📱</div>
            </div>
            <h4 style={{margin: '12px 0 5px 0', fontSize: '15px'}}>iPhone 15 Pro Max 256GB</h4>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px'}}>
              <span style={{fontSize: '18px', fontWeight: 'bold', color: '#0A7A0A'}}>₦1,450,000</span>
              <span style={{fontSize: '14px', textDecoration: 'line-through', color: '#999'}}>₦1,950,000</span>
            </div>
            <button style={{width: '100%', background: '#0A7A0A', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'}}>Add to Cart</button>
          </div>

          {/* Product 2 */}
          <div style={{border: '1px solid #eee', borderRadius: '12px', padding: '15px', background: 'white'}}>
            <div style={{position: 'relative'}}>
              <span style={{position: 'absolute', top: '10px', left: '10px', background: 'red', color: 'white', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold'}}> -30%</span>
              <div style={{background: '#F5F5F5', height: '180px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px'}}>🎧</div>
            </div>
            <h4 style={{margin: '12px 0 5px 0', fontSize: '15px'}}>AirPods Pro 2nd Gen</h4>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px'}}>
              <span style={{fontSize: '18px', fontWeight: 'bold', color: '#0A7A0A'}}>₦280,000</span>
              <span style={{fontSize: '14px', textDecoration: 'line-through', color: '#999'}}>₦400,000</span>
            </div>
            <button style={{width: '100%', background: '#0A7A0A', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'}}>Add to Cart</button>
          </div>

          {/* Product 3 */}
          <div style={{border: '1px solid #eee', borderRadius: '12px', padding: '15px', background: 'white'}}>
            <div style={{position: 'relative'}}>
              <span style={{position: 'absolute', top: '10px', left: '10px', background: 'red', color: 'white', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold'}}> -15%</span>
              <div style={{background: '#F5F5F5', height: '180px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px'}}>👟</div>
            </div>
            <h4 style={{margin: '12px 0 5px 0', fontSize: '15px'}}>Nike Air Max 270</h4>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px'}}>
              <span style={{fontSize: '18px', fontWeight: 'bold', color: '#0A7A0A'}}>₦85,000</span>
              <span style={{fontSize: '14px', textDecoration: 'line-through', color: '#999'}}>₦100,000</span>
            </div>
            <button style={{width: '100%', background: '#0A7A0A', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'}}>Add to Cart</button>
          </div>

          {/* Product 4 */}
          <div style={{border: '1px solid #eee', borderRadius: '12px', padding: '15px', background: 'white'}}>
            <div style={{position: 'relative'}}>
              <span style={{position: 'absolute', top: '10px', left: '10px', background: 'red', color: 'white', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold'}}> -20%</span>
              <div style={{background: '#F5F5F5', height: '180px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px'}}>⌚</div>
            </div>
            <h4 style={{margin: '12px 0 5px 0', fontSize: '15px'}}>Apple Watch Series 9</h4>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px'}}>
              <span style={{fontSize: '18px', fontWeight: 'bold', color: '#0A7A0A'}}>₦520,000</span>
              <span style={{fontSize: '14px', textDecoration: 'line-through', color: '#999'}}>₦650,000</span>
            </div>
            <button style={{width: '100%', background: '#0A7A0A', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'}}>Add to Cart</button>
          </div>

        </div>
      </section>
{/* WHY SHOP WITH US */}
      <section style={{background: '#F5F5F5', padding: '50px 20px', marginTop: '20px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
          <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '40px'}}>Why Shop With OMUGO EMPIRE</h3>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
            
            {/* Feature 1 */}
            <div>
              <div style={{background: 'white', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontSize: '40px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>🚚</div>
              <h4 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '8px'}}>Fast Delivery</h4>
              <p style={{fontSize: '14px', color: '#666', lineHeight: '1.6'}}>Get your orders delivered within 24-48 hours nationwide</p>
            </div>

            {/* Feature 2 */}
            <div>
              <div style={{background: 'white', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontSize: '40px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>🔒</div>
              <h4 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '8px'}}>Secure Payment</h4>
              <p style={{fontSize: '14px', color: '#666', lineHeight: '1.6'}}>100% secure payment with Paystack, Bank transfer & COD</p>
            </div>

            {/* Feature 3 */}
            <div>
              <div style={{background: 'white', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontSize: '40px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>🎧</div>
              <h4 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '8px'}}>24/7 Support</h4>
              <p style={{fontSize: '14px', color: '#666', lineHeight: '1.6'}}>Our customer support team is here to help you anytime</p>
            </div>

          </div>
        </div>
      </section>

{/* NEWSLETTER */}
      <section style={{background: '#0A7A0A', color: 'white', padding: '50px 20px', textAlign: 'center'}}>
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <h3 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '10px'}}>Join Our Newsletter</h3>
          <p style={{fontSize: '15px', marginBottom: '25px', opacity: 0.9}}>Get exclusive deals and be the first to know about new arrivals</p>
          
          <div style={{display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <input type="email" placeholder="Enter your email address" style={{padding: '12px 15px', borderRadius: '8px', border: 'none', width: '300px', fontSize: '15px'}} />
            <button style={{background: '#D4AF37', color: '#0A7A0A', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer'}}>Subscribe</button>
          </div>
        </div>
      </section>

      {/* FLOATING BUTTONS */}
      <div style={{position: 'fixed', bottom: '20px', left: '20px', zIndex: 999}}>
        <button style={{background: '#25D366', border: 'none', width: '55px', height: '55px', borderRadius: '50%', fontSize: '28px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.2)'}}>💬</button>
      </div>
      
      <div style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: 999}}>
        <button style={{background: '#0A7A0A', border: 'none', width: '55px', height: '55px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.2)'}}>🛒</button>
      </div>

      {/* PRODUCT IMAGE WITH POPUPS - THIS IS OPTION 1 */}
      <section style={{padding: '0 20px 30px'}}>
        <div style={{position: 'relative'}}>
          <img src="https://images.unsplash.com/photo-1556740772-1a741367b93e?w=800" 
               alt="market" 
               style={{width: '100%', borderRadius: '15px', height: '250px', objectFit: 'cover'}}/>
          
          <div style={{position: 'absolute', top: '15px', right: '15px', background: 'white', padding: '10px 15px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', fontSize: '13px'}}>
            📦 <b>Order delivered</b><br/>
            <span style={{fontSize: '12px', color: '#666'}}>Lagos - Abuja, 2 days</span>
          </div>
          
          <div style={{position: 'absolute', bottom: '15px', left: '15px', background: 'white', padding: '10px 15px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', fontSize: '13px'}}>
            💳 <b>Payment secured</b><br/>
            <span style={{fontSize: '12px', color: '#666'}}>Buyer protection active</span>
          </div>
        </div>
      </section>

      {/* TRUST FEATURES */}
      <section style={{padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <span>🛡️</span><span style={{fontSize: '13px', color: '#555'}}>Secure Payments</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <span>🚚</span><span style={{fontSize: '13px', color: '#555'}}>Nationwide Delivery</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <span>✅</span><span style={{fontSize: '13px', color: '#555'}}>Verified Sellers</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <span>🎧</span><span style={{fontSize: '13px', color: '#555'}}>24/7 Support</span>
        </div>
      </section>

      {/* SCROLLING TICKER - THIS IS OPTION 2 */}
      <div style={{background: '#0A7A0A', color: 'white', padding: '12px 0', overflow: 'hidden', whiteSpace: 'nowrap'}}>
        <div style={{display: 'inline-block', animation: 'scroll 20s linear infinite', fontWeight: 'bold', letterSpacing: '2px'}}>
          BUY • SELL • ADVERTISE • SERVICES • BUY • SELL • ADVERTISE • SERVICES •
        </div>
      </div>

      {/* WHAT WE DO */}
      <section style={{padding: '50px 20px'}}>
        <p style={{color: '#D4AF37', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px'}}>WHAT WE DO</p>
        <h2 style={{fontSize: '28px', marginBottom: '30px', color: 'black'}}>One empire, four ways to grow</h2>
        
        {/* BUY CARD */}
        <div style={{background: 'white', border: '1px solid #eee', borderRadius: '15px', padding: '20px', marginBottom: '15px'}}>
          <div style={{width: '50px', height: '50px', background: '#0A7A0A', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px'}}>
            <span style={{fontSize: '24px'}}>🛍️</span>
          </div>
          <h3 style={{fontSize: '20px', marginBottom: '8px', color: 'black'}}>BUY</h3>
          <p style={{color: '#666', fontSize: '14px', marginBottom: '15px'}}>Shop quality products from verified sellers at honest prices — delivered to your door.</p>
          <a href="#" style={{color: '#0A7A0A', fontWeight: 'bold', textDecoration: 'none'}}>Start shopping →</a>
        </div>

        {/* SELL CARD */}
        <div style={{background: 'white', border: '1px solid #eee', borderRadius: '15px', padding: '20px', marginBottom: '15px'}}>
          <div style={{width: '50px', height: '50px', background: '#0A7A0A', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px'}}>
            <span style={{fontSize: '24px'}}>🏪</span>
          </div>
          <h3 style={{fontSize: '20px', marginBottom: '8px', color: 'black'}}>SELL</h3>
          <p style={{color: '#666', fontSize: '14px', marginBottom: '15px'}}>Open your storefront and reach thousands of buyers across Nigeria and beyond.</p>
          <a href="#" style={{color: '#0A7A0A', fontWeight: 'bold', textDecoration: 'none'}}>Become a seller →</a>
        </div>

        {/* ADVERTISE CARD */}
        <div style={{background: 'white', border: '1px solid #eee', borderRadius: '15px', padding: '20px', marginBottom: '15px'}}>
          <div style={{width: '50px', height: '50px', background: '#D4AF37', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px'}}>
            <span style={{fontSize: '24px'}}>📢</span>
          </div>
          <h3 style={{fontSize: '20px', marginBottom: '8px', color: 'black'}}>ADVERTISE</h3>
          <p style={{color: '#666', fontSize: '14px', marginBottom: '15px'}}>Put your brand in front of ready buyers with banners, features and social promos.</p>
          <a href="#" style={{color: '#0A7A0A', fontWeight: 'bold', textDecoration: 'none'}}>See ad packages →</a>
        </div>

        {/* SERVICES CARD */}
        <div style={{background: 'white', border: '1px solid #eee', borderRadius: '15px', padding: '20px'}}>
          <div style={{width: '50px', height: '50px', background: '#0A7A0A', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px'}}>
            <span style={{fontSize: '24px'}}>🔧</span>
          </div>
          <h3 style={{fontSize: '20px', marginBottom: '8px', color: 'black'}}>SERVICES</h3>
          <p style={{color: '#666', fontSize: '14px', marginBottom: '15px'}}>Logistics, sourcing, marketing and business support — handled by our team.</p>
          <a href="#" style={{color: '#0A7A0A', fontWeight: 'bold', textDecoration: 'none'}}>Explore services →</a>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{padding: '20px'}}>
        <p style={{color: '#D4AF37', fontSize: '14px', fontWeight: 'bold'}}>MARKETPLACE</p>
        <h2 style={{fontSize: '28px', marginBottom: '10px', color: 'black'}}>Featured products</h2>
        <a href="#" style={{color: '#0A7A0A', fontWeight: 'bold', textDecoration: 'none', marginBottom: '20px', display: 'block'}}>View all products →</a>

        <div style={{background: 'white', borderRadius: '15px', padding: '15px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
          <img src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500" alt="speaker" style={{width: '100%', borderRadius: '10px', height: '200px', objectFit: 'cover'}}/>
          <h4 style={{margin: '15px 0 5px', color: 'black'}}>Wireless Bluetooth Speaker</h4>
          <p style={{color: '#666', fontSize: '13px'}}>Quality you can trust, delivered to your door.</p>
          <p style={{color: '#0A7A0A', fontWeight: 'bold', fontSize: '18px', margin: '10px 0'}}>CFA15,000</p>
          <button onClick={() => setCart(cart + 1)} style={{width: '100%', padding: '12px', background: '#0A7A0A', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold'}}>🛒 Add to Cart</button>
        </div>

        <div style={{background: 'white', borderRadius: '15px', padding: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
          <img src="https://images.unsplash.com/photo-1600857544200-b2f6661c3fe5?w=500" alt="shea" style={{width: '100%', borderRadius: '10px', height: '200px', objectFit: 'cover'}}/>
          <h4 style={{margin: '15px 0 5px', color: 'black'}}>Raw Shea Butter Gift Set</h4>
          <p style={{color: '#666', fontSize: '13px'}}>Quality you can trust, delivered to your door.</p>
          <p style={{color: '#0A7A0A', fontWeight: 'bold', fontSize: '18px', margin: '10px 0'}}>CFA6,500</p>
          <button onClick={() => setCart(cart + 1)} style={{width: '100%', padding: '12px', background: '#0A7A0A', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold'}}>🛒 Add to Cart</button>
        </div>
      </section>
            {/* MORE PRODUCTS FROM VIDEO */}
      <section style={{padding: '20px'}}>
        <div style={{background: 'white', borderRadius: '15px', padding: '15px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
          <img src="https://images.unsplash.com/photo-1591561954557-607968c989ab?w=500" alt="ankara tote" style={{width: '100%', borderRadius: '10px', height: '200px', objectFit: 'cover'}}/>
          <h4 style={{margin: '15px 0 5px', color: 'black'}}>Ankara Print Tote Bag</h4>
          <p style={{color: '#666', fontSize: '13px'}}>Quality you can trust, delivered to your door.</p>
          <p style={{color: '#0A7A0A', fontWeight: 'bold', fontSize: '18px', margin: '10px 0'}}>CFA8500</p>
          <button onClick={() => setCart(cart + 1)} style={{width: '100%', padding: '12px', background: '#0A7A0A', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold'}}>🛒 Add to Cart</button>
        </div>

        <div style={{background: 'white', borderRadius: '15px', padding: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" alt="sandals" style={{width: '100%', borderRadius: '10px', height: '200px', objectFit: 'cover'}}/>
          <h4 style={{margin: '15px 0 5px', color: 'black'}}>Handcrafted Leather Sandals</h4>
          <p style={{color: '#666', fontSize: '13px'}}>Quality you can trust, delivered to your door.</p>
          <p style={{color: '#0A7A0A', fontWeight: 'bold', fontSize: '18px', margin: '10px 0'}}>CFA12000</p>
          <button onClick={() => setCart(cart + 1)} style={{width: '100%', padding: '12px', background: '#0A7A0A', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold'}}>🛒 Add to Cart</button>
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={{padding: '40px 20px', background: '#F9F9F9', textAlign: 'center'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}}>
          <div>
            <h2 style={{fontSize: '32px', color: '#0A7A0A', margin: '0'}}>12,000+</h2>
            <p style={{color: '#666', fontSize: '14px', margin: '5px 0 0'}}>Happy Customers</p>
          </div>
          <div>
            <h2 style={{fontSize: '32px', color: '#0A7A0A', margin: '0'}}>8,500+</h2>
            <p style={{color: '#666', fontSize: '14px', margin: '5px 0 0'}}>Orders Delivered</p>
          </div>
          <div>
            <h2 style={{fontSize: '32px', color: '#0A7A0A', margin: '0'}}>650+</h2>
            <p style={{color: '#666', fontSize: '14px', margin: '5px 0 0'}}>Verified Sellers</p>
          </div>
          <div>
            <h2 style={{fontSize: '32px', color: '#0A7A0A', margin: '0'}}>24/7</h2>
            <p style={{color: '#666', fontSize: '14px', margin: '5px 0 0'}}>Customer Support</p>
          </div>
        </div>
      </section>

      {/* PAYMENTS SECTION */}
      <section style={{padding: '50px 20px'}}>
        <p style={{color: '#D4AF37', fontSize: '14px', fontWeight: 'bold'}}>PAYMENTS</p>
        <h2 style={{fontSize: '28px', marginBottom: '10px', color: 'black'}}>Pay your way — in Nigeria or anywhere</h2>
        <p style={{color: '#666', fontSize: '14px', marginBottom: '15px'}}>Checkout is fast and secure whether you're paying from Lagos, London or New York. Every order is covered by our buyer protection promise.</p>
        <p style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#0A7A0A', fontWeight: 'bold', fontSize: '14px'}}>✅ 100% secure checkout</p>

        <div style={{background: 'white', border: '1px solid #eee', borderRadius: '15px', padding: '20px', marginTop: '20px'}}>
          <p style={{fontWeight: 'bold', marginBottom: '15px', color: 'black'}}>● NIGERIA</p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
            {['Paystack', 'Flutterwave', 'Bank Transfer', 'USSD', 'Verve'].map(item => (
              <span key={item} style={{background: '#F0F0F0', padding: '8px 15px', borderRadius: '20px', fontSize: '13px', color: '#333'}}>{item}</span>
            ))}
          </div>
        </div>

        <div style={{background: 'white', border: '1px solid #eee', borderRadius: '15px', padding: '20px', marginTop: '15px'}}>
          <p style={{fontWeight: 'bold', marginBottom: '15px', color: 'black'}}>● INTERNATIONAL</p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
            {['Visa', 'Mastercard', 'PayPal'].map(item => (
              <span key={item} style={{background: '#F0F0F0', padding: '8px 15px', borderRadius: '20px', fontSize: '13px', color: '#333'}}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section style={{padding: '40px 20px'}}>
        <div style={{background: 'linear-gradient(135deg, #0A7A0A 0%, #095a09 100%)', borderRadius: '20px', padding: '40px 20px', textAlign: 'center', color: 'white'}}>
          <h2 style={{fontSize: '28px', marginBottom: '15px'}}>Ready to buy, sell or grow with us?</h2>
          <p style={{fontSize: '14px', marginBottom: '25px', opacity: 0.9}}>Join thousands of Nigerians and international customers who trust OMUGO EMPIRE every day.</p>
          <button style={{width: '100%', padding: '15px', background: '#D4AF37', color: 'black', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', marginBottom: '12px'}}>Start Shopping</button>
          <button style={{width: '100%', padding: '15px', background: 'transparent', color: 'white', border: '1px solid white', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold'}}>Chat on WhatsApp</button>
        </div>
      </section>

      {/* FLOATING BUTTONS */}
      <a href="https://wa.me/2347035399931" target="_blank" style={{position: 'fixed', bottom: '20px', left: '20px', background: '#25D366', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(37,211,102,0.4)', zIndex: 200}}>💬</a>
      
      <button style={{position: 'fixed', bottom: '20px', right: '20px', background: '#0A7A0A', width: '55px', height: '55px', borderRadius: '50%', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', boxShadow: '0 4px 12px rgba(10,122,10,0.4)', zIndex: 200}}>🛒</button>

      {/* ANIMATION */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
      {/* FOOTER */}
      <footer style={{background: '#0A7A0A', color: 'white', padding: '40px 20px', marginTop: '50px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
          
          {/* Column 1: Logo + About */}
          <div>
            <img src={logoFull} alt="OMUGO EMPIRE" style={{height: '50px', marginBottom: '15px', background: 'white', padding: '8px', borderRadius: '8px'}} />
            <p style={{fontSize: '14px', lineHeight: '1.6', opacity: 0.9}}>
              Nigeria's trusted e-commerce marketplace for electronics, fashion, home and more.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{marginBottom: '15px', fontSize: '16px'}}>Quick Links</h4>
            <p style={{fontSize: '14px', margin: '8px 0', opacity: 0.9}}>Shop</p>
            <p style={{fontSize: '14px', margin: '8px 0', opacity: 0.9}}>Categories</p>
            <p style={{fontSize: '14px', margin: '8px 0', opacity: 0.9}}>Deals</p>
            <p style={{fontSize: '14px', margin: '8px 0', opacity: 0.9}}>Sell with us</p>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 style={{marginBottom: '15px', fontSize: '16px'}}>Support</h4>
            <p style={{fontSize: '14px', margin: '8px 0', opacity: 0.9}}>Help Center</p>
            <p style={{fontSize: '14px', margin: '8px 0', opacity: 0.9}}>Contact Us</p>
            <p style={{fontSize: '14px', margin: '8px 0', opacity: 0.9}}>Returns</p>
            <p style={{fontSize: '14px', margin: '8px 0', opacity: 0.9}}>Track Order</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '30px', paddingTop: '20px', textAlign: 'center', fontSize: '13px', opacity: 0.8}}>
          © 2026 OMUGO EMPIRE. All rights reserved.
        </div>
      </footer>
    </div> // This closes your main div
  )
}