// an item
interface GalleryItem {
  src: string;
  caption: string;
  link: string;
}

export default function QRBoard({heading, items}:{heading:string;items:GalleryItem[]}) {

  return (
    //<div className="w-full flex justify-center">
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-full gap-6">
        
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center "
          >
            {/* Image box with border matching exact width */}
            <div className="p-2 shadow-sm rounded-md box-border">
              <img 
                src={item.src} 
                alt={item.caption} 
                className="w-auto h-48 sm:h-96 object-cover block rounded-sm"
              />
            </div>

            {/* Caption strictly below */}
            <p className="mt-3 text-center text-sm text-white w-full px-1">
              {item.caption}
            </p>
          </div>
        ))}

      </div>
    //</div>
  );
}