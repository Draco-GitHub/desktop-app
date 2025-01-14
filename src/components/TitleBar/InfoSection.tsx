
interface InfoSectionProps {
    text: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({text}:InfoSectionProps) => {
    return (
        <div className="flex-row flex-grow-1 text-center">
            <p>{text}</p>
        </div>
    );
}

export default InfoSection;