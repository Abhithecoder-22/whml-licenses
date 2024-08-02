'use client'
import React, { useContext, useEffect } from 'react'
import './page.css'
import { Button } from '../ui/button'
import axios from 'axios'
import { CountryTrackContext } from '@/context/countryTrack'

const priceData = [
  { title: 'WHM/cPanel License VPS', inr: 335.00, usd: 4.00, popular: false },
  { title: 'WHM/cPanel License Dedicated', inr: 500.00, usd: 6.00, popular: true },
  { title: 'Cloud Linux', inr: 334.00, usd: 4.00, popular: false },
  { title: 'Imunify360 - Powered by AI and Proactive Defense License', inr: 150.00, usd: 2.00, popular: false },
  { title: 'JetBackup License', inr: 150.00, usd: 2.00, popular: false },
  { title: 'WHMReseller - Multi Level Reseller Plugin License', inr: 300.00, usd: 4.00, popular: false },
  { title: 'Plesk License - VPS Licensing System', inr: 500.00, usd: 6.00, popular: true },
  { title: 'Plesk License - Dedicated Server', inr: 600.00, usd: 8.00, popular: false },
  { title: 'Cheap WHMCS License', inr: 800.00, usd: 10.00, popular: false },
  { title: 'Cheap LiteSpeed 4 Worker', inr: 500.00, usd: 6.00, popular: true },
  { title: 'Cheap LiteSpeed 6 Worker', inr: 650.00, usd: 8.00, popular: false },
  { title: 'Cheap LiteSpeed 8 Worker', inr: 800.00, usd: 10.00, popular: false },
  { title: 'Cheap LiteSpeed X Worker', inr: 1000.00, usd: 12.00, popular: false },
]

const PricingSection = () => {
  const country = useContext(CountryTrackContext)

  const fetchCountryLocation = async () => {
    try {
      const { data } = await axios.get('https://ipapi.co/json/')
      country.setCountryTrack(data.country_name === 'India')
    } catch (error) {
      console.error('Error fetching country location:', error)
    }
  }

  useEffect(() => {
    fetchCountryLocation()
  }, [])

  return (
    <div className="pricing-page">
      <div className="header">
        <h1>Affordable cPanel Licenses</h1>
      </div>

      <div className="price_table">
        {priceData.map((item, index) => (
          <div key={index} className="package package_gold">
            {item.popular && <div className="banner">Popular</div>}
            <div className={`price ${item.popular ? 'with-popular' : ''}`}>
              <h2 className='text-3xl font-bold'>{item.title.split(' ')[0]}</h2>
              <p className="price-description">{item.title.split(' ').slice(1).join(' ')}</p>
            </div>
            <div className="prices">
              {country.countryTrack ? '₹' : '$'}
              <div className="big">{country.countryTrack ? item.inr : item.usd}</div>/mo
            </div>
            <ul className="package-features">
              <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> One command installation</li>
              <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Real-time updates</li>
              <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free license IP change</li>
              <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free technical support</li>
            </ul>
            <div className="choose-btn">
              <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <div className={`absolute -inset-0.5 -z-10 rounded-lg ${item.popular ? 'bg-gradient-to-b from-blue-300 to-blue-600' : ''} opacity-75 blur`} />
                Choose Plan
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingSection
