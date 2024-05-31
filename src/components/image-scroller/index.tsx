import React from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import Image from 'next/image'

import { Artwork, works } from '@/utils/image-scroller'

const ImageScroller = () => {
  return (
    <div>
          <div className="scroll-area p-4">
          <ScrollArea className="w-full p-4 rounded-md border overflow-x-hidden">
  <div className="flex flex-nowrap space-x-4">
            {works.map((artwork) => (
              <figure key={artwork.artist} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={artwork.art}
                    alt={`Photo by ${artwork.artist}`}
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={300}
                    height={400}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by{" "}
                  <span className="font-semibold text-foreground">
                    {artwork.artist}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

      </div>
    </div>
  )
}

export default ImageScroller
