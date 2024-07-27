'use client';
import React, { useEffect,useContext } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import './index.style.css';
import SubscriptionCard from './subscription-card';
// import JAButton from '../atoms/ja-button/ja-button';
// import FullLogo from '../../../public/logo-full.svg';
import Image from 'next/image';
// import { useLocale, useTranslations } from 'next-intl';
// import { useRouter } from '@/navigation';
import SubscriptionCardCarousel from './mobile-version/subscription-card-carousel';
import { Button } from '../ui/button';
import { CountryTrackContext } from '@/context/countryTrack';
import axios from 'axios'

const Subscription = () => {
  const [trackPlan, setTrackPlan] = React.useState<boolean>(false);
  const [isMobile, setIsMobile] = React.useState<boolean>();
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
  
  // const t = useTranslations('subscription');
  // const router = useRouter();
  // const locale = useLocale();

  const redirectToSignUp = () => {
    // router.push('/auth/signup', { locale });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className=' mt-4'>
      <div className='flex flex-col space-y-2 items-center justify-center'>
        <h1 className='text-center font-bold sm:text-[1.8rem] md:text-[1.8rem] lg:text-[1.8rem] text-[1.3rem]'>
          {('subscription_page_title')}
        </h1>
        <div className='flex justify-center'>
          <p className='sm:text-[0.9rem] md:text-[0.9rem] lg:text-[0.9rem] text-[0.6rem] w-[45vw] text-[#9f9e9e] text-center'>
            {('subscription_page_description')}
          </p>
        </div>
        <div className='flex items-center space-x-2 !mt-[1.4rem] subcription_switch_button mr-[1rem] '>
          <Label
            htmlFor='payment-plan'
            className='sm:text-[0.9rem] md:text-[0.9rem] lg:text-[0.9rem] text-[0.8rem]'
          >
            {('plan_selection_monthly')}
          </Label>
          <Switch
            id='payment-plan'
            checked={trackPlan}
            onClick={() => setTrackPlan(!trackPlan)}
          />
          <Label
            htmlFor='payment-plan'
            className='sm:text-[0.9rem] md:text-[0.9rem] lg:text-[0.9rem] text-[0.8rem]'
          >
            {('plan_selection_yearly')}
          </Label>
        </div>
      </div>

      <div className='mt-8  w-[100%]'>
        {isMobile ? (
          <SubscriptionCardCarousel trackPlan={trackPlan} />
        ) : (
          <SubscriptionCard trackPlan={trackPlan} />
        )}
      </div>

      <div className='  flex flex-col space-y-2 items-center justify-center mt-[7rem]'>
        <h1 className='text-center font-bold sm:text-[1.8rem] md:text-[1.8rem] lg:text-[1.8rem] text-[1.3rem]'>
          {('test.title')}
        </h1>

        <p className='sm:text-[0.9rem] md:text-[0.9rem] lg:text-[0.9rem] text-[0.6rem] w-[45vw] text-[#9f9e9e] text-center'>
          {('test.description')}
        </p>

        <div className='flex items-center space-x-2 !mt-[1.4rem] subcription_switch_button mr-[1rem] sm:w-[22%] md:w-[20%] lg:w-[18%] w-[50%]'>
          <Button
            className='!w-full'
            onClick={() => {
              redirectToSignUp();
            }}
            variant={'outline'}
          >
            {('test.test_btn')}
          </Button>
        </div>
      </div>
      <div className='border-[1px] mt-16 subscription_card_footer flex justify-center items-center flex-col gap-8 sm:py-10 md:py-8 lg:py-10 py-6'>
        <div>
          {isMobile ? (
            <Image
              src="/Group.svg"
              alt='logo'
              width={100}
              height={100}
            />
          ) : (
            <Image
              src="/Group.svg"
              alt='logo'
              width={200}
              height={200}
            />
          )}
        </div>
        <div className=' text-[#9f9e9e] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[0.9rem] text-[0.6rem] flex sm:gap-8 md:gap-9 lg:gap-10 gap-7'>
          <p>Impressum</p>
          <p>Datenschutz</p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
