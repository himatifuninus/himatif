import Button from "@/components/atoms/Button";
import MainLayout from "@/layouts/Main";
import { ICC_EVENTS } from "@/utilities/constant";

function EventItem({ title, date, contentPosition = "left" }) {
  return (
    <div className="mt-6 sm:mt-0 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex flex-col sm:flex-row justify-between w-full mx-auto items-center">
          <div
            className={`w-full sm:w-1/2 sm:${
              contentPosition == "left" ? "pr-8" : "pl-8 order-none sm:order-2"
            }`}
          >
            <div className="flex flex-col items-center p-4 bg-white rounded shadow">
              <p>{title}</p>
              <p className="text-[#5BCDA4]">{date}</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 w-40 h-32 bg-[#020181] rounded-lg"></div>
        </div>
        <div className="rounded-full bg-[#020181] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

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
