import Button from "@/components/atoms/Button";
import MainLayout from "@/layouts/Main";
import { ICC_EVENTS } from "@/utilities/constant";
import EventItem from "@/modules/Event/EventItem";

function EventSection() {
  return (
    <MainLayout>
      <Button text="Event" />
      <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
        <div className="relative text-gray-700 antialiased text-sm font-semibold">
          <div className="hidden sm:block w-1 bg-[#020181] absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {ICC_EVENTS.map((event) => (
            <EventItem key={event.title} {...event} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default EventSection;
