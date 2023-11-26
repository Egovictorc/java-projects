import {Icon,  IconProps} from "@iconify/react";
import {cn} from "../../lib/utils";


const Iconify = ({ icon, color, width, className, ...props }: IconProps) => {
    return <Icon icon={icon} color={color || "inherit"} width={width || "16"} className={cn(className)} {...props} />;
};

export default Iconify;
