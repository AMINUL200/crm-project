// CompanyLogo.tsx
interface CompanyLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const CompanyLogo = ({ src, alt, width = 120, height = 60 }: CompanyLogoProps) => {
  return (
    <div className="flex items-center justify-center h-20 ">
      <img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className="object-contain max-h-full grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
      />
    </div>
  );
};

export default CompanyLogo;