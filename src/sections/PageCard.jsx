// sections/PageCard.jsx
import Button from "@/components/Button";
import Newcard from "@/components/NewCard";
import { FaMousePointer, FaChartLine, FaLaptop, FaTags, FaUserFriends, FaShoppingCart } from "react-icons/fa";

const cardData = [
  {
    title: "Attribution Analytics",
    description: "Convert your marketing efforts into actual return on investment.",
    icon: <FaMousePointer />,
  },
  {
    title: "Campaign Tracking",
    description: "Know exactly which campaigns are driving results.",
    icon: <FaChartLine />,
  },
  {
    title: "Dashboard",
    description: "Your one-stop-shop for all your marketing analytics.",
    icon: <FaLaptop />,
  },
  {
    title: "Offer Identification",
    description: "Turn your data into actionable insights to optimize offers.",
    icon: <FaTags />,
  },
  {
    title: "User Journey Visualization",
    description: "Understand your customer's path from click to conversion.",
    icon: <FaUserFriends />,
  },
  {
    title: "Conversion Optimization",
    description: "Improve conversion rates based on detailed insights.",
    icon: <FaShoppingCart />,
  },
];

const PageCard = () => {
  return (
    <section className="py-24">
      <div className="text-center mb-12 max-w-3xl mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          <span className="text-lime-400">VGC</span> Gives You Everything You Need To Master Your Marketing Analytics
        </h2>
        <p className="text-lime-400 text-lg mt-4 font-semibold">
          Plus the Tools to Help You Make Data-Driven Decisions!
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {cardData.map((card, index) => (
          <div className="w-full" key={index}>
            <Newcard
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-12">
        <Button variant="primary">Book a call</Button>
      </div>
    </section>
  );
};

export default PageCard;
