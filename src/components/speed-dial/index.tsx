"use client";
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';


const SpeedDial = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="fixed bottom-4 right-4 z-50">
            <a
              href="https://wa.me/9667987233"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600"
            >
              <i className="ri-whatsapp-fill text-white text-xl"></i>
            </a>
          </div>
        </TooltipTrigger>
        <TooltipContent side="left" align="center">
          <span>Contact us on WhatsApp</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SpeedDial;
