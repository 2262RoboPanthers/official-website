// an item
interface GalleryItem {
  src: string;
  caption: string;
  link: string;
}

export default function QRBoard({heading, items}:{heading:string;items:GalleryItem[]}) {

  return (
    //<div className="w-full flex justify-center">
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-full">
        
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center w-full max-w-xs"
          >
            {/* Image box with border matching exact width */}
            <div className="w-full p-2 shadow-sm rounded-md box-border">
              <img 
                src={item.src} 
                alt={item.caption} 
                className="w-full h-auto block rounded-sm"
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