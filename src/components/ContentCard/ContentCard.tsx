import Card from "../Card/Card";
import Button from "../Button/Button";
import {
  FileText,
  File,
  Image,
  Video,
} from "lucide-react";

type ContentCardProps = {
  title: string;
  type: "note" | "pdf" | "image" | "video";
  createdAt: string;
  onOpen?: () => void;
};

function ContentCard({
  title,
  type,
  createdAt,
  onOpen,
}: ContentCardProps) {
  const config = {
    note: {
      icon: <FileText size={22} />,
      label: "Note",
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    pdf: {
      icon: <File size={22} />,
      label: "PDF",
      bg: "bg-red-100",
      text: "text-red-600",
    },
    image: {
      icon: <Image size={22} />,
      label: "Image",
      bg: "bg-green-100",
      text: "text-green-600",
    },
    video: {
      icon: <Video size={22} />,
      label: "Video",
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
  };
console.log("TYPE =", type);
console.log("ITEM =", config[type as keyof typeof config]);
  const item = config[type];

  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`rounded-xl p-3 ${item.bg} ${item.text}`}
          >
            {item.icon}
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">
                {title}
              </h3>

              <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                {item.label}
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              {createdAt}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          onClick={onOpen}
        >
          Open
        </Button>
      </div>
    </Card>
  );
}

export default ContentCard;