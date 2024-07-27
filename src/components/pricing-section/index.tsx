'use client'
import React, { useContext, useEffect } from 'react'
import './page.css'
import Page from '@/app/header/page'
import { Badge } from '../ui/badge'
import JAButton from '../atoms/ja-button/ja-button'
import axios from 'axios'
import { CountryTrackContext } from '@/context/countryTrack'
import { Button } from '../ui/button'

const PricingSection = () => {
  const country=useContext(CountryTrackContext)
  const c=useContext(CountryTrackContext)
 


  const coutryLocation=async()=>{
    const response= await axios.get('https://ipapi.co/json/').then((data)=>{
      if(data.data.country_name==="India")
        {
          console.log("india");
          
            c.setCountryTrack(true)
        }
        else{

        
         
          
          c.setCountryTrack(false)
          console.log(c.countryTrack);
          
        }
    
     
    })
    // console.log(response);
    

    // if(response.data.country_name==="India")
    //   {
    //     c.setCountryTrack(true)
    //   }
    //   else{
    //     c.setCountryTrack(false)
    //   }
    
    
  }

  console.log(c.countryTrack);
  


  useEffect(()=>{
    
     coutryLocation()
     
  },[])
  return (
    <div>

      <div className="pricing-page">
        <div className="header">
          <h1>Affordable cPanel Licenses</h1>
        </div>

<div className="price_table">
<div className="package package_gold">
  <div className="banner">Popular</div>
  <div className="price">
    <h2 className='text-3xl font-bold'>WHM</h2>
    <p className="price-description">VPS Free Premium
    Softaculous + Fleet SSL + SitePAD</p>
  </div>
  <div className="prices">{country.countryTrack
                      ? `₹`
                      : ` $`}<div className="big">5</div>/mo</div>
  <ul className="package-features">
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> One command installation</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Real-time updates</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free license IP change</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free technical support</li>
  </ul>
  <div className="choose-btn">
  <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-blue-300 to-blue-600 opacity-75 blur" />
  Choose Plan
</Button>

  </div>
</div>
<div className="package package_gold">
  {/* <div className="banner">Popular</div> */}
  <div className="price">
    <h2 className='text-3xl font-bold'>WHM</h2>
    <p className="price-description">Dedicated Free Premium
    Softaculous + Fleet SSL + SitePAD</p>
  </div>
  <div className="prices">{country.countryTrack
                      ? `₹`
                      : ` $`}<div className="big">10</div>/mo</div>
  <ul className="package-features">
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> One command installation</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Real-time updates</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free license IP change</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free technical support</li>
  </ul>
  <div className="choose-btn">
  <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-blue-300 to-blue-600 opacity-75 blur" />
  Choose Plan
</Button>

  </div>
</div>
<div className="package package_gold">
  {/* <div className="banner">Popular</div> */}
  <div className="price">
    <h2 className='text-3xl font-bold'>CLOUD</h2>
    <p className="price-description">Linux</p>
  </div>
  <div className="prices">{country.countryTrack
                      ? `₹`
                      : ` $`}<div className="big">6</div>/mo</div>
  <ul className="package-features">
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> One command installation</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Real-time updates</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free license IP change</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free technical support</li>
  </ul>
  <div className="choose-btn mt-[20px]">
  <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-blue-300 to-blue-600 opacity-75 blur" />
  Choose Plan
</Button>

  </div>
</div>
<div className="package package_gold">
  <div className="banner">Popular</div>
  <div className="price">
    <h2 className='text-3xl font-bold'>IMUNIFY</h2>
    <p className="price-description">360</p>
  </div>
  <div className="prices">{country.countryTrack
                      ? `₹`
                      : ` $`}<div className="big">3</div>/mo</div>
  <ul className="package-features">
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> One command installation</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Real-time updates</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free license IP change</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free technical support</li>
  </ul>
  <div className="choose-btn">
  <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-blue-300 to-blue-600 opacity-75 blur" />
  Choose Plan
</Button>

  </div>
</div>
<div className="package package_gold">
  <div className="banner">Popular</div>
  <div className="price">
    <h2 className='text-3xl font-bold'>JET</h2>
    <p className="price-description">Backup</p>
  </div>
  <div className="prices">{country.countryTrack
                      ? `₹`
                      : ` $`}<div className="big">3</div>/mo</div>
  <ul className="package-features">
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> One command installation</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Real-time updates</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free license IP change</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free technical support</li>
  </ul>
  <div className="choose-btn">
  <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-blue-300 to-blue-600 opacity-75 blur" />
  Choose Plan
</Button>

  </div>
</div>
<div className="package package_gold">
  {/* <div className="banner">Popular</div> */}
  <div className="price">
    <h2 className='text-3xl font-bold'>WHM</h2>
    <p className="price-description">Reseller</p>
  </div>
  <div className="prices">{country.countryTrack
                      ? `₹`
                      : ` $`}<div className="big">3</div>/mo</div>
  <ul className="package-features">
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> One command installation</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Real-time updates</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free license IP change</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free technical support</li>
  </ul>
  <div className="choose-btn">
  <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-blue-300 to-blue-600 opacity-75 blur" />
  Choose Plan
</Button>

  </div>
</div>
<div className="package package_gold">
  {/* <div className="banner">Popular</div> */}
  <div className="price">
    <h2 className='text-3xl font-bold'>PLESK</h2>
    <p className="price-description">VPS</p>
  </div>
  <div className="prices">{country.countryTrack
                      ? `₹`
                      : ` $`}<div className="big">6</div>/mo</div>
  <ul className="package-features">
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> One command installation</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Real-time updates</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free license IP change</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free technical support</li>
  </ul>
  <div className="choose-btn">
  <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-blue-300 to-blue-600 opacity-75 blur" />
  Choose Plan
</Button>

  </div>
</div>
<div className="package package_gold">
  <div className="banner">Popular</div>
  <div className="price">
    <h2 className='text-3xl font-bold'>PLESK</h2>
    <p className="price-description">Dedicated</p>
  </div>
  <div className="prices">{country.countryTrack
                      ? `₹`
                      : ` $`}<div className="big">8</div>/mo</div>
  <ul className="package-features">
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> One command installation</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Real-time updates</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free license IP change</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free technical support</li>
  </ul>
  <div className="choose-btn">
  <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-blue-300 to-blue-600 opacity-75 blur" />
  Choose Plan
</Button>

  </div>
</div>
<div className="package package_gold">
  {/* <div className="banner">Popular</div> */}
  <div className="price">
    <h2 className='text-3xl font-bold'>WHMCS</h2>
    <p className="price-description">Billing & Automation Platform</p>
  </div>
  <div className="prices">{country.countryTrack
                      ? `₹`
                      : ` $`}<div className="big">3</div>/mo</div>
  <ul className="package-features">
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> One command installation</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Real-time updates</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free license IP change</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free technical support</li>
  </ul>
  <div className="choose-btn">
  <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-blue-300 to-blue-600 opacity-75 blur" />
  Choose Plan
</Button>

  </div>
</div>
<div className="package package_gold">
  {/* <div className="banner">Popular</div> */}
  <div className="price">
    <h2 className='text-3xl font-bold'>LITE SPEED</h2>
    <p className="price-description">4Core(6{country.countryTrack
                      ? `₹`
                      : ` $`}), 6Core(8{country.countryTrack
                      ? `₹`
                      : ` $`}), 8Core(10{country.countryTrack
                      ? `₹`
                      : ` $`}), 10Core(12{country.countryTrack
                      ? `₹`
                      : ` $`})</p>
  </div>
  <div className="prices">{country.countryTrack
                      ? `₹`
                      : ` $`}<div className="big">5</div>/mo</div>
  <ul className="package-features">
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> One command installation</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Real-time updates</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free license IP change</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Free technical support</li>
  </ul>
  <div className="choose-btn mt-[40px]">
  <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-blue-300 to-blue-600 opacity-75 blur" />
  Choose Plan
</Button>

  </div>
</div>
<div className="package package_gold">
  <div className="banner">Popular</div>
  <div className="price">
    <h2 className='text-3xl font-bold'>BUCKET</h2>
    <p className="price-description">Dedicated</p>
  </div>
  <div className="prices">{country.countryTrack
                      ? `₹`
                      : ` $`}<div className="big">10</div>/mo</div>
  <ul className="package-features">
 





    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> 1 TB Storage Space For BackUp</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> Hosting</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i>  Real-time updates</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i>  FTP, FTPS, SFTP, SCP, Samba/CIFS, HTTPS, WebDAV</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i>  Free technical support</li>
  </ul>
  <div className="choose-btn">
  <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-blue-300 to-blue-600 opacity-75 blur" />
  Choose Plan
</Button>

  </div>
</div>
<div className="package package_gold">
  {/* <div className="banner">Popular</div> */}
  <div className="price">
    <h2 className='text-3xl font-bold'>BUCKET</h2>
    <p className="price-description">Dedicated</p>
  </div>
  <div className="prices">{country.countryTrack
                      ? `₹`
                      : ` $`}<div className="big">25</div>/mo</div>
  <ul className="package-features">
 





    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i> 5 TB Storage Space For BackUp</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i>Hosting</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i>  Real-time updates</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i>  FTP, FTPS, SFTP, SCP, Samba/CIFS, HTTPS, WebDAV</li>
    <li><i className="ri-checkbox-circle-fill text-xl text-green-500"></i>  Free technical support</li>
  </ul>
  <div className="choose-btn">
  <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-400 px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-blue-300 to-blue-600 opacity-75 blur" />
  Choose Plan
</Button>

  </div>
</div>



</div>


</div>
    </div>
  )
}

export default PricingSection
