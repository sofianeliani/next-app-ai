import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeadingProps {
    title: string;
    description: string;
    icon: any;
    iconColor?: string;
    bgColor?: string;
} 


const Heading = ({
    title,
    description,
    icon,
    iconColor,
    bgColor
}: HeadingProps) => {
  return (
    <>
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
            <FontAwesomeIcon icon={icon} className={cn("w-10 h-10", iconColor)} />
        </div>
        <div className="text-3xl font-bold">
            <h2>
                {title}
            </h2>
            <p className="text-sm text-muted-foreground">
                {description}
            </p>
        </div>
       
    </div>
    </>
  );
};

export default Heading;
