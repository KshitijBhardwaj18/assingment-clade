import Image from "next/image";
import { cn } from "@/lib/uitls";

interface SkillButtonProps {
    img: string;
    text: string;
    width: number; // Ensure this is lowercase 'number'
}

const SkillButton: React.FC<SkillButtonProps> = ({ img, text, width }) => {
    return (
        <div className={cn(`border flex flex-row border-[#D0D5DD] p-[4px_6px] gap-[3px] rounded-[6px]`)} style={{ width: `${width}px` }}>
            <Image alt={text} src={img} height={16} width={16} className="p-[0px] m-[0px]" />
            <p className="text-[12px] text-[#344054] leading-[16.2px] flex  text-nowrap font-[500]">{text}</p>
        </div>
    );
};

export default SkillButton;
